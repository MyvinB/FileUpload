package com.upload.demo.storage;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface StorageService {
    void init();
    void store(MultipartFile file,String userId);
    void createDirectory(String userId);
    Stream<Path> loadAll(String userId);
    Resource loadFile(String file);
    Path load(String filename);
    Resource loadAsResource(String filename);


}
