import java.util.ArrayList;
import java.util.Scanner;

public class ProductBacklog {
    Scanner scanner = new Scanner(System.in);
    private ArrayList<ArrayList<Task>> tasks;
    private Task task;

    public ProductBacklog() {
        this.tasks = new ArrayList<ArrayList<Task>>();
    }
    public ArrayList<ArrayList<Task>> addTask(){
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


        System.out.println("Priority of Task");
        for (int i = 0; i < Task.Priority.values().length; i++){
            System.out.println((i+1) + ") " + Task.Priority.values()[i].getStringPriority());
        }
        selection = Integer.parseInt(scanner.nextLine());
        Task.Priority newPriority = Task.Priority.values()[selection-1];


        System.out.println("Tag of Task");
        ArrayList<Task.Tag> tags = new ArrayList<>();
        for (int i = 0; i < Task.Tag.values().length; i++){
            System.out.println((i+1) + ") " + Task.Tag.values()[i].getStringTag());
        }
        System.out.println((Task.Tag.values().length + 1)+ ") Stop Adding");
        selection = Integer.parseInt(scanner.nextLine());
        while(selection != Task.Tag.values().length + 1){
            tags.add(Task.Tag.values()[selection-1]);
            selection = Integer.parseInt(scanner.nextLine());
        }


        System.out.println("Description of Task");
        String newDescription = scanner.nextLine();


        System.out.println("Numerical Story Point of Task");
        int num = Integer.parseInt(scanner.nextLine());
        while(num < 1 && num > 10 ){
            num = Integer.parseInt(scanner.nextLine());
        }
        int newNumericalStoryPoint = num;


        System.out.println("Current Stage of Task");
        for (int i = 0; i < Task.CurrentStage.values().length; i++){
            System.out.println((i+1) + ") " + Task.CurrentStage.values()[i].getStringCurrentStage());
        }
        selection = Integer.parseInt(scanner.nextLine());
        Task.CurrentStage newCurrentStage = Task.CurrentStage.values()[selection-1];


        tasks.add(new Task(newName, newCategory, newAssignee, newPriority, tags, newDescription, Task.Status.Not_Started, newNumericalStoryPoint, newCurrentStage));
        System.out.println("\nAdding task...\n");
        this.tasks.add(tasks);
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> deleteTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> editTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> sortTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> filterTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> save(){
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
