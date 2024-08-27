//Libs
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;

//Routers
import routers.PingRouter;
import routers.UsersRouter;

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
    // Ping
    PingRouter.initialize(this.server);
    //Users
    UsersRouter.initialize(this.server);
  }

  private void configServer() throws IOException {
    InetSocketAddress address = new InetSocketAddress(this.host, this.port);
    HttpServer server = HttpServer.create(address, 0);
    this.server = server;
  }
}