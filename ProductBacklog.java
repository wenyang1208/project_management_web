
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;
import java.util.Scanner;
import java.util.HashMap;
import java.util.TreeMap;

public class ProductBacklog {
    Scanner scanner = new Scanner(System.in);
    private ArrayList<ArrayList<Task>> copyTasks;
    private ArrayList<ArrayList<Task>> tasks;
    private HashMap<Integer, Task.Priority> priority;
//    private HashMap<Integer, Task.Priority> priorityList;

    private Task task;

    public ProductBacklog() {
        this.tasks = new ArrayList<ArrayList<Task>>();
        this.copyTasks = new ArrayList<ArrayList<Task>>();
        this.priority = new HashMap<>();
//        this.priorityList = new HashMap<>();
    }
    public ArrayList<ArrayList<Task>> addTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        ArrayList<Task> copyTasks = new ArrayList<>();
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
        HashMap<Integer, Task.Priority> newPriority = new HashMap<>();
        for (int i = 0; i < Task.Priority.values().length; i++){
            this.priority.put((i+1),Task.Priority.values()[i]);
            System.out.println((i+1) + ") " + Task.Priority.values()[i].getStringPriority());
        }
        selection = Integer.parseInt(scanner.nextLine());
        newPriority.put(selection,this.priority.get(selection));


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


        tasks.add(new Task(newName, newCategory, newAssignee,newPriority, tags, newDescription, Task.Status.Not_Started, newNumericalStoryPoint, newCurrentStage));
        copyTasks.add(new Task(newName, newCategory, newAssignee,newPriority , tags, newDescription, Task.Status.Not_Started, newNumericalStoryPoint, newCurrentStage));
        System.out.println("\nAdding task...\n");
        this.tasks.add(tasks);
        this.copyTasks.add(copyTasks);
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> deleteTask(){
        
        System.out.println("Current Tasks in the Product Backlog:");
        for (int i = 0; i < tasks.size(); i++) {
            ArrayList<Task> taskList = tasks.get(i);
            for (int j = 0; j < taskList.size(); j++) {
                Task task = taskList.get(j);
                System.out.println((i + 1) + "." + (j + 1) + ") " + task.toString());
            }
        }

        System.out.print("Enter the index of the task you want to delete: ");
        int taskIndex = Integer.parseInt(scanner.nextLine()) - 1;

        if (taskIndex < 0 || taskIndex >= tasks.size()) {
            System.out.println("Invalid task index. No task deleted.");
            return tasks; 
        }

        ArrayList<Task> taskList = tasks.get(taskIndex);

        if (taskList.isEmpty()) {
            System.out.println("No tasks in the selected category to delete.");
            return tasks; 
        }

        System.out.print("Enter the index of the task in the selected category to delete: ");
        int subTaskIndex = Integer.parseInt(scanner.nextLine()) - 1;

        if (subTaskIndex < 0 || subTaskIndex >= taskList.size()) {
            System.out.println("Invalid subtask index. No task deleted.");
            return tasks; 
        }

        Task deletedTask = taskList.remove(subTaskIndex);
        System.out.println("Task deleted successfully:\n" + deletedTask.toString());
        
        // ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> editTask(){
        ArrayList<Task> tasks = new ArrayList<>();
        System.out.println(this.tasks);
        return this.tasks;
    }
    public ArrayList<ArrayList<Task>> sortTask(){
        int selection;
        System.out.println("Select the task categories to sort");
        System.out.println("1) Newest to Oldest");
        System.out.println("2) Oldest to Newest");
        System.out.println("3) Low to Urgent");
        System.out.println("4) Urgent to Low");
        selection = Integer.parseInt(scanner.nextLine());
        switch (selection) {
            case 1 -> {
                this.copyTasks =  newestToOldest();
            }
            case 2 -> {
                this.copyTasks =  oldestToNewest();
            }
            case 3 ->{
                this.copyTasks =  lowToUrgent();
            }
            case 4 ->{
                this.copyTasks =  urgentToLow();
            }
        }
        System.out.println(this.copyTasks);
        // after sorting, clone again the original tasks
        this.copyTasks.clear();
        this.copyTasks.addAll(this.tasks);
        return this.copyTasks;
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

    public ArrayList<ArrayList<Task>> newestToOldest(){
        Collections.reverse(this.copyTasks);
        return this.copyTasks;
    }

    public ArrayList<ArrayList<Task>> oldestToNewest(){
        return this.copyTasks;
    }

    public ArrayList<ArrayList<Task>> urgentToLow(){
        this.copyTasks = lowToUrgent();
        Collections.reverse(this.copyTasks);
        return this.copyTasks;
    }

    public ArrayList<ArrayList<Task>> lowToUrgent(){
        HashMap<Task,Integer> taskPriority = new HashMap<>();
        for(ArrayList<Task> tasks: this.tasks){
            for(Task task:tasks){
                for(Integer key:task.getPriority().keySet()){
                    taskPriority.put(task,key);
                }
            }
        }
        ArrayList<Integer> sortedVals = new ArrayList<Integer>(taskPriority.values());

        Collections.sort(sortedVals);

        this.copyTasks.clear();

        ArrayList<Task> aList = new ArrayList<>();
        for (Integer priorityValue : sortedVals) {
            for (Map.Entry<Task, Integer> entry : taskPriority.entrySet()) {
                aList = new ArrayList<>();
                aList.add(entry.getKey());
            }
            this.copyTasks.add(aList);
        }
        return this.copyTasks;
    }


}
