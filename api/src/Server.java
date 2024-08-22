//Libs
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;

//Routers
import routers.PingRouter;

public class Server {
  private int port = 8080;
  private String host = "localhost";
  private HttpServer server;
  

  public void initialize(String[] args) throws IOException {
    this.configServer();
    this.configRoutes();

    this.server.start();

    System.out.println("Servidor iniciado em http://" + host + ":" + port + "/");
  }

  private void configRoutes() {
    //Ping
    PingRouter
  }
  
  private void configServer() throws IOException {
    InetSocketAddress address = new InetSocketAddress(this.host, this.port);
    HttpServer server = HttpServer.create(address, 0);
    this.server = server;
  }
}