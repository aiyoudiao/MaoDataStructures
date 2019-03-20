import java.util.Random;
public class Main {

    private static double testStack (IStack<Integer> s, int openCount) {
        long startTime = System.nanoTime();

        Random random = new Random();
        for (int i = 1; i <= openCount ; i++) {
            s.push(random.nextInt(Integer.MAX_VALUE));
        }
//
        while (!s.isEmpty()) {
            s.pop();
        }
        // ..

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    public static void main(String[] args) {
        MyLinkedListStack<Integer> mkls = new MyLinkedListStack<Integer>();
        MyStack<Integer> ms = new MyStack<Integer>();

        double msTime = testStack(ms, 100000);
        double mklsTime = testStack(mkls, 100000);

        System.out.println("MyStack，time：" + msTime + "s.");
        System.out.println("MyLinkedListStack，time：" + mklsTime + "s.");

    }
}
