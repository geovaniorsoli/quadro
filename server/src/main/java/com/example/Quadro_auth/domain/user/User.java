package com.example.Quadro_auth.domain.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.security.PrivateKey;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class User {
    @Id
    @GeneratedValue( strategy = GenerationType.UUID)
    private int id_user;
    private String name;
    private String lastName;
    private String email;
    private String password;

    public void setLastName(String s) {
    }
}
