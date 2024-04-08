package com.example.demo.constClass;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
@Setter
public class RestApi {
    public static final String GET_ALL_GENRE = "http://localhost:8080/genre";
    public static final String GET_ALL_CHAR = "http://localhost:8080/character";
}
