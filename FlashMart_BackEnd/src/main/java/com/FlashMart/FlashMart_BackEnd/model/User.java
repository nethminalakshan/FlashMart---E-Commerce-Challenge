package com.FlashMart.FlashMart_BackEnd.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String firstName;
    private String lastName;
    private String email;
    private String contactNo;
    private String username;
    private String password;
    private String reEnterPassword;

    // Address fields
    private String street;
    private String town;
    private String no;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<CartList> cartLists;

    // Getters and setters
}
