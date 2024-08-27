package com.quadroapi.services;

import com.quadroapi.models.User;

public class UsersService {
  public User[] listAllUsers() {
    User u1 = new User("Geovani", "Gongora", "geovani.gogora@example.com", "password123");
    User u2 = new User("ANa", "foguete", "ana.fogueteexample.com", "password456");
    User u3 = new User("Athur", "Araujo", "a.a@example.com", "password789");

    User[] users = { u1, u2, u3 };
    return users;
  }
}
