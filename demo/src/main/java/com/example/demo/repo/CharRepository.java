package com.example.demo.repo;

import com.example.demo.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharRepository extends JpaRepository<Character, Integer> {
}
