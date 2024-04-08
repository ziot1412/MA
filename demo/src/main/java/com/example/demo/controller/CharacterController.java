package com.example.demo.controller;

import com.example.demo.entity.Character;
import com.example.demo.service.CharService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/character")
public class CharacterController {
    private final CharService charService;

    @Autowired
    public CharacterController(CharService charService) {
        this.charService = charService;
    }

    @GetMapping
    public List<Character> getAll() {
        return charService.getAll();
    }
}
