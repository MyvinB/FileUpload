package com.upload.demo.controller;

import com.upload.demo.storage.StorageService;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api")
@CrossOrigin
public class FileUploadController {
    private final StorageService storageService;
    List<String> files = new ArrayList<String>();

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @PostMapping("/")
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
                                                   HttpServletRequest request) {
        //System.out.println("hit check");
        final String authHeader = request.getHeader("authorization");
        final String token = authHeader.substring(7);
        String userId = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
        System.out.println(userId);
        storageService.store(file,userId);
        return "sjs";


    }

    @GetMapping("/getallfiles")
    public ResponseEntity<List<String>> getListFiles(Model model,HttpServletRequest request) {
        final String authHeader = request.getHeader("authorization");
        final String token = authHeader.substring(7);
        String userId = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
        System.out.println(userId);
        List<String> fileNames = storageService.loadAll(userId)
                .map(fileName -> MvcUriComponentsBuilder
                        .fromMethodName(FileUploadController.class, "getFile", fileName.toString()).build().toString())
                .collect(Collectors.toList());
       // System.out.println(Arrays.toString(fileNames.toArray()));

        return ResponseEntity.ok().body(fileNames);
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        System.out.println("call check");

        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, file.getFilename())
                .body(file);
    }






}
