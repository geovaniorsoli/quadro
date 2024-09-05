package com.quadroapi.services;

import com.quadroapi.models.User;

import org.json.JSONObject;

import javax.management.RuntimeErrorException;

import org.json.JSONArray;

public class UsersService {
  public User[] listAllUsers() {
    User u1 = new User("Geovani", "Gongora", "geovani.gogora@example.com", "password123");
    User u2 = new User("ANa", "foguete", "ana.fogueteexample.com", "password456");
    User u3 = new User("Athur", "Araujo", "a.a@example.com", "password789");

    User[] users = { u1, u2, u3 };
    return users;
  }

  public JSONArray userArrayToUserJson(User[] users) throws RuntimeException {
    try {
      // Criação de Array para json
      JSONArray usersJson = new JSONArray();
      // Tranformando user object em json
      for (int i = 0; i < users.length; i++) {
        User user = users[i];
        JSONObject userJson = new JSONObject();

        userJson.put("id", user.getId());
        userJson.put("name", user.getName());
        userJson.put("lastName", user.getLastName());
        userJson.put("email", user.getEmail());

        // Adicionando user jsonObject em user JsonArray
        usersJson.put(userJson);
      }

      return usersJson;
    } catch (Exception e) {
      throw new RuntimeException("Erro ao Transformar array de usuários em Json");
    }
  }
}
