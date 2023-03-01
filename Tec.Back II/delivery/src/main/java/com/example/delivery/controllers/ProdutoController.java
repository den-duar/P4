package com.example.delivery.controllers;

import com.example.delivery.dtos.ProdutoDTO;
import com.example.delivery.services.ProdutoService;
import com.example.delivery.entities.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService service;


    @GetMapping
    public List<String> findAll(){
        return service.findAll();
    }

    @GetMapping("/todos")
    public List<Produto> findAllProduct(){
        return service.findAllProduct();
    }

    @GetMapping("/todosDto")
    public List<ProdutoDTO> findAllProductDto(){
        return service.findAllProductDto();
    }
}
