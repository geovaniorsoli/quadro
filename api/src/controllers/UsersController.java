package controllers;

import com.sun.net.httpserver.HttpExchange;

import models.User;
import services.UsersService;

public class UsersController {
  UsersService usersService;

  public UsersController(UsersService usersService) {
    this.usersService = usersService;
  }

  public void index(HttpExchange exchange) {
    try {
      User[] users = this.usersService.listAllUsers();

      exchange.getResponseHeaders().set("Content-Type", "application/json");
      exchange.sendResponseHeaders(200, users.length);
      exchange.getResponseBody().write(users.toString()[]);

    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      exchange.close();
    }
  }
}
