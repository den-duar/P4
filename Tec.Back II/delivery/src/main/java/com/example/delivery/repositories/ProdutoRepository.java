package com.example.delivery.repositories;

import com.example.delivery.entities.Produto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProdutoRepository {


    public List<String> findAll(){
        List<String> teste = new ArrayList<>();
        teste.add("teste 1");
        teste.add("teste 2");
        teste.add("teste 3");
        teste.add("teste 4");
        return teste;
    }

    public List<Produto> findAllProduct(){
        List<Produto> teste = new ArrayList<>();
        teste.add(new Produto(1L, "teste1", 1.0, "teste 1", "http:/teste1"));
        teste.add(new Produto(2L, "teste2", 2.0, "teste 2", "http:/teste2"));
        teste.add(new Produto(3L, "teste3", 3.0, "teste 3", "http:/teste3"));
        teste.add(new Produto(4L, "teste4", 4.0, "teste 4", "http:/teste4"));
        return teste;
    }

}
