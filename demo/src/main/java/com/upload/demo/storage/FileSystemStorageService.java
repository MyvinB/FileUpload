package com.upload.demo.storage;

import com.upload.demo.exception.StorageException;
import com.upload.demo.exception.StorageFileNotFoundException;
import com.upload.demo.property.StorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

@Service
public class FileSystemStorageService implements StorageService {

    private final Path rootLocation;
    private Path rootUser;

    @Autowired
    public FileSystemStorageService(StorageProperties properties) {

        this.rootLocation = Paths.get(properties.getLocation());

    }

    @Override
    public void store(MultipartFile file,String userId) {

        String filename = file.getOriginalFilename();
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file " + filename);
            }


            try (InputStream inputStream = file.getInputStream()) {
                createDirectory(userId);
                Files.copy(inputStream, this.rootUser.resolve(filename),StandardCopyOption.REPLACE_EXISTING);
            }
        }
        catch (IOException e) {
            throw new StorageException("Failed to store file " + filename, e);
        }
    }

    @Override
    public void createDirectory(String userId){
        this.rootUser=Paths.get(this.rootLocation.toString()+"/"+userId);
        try {
            if(!Files.exists(rootUser))
            Files.createDirectory(rootUser);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Resource loadFile(String filename) {
        try {
            Path file = rootUser.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("FAIL!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("FAIL!");
        }
    }

    @Override
    public Stream<Path> loadAll(String userId) {
        try {
        createDirectory(userId);
            return Files.walk(this.rootUser, 1)
                    .filter(path -> !path.equals(this.rootUser))
                    .map(this.rootUser::relativize);

        }
        catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }

    }



    @Override
    public Path load(String filename) {
        return rootUser.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            }
            else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        }
        catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }
    @Override
    public void init() {
        try {
            if(Files.notExists(rootLocation))
            Files.createDirectory(rootLocation);
        } catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }
}