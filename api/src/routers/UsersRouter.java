package routers;

import com.sun.net.httpserver.HttpServer;

import controllers.UsersController;
import services.UsersService;

public class UsersRouter {
  public static void initialize(HttpServer server) {
    server.createContext("/users", (exchange) -> {
      String method = exchange.getRequestMethod();

      UsersService usersService = new UsersService();
      UsersController usersController = new UsersController(usersService);

      if (method.equals("GET")) {
        usersController.index(exchange);
      }
    });
  }
}
