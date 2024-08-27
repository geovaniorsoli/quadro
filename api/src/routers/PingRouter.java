package routers;

import com.sun.net.httpserver.HttpServer;
import controllers.PingController;

public class PingRouter {
  public static void initialize(HttpServer server) {
    server.createContext("/ping", exchange -> {
      PingController pingC = new PingController();
      String method = exchange.getRequestMethod();

      if ("GET".equals(method)) {
        pingC.index(exchange);
      } else {
        String res = "Method not allowed!";
        exchange.getRequestHeaders().set("Content-Type", "text/plain");
        exchange.sendResponseHeaders(405, res.getBytes().length);
        exchange.getResponseBody().write(res.getBytes());
        exchange.close();
      }
    });
  }
}
