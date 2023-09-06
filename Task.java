import java.util.ArrayList;

public class Task {
    private String name;
    private Category category;
    public enum Category{
        Story("Story"),
        Bug("Bug");

        private final String stringCategory;
        private Category(String stringCategory) {
            this.stringCategory = stringCategory;
        }
        public String getStringCategory(){
            return stringCategory;
        }
    }
    private String assignee;
    private Priority priority;
    public enum Priority{
        Low("Low"),
        Medium("Medium"),
        Important("Important"),
        Urgent("Urgent");
        private final String stringPriority;
        private Priority(String stringPriority) {
            this.stringPriority = stringPriority;
        }
        public String getStringPriority(){
            return stringPriority;
        }
    }
    private ArrayList<Tag> tag;
    public enum Tag{ // need to change as can have multiple tags
        FrontEnd("Front End"),
        BackEnd("Back End"),
        API("API"),
        Database("Database"),
        Framework("Framework"),
        Testing("Testing"),
        UI("UI"),
        UX("UX");
        private final String stringTag;
        private Tag(String stringTag) {
            this.stringTag = stringTag;
        }
        public String getStringTag(){
            return stringTag;
        }
    }
    private String description;
    private Status status;
    public enum Status{
        Not_Started("Not Started"),
        In_Progress("In Progress"),
        Completed("Completed");
        private final String stringStatus;
        private Status(String stringStatus) {
            this.stringStatus = stringStatus;
        }
        public String getStringStatus(){
            return stringStatus;
        }
    }
    private int numericalStoryPoint;
    private CurrentStage currentStage;
    public enum CurrentStage{
        Planning("Planning"),
        Development("Development"),
        Testing("Testing"),
        Integration("Integration");
        private final String stringCurrentStage;
        private CurrentStage(String stringCurrentStage) {
            this.stringCurrentStage = stringCurrentStage;
        }
        public String getStringCurrentStage(){
            return stringCurrentStage;
        }
    }

    public Task(String name,
                Category category,
                String assignee,
                Priority priority,
                ArrayList<Tag> tag,
                String description,
                Status status,
                int numericalStoryPoint,
                CurrentStage currentStage) {
        this.name = name;
        this.category = category;
        this.assignee = assignee;
        this.priority = priority;
        this.tag = tag;
        this.description = description;
        this.status = status;
        this.numericalStoryPoint = numericalStoryPoint;
        this.currentStage = currentStage;
    }

    @Override
    public String toString() {
        return "\nTask name: " + name + "\n" +
                "Category: " + category + "\n" +
                "Assignee: " + assignee + "\n" +
                "Priority: " + priority + "\n" +
                "Tag: " + tag + "\n" +
                "Description: " + description + "\n" +
                "Status: " + status + "\n" +
                "Numerical Story Point: " + numericalStoryPoint + "\n" +
                "Current Stage: " + currentStage + "\n";
    }
}
