public class Student {

    private String name;
    private int score;

    public Student(String studentName, int studentScore){
        name = studentName;
        score = studentScore;
    }

    @Override
    // @Override 方法名 日期-开发人员
    public String toString(){
        return String.format("Student(name: %s, score: %d)", name, score);
    }

    // 增加入口方法，就可以直接执行代码了
    public static void main(String[] args) {

        MyArray<Student> arr = new MyArray<Student>();
        arr.addLast(new Student("Alice", 100));
        arr.addLast(new Student("Bob", 66));
        arr.addLast(new Student("Charlie", 88));
        System.out.println(arr);
    }
}
