public class User {
    private String username;
    private String userEmail;
    private String password;

    public User(String username, String userEmail, String password){
        this.username = username;
        this.userEmail = userEmail;
        this.password = password;
    }

    // Getters
    public String getUsername() {
        return username;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getPassword() {
        return password;
    }

    // Setters
    public void setUsername(String username) {
        this.username = username;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
