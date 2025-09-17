package com.FlashMart.FlashMart_BackEnd.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String name;
    private String brand;
    private double price;
    private double discount;
    private boolean availability;

    // ✅ No reference to CartList here (unidirectional)

    // Getters and setters
}
