import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ProductBacklog {
    Scanner scanner = new Scanner(System.in);
    private ArrayList<Task> tasks;

    public ProductBacklog() {
        this.tasks = new ArrayList<>();
    }
    public ArrayList<Task> addTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        tasks.add(new Task("Bob", Task.Category.Story, "Bob", Task.Priority.Low, Task.Tag.BackEnd, "lol", Task.Status.In_Progress, 1, Task.CurrentStage.Testing));
        System.out.println("Adding task...");
        System.out.println(tasks);
        return tasks;
    }
    public ArrayList<Task> deleteTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        return tasks;
    }
    public ArrayList<Task> editTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        return tasks;
    }
    public ArrayList<Task> sortTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        return tasks;
    }
    public ArrayList<Task> filterTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        return tasks;
    }
    public ArrayList<Task> save(){
        ArrayList<Task> tasks = new ArrayList<>();
        return tasks;
    }
    public void consoleManu(){
        int selection;
        do {
            System.out.println("What would you like to do?");
            System.out.println("1) Add task");
            System.out.println("2) Delete task");
            System.out.println("3) Edit task");
            System.out.println("4) Sort task");
            System.out.println("5) Filter task");
            System.out.println("6) Save?");
            System.out.println("7) Exit");
            selection = Integer.parseInt(scanner.nextLine());
            switch (selection) {
                case 1 -> addTask();
                case 2 -> deleteTask();
                case 3 -> editTask();
                case 4 -> sortTask();
                case 5 -> filterTask();
                case 6 -> save();
            }
        } while (selection != 7);
    }

}
