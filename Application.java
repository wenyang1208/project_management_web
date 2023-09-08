import java.util.ArrayList;
import java.util.Scanner;

public class Application {
    public static void main(String[] args) {
        ProductBacklog productBacklog = new ProductBacklog();
        productBacklog.printStatus();

        // login
        // this part is not finished yet cause the create account feature is not done
        // we only have sample users
        
        ArrayList<User> users = new ArrayList<>();
        // sample users
        users.add(new User("Amy", "amy@email.com", "12345"));
        users.add(new User("Bob", "bob@email.com", "44e44"));

        Scanner myObj = new Scanner(System.in);
        
        System.out.println("Enter username:");
        String enteredUsername = myObj.nextLine();

        System.out.println("Enter email");
        String enteredUserEmail = myObj.nextLine();

        System.out.println("Enter password:");
        String enteredPassword = myObj.nextLine();

        // String enteredUsername = "Amy";
        // String enteredUserEmail = "amy@email.com";
        // String enteredPassword = "12345";

        boolean isLoggedIn = login(users, enteredUsername, enteredUserEmail, enteredPassword);

        if (isLoggedIn) {
            System.out.println("Login successful.");
        }else{
            System.out.println("Login failed.");
        }

        myObj.close();

    }

    public static boolean login(ArrayList<User> users, String enteredUsername, String enteredUserEmail, String enteredPassword) {
        for (User user : users) {
            if (user.getUsername().equals(enteredUsername) &&
                user.getUserEmail().equals(enteredUserEmail) &&
                user.getPassword().equals(enteredPassword)) {
                return true;
            }
        }
        return false;
    }
    
}
