package models;

public class User {
  private int id;
  private String name;
  private String last_name;
  private String email;
  private String password;

  public User(String name, String last_name, String email, String password) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }

  // ID
  public int getId() {
    return this.id;
  }

  public void setID(int id) {
    this.id = id;
  }

  // Name
  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  // last_name
  public String getLastName() {
    return this.last_name;
  }

  public void setLastName(String lastName) {
    this.last_name = lastName;
  }

  // email
  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  // Password
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
