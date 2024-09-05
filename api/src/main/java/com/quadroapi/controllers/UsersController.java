package com.quadroapi.controllers;

import com.sun.net.httpserver.HttpExchange;

import com.quadroapi.models.User;
import com.quadroapi.services.UsersService;

import org.json.JSONArray;

public class UsersController {
  UsersService usersService;

  public UsersController(UsersService usersService) {
    this.usersService = usersService;
  }

  public void index(HttpExchange exchange) {
    try {
      User[] users = this.usersService.listAllUsers();

      JSONArray usersJson = this.usersService.userArrayToUserJson(users);

      // Transforemando json para string
      String responseUsers = usersJson.toString();
      exchange.getResponseHeaders().set("Content-Type", "application/json");
      exchange.sendResponseHeaders(200, responseUsers.getBytes().length);
      exchange.getResponseBody().write(responseUsers.getBytes());

    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      exchange.close();
    }
  }
}
