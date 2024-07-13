package com.codoacodo.controller;

import com.codoacodo.dto.UserLogin;
import com.codoacodo.entity.UserEntity;
import com.codoacodo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserEntity user) {
        userService.register(user);
        return new ResponseEntity<>("Usuario registrado correctamente!", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody UserLogin userLogin) {
        boolean loginOk = userService.login(userLogin.getEmail(), userLogin.getPassword());

        if (loginOk)
            return new ResponseEntity<>(true, HttpStatus.OK);

        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }

}
