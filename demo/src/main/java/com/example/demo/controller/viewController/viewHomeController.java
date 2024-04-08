package com.example.demo.controller.viewController;

import com.example.demo.constClass.RestApi;
import com.example.demo.entity.Character;
import com.example.demo.entity.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping
public class viewHomeController {
    private final RestTemplate restTemplate;

    @Autowired
    public viewHomeController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/home")
    public String index(Model model) {
        List<Genre> genreList = List.of(Objects.requireNonNull(restTemplate.getForObject(RestApi.GET_ALL_GENRE, Genre[].class)));
        model.addAttribute("genreList", genreList);
        List<Character> characterList = List.of(Objects.requireNonNull(restTemplate.getForObject(RestApi.GET_ALL_CHAR, Character[].class)));
        model.addAttribute("charList", characterList);
        return "home";
    }

    @GetMapping("/categories")
    public String getAllGenres(Model model) {
        List<Genre> genreList = List.of(Objects.requireNonNull(restTemplate.getForObject(RestApi.GET_ALL_GENRE, Genre[].class)));
        model.addAttribute("genreList", genreList);
        return "allGenre";
    }
}
