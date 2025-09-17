package com.FlashMart.FlashMart_BackEnd.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class CartList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    private String name;
    private double price;
    private int quantity;
    private String img;

    @ManyToMany
    @JoinTable(
            name = "cart_products",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products;

    // Getters and setters
}
