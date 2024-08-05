package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5174/")
public class UserController {
	@Autowired
    private UserService  userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody UserDTO userDTO) {
    	return userService.registerUser(userDTO);
    	
    
    
       
    }
   
}
