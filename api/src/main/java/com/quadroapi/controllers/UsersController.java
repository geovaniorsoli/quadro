package com.quadroapi.controllers;

import com.sun.net.httpserver.HttpExchange;
import com.quadroapi.org.json;

import com.quadroapi.models.User;
import com.quadroapi.services.UsersService;

public class UsersController {
  UsersService usersService;

  public UsersController(UsersService usersService) {
    this.usersService = usersService;
  }

  public void index(HttpExchange exchange) {
    try {
      User[] users = this.usersService.listAllUsers();

      JSONObject usersJson = new JSONObject();
      for (int i = 0; i <= users.length; i++) {
        User user = users[i];

        usersJson.put("id", user.getId());
        usersJson.put("name", user.getName());
        usersJson.put("lastName", user.getLastName());
        usersJson.put("email", user.getEmail());
      }
      String responseUsers = usersJson.toString();

      exchange.getResponseHeaders().set("Content-Type", "application/json");
      exchange.sendResponseHeaders(200, users.length);
      exchange.getResponseBody().write(responseUsers.getBytes());

    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      exchange.close();
    }
  }
}
