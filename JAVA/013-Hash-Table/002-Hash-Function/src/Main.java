import java.util.HashMap;
import java.util.HashSet;

public class Main {

    public static void main(String[] args) {

        int a = 20;

        int b = -20;
        /**
         * 20
         * -20
         * **/
        System.out.println(((Integer)a).hashCode());
        System.out.println(((Integer)b).hashCode());

        double c = 3.1415926;

        /**
         * 219937201
         * **/
        System.out.println(((Double)c).hashCode());

        String d = "ilovejwl";

        /**
         * -1332433020
         * **/
        System.out.println(d.hashCode());

        Student jwl = new Student(10,4, "wenli", "jia");

        /**
         * -791031681
         * **/
        System.out.println(jwl.hashCode());

        HashSet<Student> set = new HashSet<>();
        set.add(jwl);

        HashMap<Student, Integer> scores = new HashMap<>();
        scores.put(jwl, 100);

        Student jwl2 = new Student(10,4, "wenli", "jia");
        /**
         * -791031681
         * **/
        System.out.println(jwl2.hashCode());
    }
}
