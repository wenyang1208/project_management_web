import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ProductBacklog {
    Scanner scanner = new Scanner(System.in);
    private ArrayList<Task> tasks;
    private Task task;

    public ProductBacklog() {
        this.tasks = new ArrayList<>();
    }
    public ArrayList<Task> addTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println("Name of Task");
        String newName = scanner.nextLine();

        System.out.println("Category of Task");
        for (int i = 0; i < Task.Category.values().length; i++){
            System.out.println((i+1) + ") " + Task.Category.values()[i].getStringCategory());
        }
        int selection = Integer.parseInt(scanner.nextLine());
        Task.Category newCategory = Task.Category.values()[selection-1];


        System.out.println("Assignee");
        String newAssignee = scanner.nextLine();


        tasks.add(new Task(newName, newCategory, newAssignee, Task.Priority.Low, Task.Tag.BackEnd, "lol", Task.Status.In_Progress, 1, Task.CurrentStage.Testing));
        System.out.println("\nAdding task...\n");
        this.tasks = tasks;
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<Task> deleteTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<Task> editTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<Task> sortTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<Task> filterTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<Task> save(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public void consoleMenu(){
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
    public void printStatus() {
        System.out.println("Welcome to FIT2099 supermarket.Supermarket \n");
        consoleMenu();
        System.out.println("\nThank you for visiting FIT2101 Product Backlog!");
    }

}
