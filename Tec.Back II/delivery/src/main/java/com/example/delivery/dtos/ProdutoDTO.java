package com.example.delivery.dtos;

import com.example.delivery.entities.Produto;

public class ProdutoDTO {

    private Long id;
    private String nome;
    private double preco;
    private String descricao;
    private String imageUri;

    public ProdutoDTO(){

    }

    public ProdutoDTO(Long id, String name, double price, String descricao, String imageUri) {
        this.id = id;
        this.nome = name;
        this.preco = price;
        this.descricao = descricao;
        this.imageUri = imageUri;
    }

    public ProdutoDTO(Produto entity) {
        this.id = entity.getId();
        this.nome = entity.getNome();
        this.preco = entity.getPreco();
        this.descricao = entity.getDescricao();
        this.imageUri = entity.getImageUri();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return nome;
    }

    public void setName(String name) {
        this.nome = name;
    }

    public double getPrice() {
        return preco;
    }

    public void setPrice(double price) {
        this.preco = price;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImageUri() {
        return imageUri;
    }

    public void setImageUri(String imageUri) {
        this.imageUri = imageUri;
    }
}
