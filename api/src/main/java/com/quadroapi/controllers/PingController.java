package com.quadroapi.controllers;

import java.io.IOException;
import com.sun.net.httpserver.HttpExchange;

public class PingController {
  public void index(HttpExchange exchange) {
    try {
      String res = "Pong";
      exchange.getResponseHeaders().set("Content-Type", "application/json");
      exchange.sendResponseHeaders(200, res.getBytes().length);
      exchange.getResponseBody().write(res.getBytes());

    } catch (Exception e) {
      e.printStackTrace();

    } finally {
      exchange.close();
    }
  }
}
