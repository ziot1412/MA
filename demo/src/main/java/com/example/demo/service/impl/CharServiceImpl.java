package com.example.demo.service.impl;

import com.example.demo.entity.Character;
import com.example.demo.repo.CharRepository;
import com.example.demo.service.CharService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharServiceImpl implements CharService {
    private CharRepository charRepository;

    @Autowired
    public CharServiceImpl(CharRepository charRepository) {
        this.charRepository = charRepository;
    }

    @Override
    public List<Character> getAll() {
        return charRepository.findAll();
    }
}
