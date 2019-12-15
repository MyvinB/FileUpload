package com.upload.demo;

import com.upload.demo.controller.FileUploadController;
import com.upload.demo.filter.JwtFilter;
import com.upload.demo.property.StorageProperties;
import com.upload.demo.storage.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import javax.servlet.Filter;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

//	@Bean
//	public FilterRegistrationBean<Filter> jwtFilter() {
//		final FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<>();
//		registrationBean.setFilter(new JwtFilter());
//		registrationBean.addUrlPatterns("/api/*");
//		return registrationBean;
//	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {


			//storageService.deleteFile("upload-dir/panda/Sweat Fest.mp4");
			storageService.init();
		};
	}
}
