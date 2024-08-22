package routers;
import com.sun.net.httpserver.HttpServer;

public class PingRouter{
 
  public static void initialize( HttpServer server ){
    server.createContext("/ping", exchange -> {


    });
  }
}
