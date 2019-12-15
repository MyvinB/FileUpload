package com.upload.demo.controller;


import com.upload.demo.storage.StorageService;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.stream.Collectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import sun.tools.jconsole.JConsole;


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
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file,
                                                   HttpServletRequest request) {
        //System.out.println("hit check");

        final String authHeader = request.getHeader("authorization");
        final String token = authHeader.substring(7);
        String userId = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
        System.out.println(userId);
        storageService.store(file,userId);
        return new ResponseEntity<String>("User registered successfully", HttpStatus.CREATED);


    }
    @RequestMapping(value = "/getallfiles", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?>  getListFiles(Model model, HttpServletRequest request) throws JSONException {
        final String authHeader = request.getHeader("authorization");
        final String token = authHeader.substring(7);
        String userId = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
        System.out.println(userId);


        Map<String, String> filesLink = storageService.loadAll(userId).collect(Collectors.toMap(file->file.toString(),file->MvcUriComponentsBuilder
                .fromMethodName(FileUploadController.class, "getFile", file.toString()).build().toString()));
        // using for-each loop for iteration over Map.entrySet()




        return new ResponseEntity<>(filesLink, HttpStatus.CREATED);



    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        System.out.println("call check");

        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);

    }

    @DeleteMapping("/delete/{user}/{fileName}")
    public ResponseEntity<?> deleteFile(@PathVariable String user,@PathVariable String fileName) {
        Boolean check=storageService.deleteFile(user+"/"+fileName);
        //System.out.println(user+" "+fileName);
        //System.out.println(fileName);
        System.out.println(check);
        return new  ResponseEntity<>("check",HttpStatus.OK);

    }







}
