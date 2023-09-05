
public class Task {
    private String name;
    private Category category;
    public enum Category{
        Story,
        Bug
    }
    private String assignee;
    private Priority priority;
    public enum Priority{
        Low,
        Medium,
        Important,
        Urgent
    }
    private Tag tag;
    public enum Tag{
        FrontEnd,
        BackEnd,
        API,
        Database,
        Framework,
        Testing,
        UI,
        UX
    }
    private String description;
    private Status status;
    public enum Status{
        Not_Started,
        In_Progress,
        Completed
    }
    private int numericalStoryPoint;
    private CurrentStage currentStage;
    public enum CurrentStage{
        Planning,
        Development,
        Testing,
        Integration
    }

    public Task(String name,
                Category category,
                String assignee,
                Priority priority,
                Tag tag,
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
}
