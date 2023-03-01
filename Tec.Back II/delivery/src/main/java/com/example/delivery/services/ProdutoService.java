package com.example.delivery.services;

import com.example.delivery.dtos.ProdutoDTO;
import com.example.delivery.entities.Produto;
import com.example.delivery.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public List<String> findAll(){
        return repository.findAll();
    }

    public List<Produto> findAllProduct(){
        return repository.findAllProduct();
    }

    public List<ProdutoDTO> findAllProductDto(){
        List<Produto> produtos = repository.findAllProduct();
        return produtos.stream().map(x -> new ProdutoDTO(x)).collect(Collectors.toList());
    }
}
