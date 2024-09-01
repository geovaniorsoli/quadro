package com.quadroapi.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DatabaseConnector {

  private static final String URL = "jdbc:mysql://localhost/quadro";
  private static final String USER = "root";
  private static final String PASSWORD = "senhamysql";

  public Connection getConnection() throws SQLException {
    try {
      Class.forName("com.mysql.cj.jdbc.Driver");
      Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
      System.out.println("Conexão bem sucedida com o banco de dados");

      ResultSet tables = conn.createStatement().executeQuery("SHOW TABLES;");

      while (tables.next()) {
        String tableName = tables.getString(1);
        System.out.println(tableName);
      }

      return conn;
    } catch (SQLException e) {
      System.out.println("Erro conexão");
      throw e;
    } catch (ClassNotFoundException e) {
      throw new SQLException("Driver JDBC não encontrado.", e);
    }
  }
}
