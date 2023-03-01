package com.example.delivery.entities;

import org.apache.logging.log4j.CloseableThreadContext;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class Order implements Serializable {

    private Long id;
    private String adress;
    private double latitude;
    private double longitude;
    private CloseableThreadContext.Instance moment;
    private OrderStatus status;
    private Set<Produto> produtos = new HashSet<>();

    public Order(){

    };

    public Order(Long id, String adress, double latitude, double longitude, CloseableThreadContext.Instance moment, OrderStatus status, Set<Produto> produtos) {
        this.id = id;
        this.adress = adress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.moment = moment;
        this.status = status;
        this.produtos = produtos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public CloseableThreadContext.Instance getMoment() {
        return moment;
    }

    public void setMoment(CloseableThreadContext.Instance moment) {
        this.moment = moment;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public Set<Produto> getProducts() {
        return produtos;
    }

    public void setProducts(Set<Produto> produtos) {
        this.produtos = produtos;
    }
}
