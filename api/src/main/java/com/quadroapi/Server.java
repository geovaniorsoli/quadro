package com.quadroapi;

// Imports
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;

// Routers
import com.quadroapi.routers.PingRouter;
import com.quadroapi.routers.UsersRouter;

public class Server {
  private int port = 8081;
  private String host = "localhost";
  private HttpServer server;

  public static void main(String[] args) throws IOException {
    Server server = new Server();
    server.initialize();
  }

  public void initialize() throws IOException {
    this.configServer();
    this.configRoutes();
    this.server.start();
    System.out.println("Servidor iniciado em http://" + host + ":" + port + "/");
  }

  private void configRoutes() {
    // Configuração das rotas
    PingRouter.initialize(this.server);
    UsersRouter.initialize(this.server);
  }

  private void configServer() throws IOException {
    InetSocketAddress address = new InetSocketAddress(this.host, this.port);
    this.server = HttpServer.create(address, 0);
  }
}
