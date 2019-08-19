package org.zerock.zerock.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.zerock.domain.Todo;
import org.zerock.zerock.repositories.TodoRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/todo/*")
@AllArgsConstructor
public class TodoController{

private TodoRepository ropo;


    @PostMapping("/new")
    public String addTodo(@RequestBody Todo todo){
        System.out.println("배고프으~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`");
        return "succes";
    }




}