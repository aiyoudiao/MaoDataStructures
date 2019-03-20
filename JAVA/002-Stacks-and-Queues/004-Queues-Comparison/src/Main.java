import java.util.Random;

public class Main {

    private static double testQueue (IMyQueue<Integer> q, int openCount) {
        long startTime = System.nanoTime();

        Random random = new Random();
        for (int i = 1; i <= openCount ; i++) {
            q.enqueue(random.nextInt(Integer.MAX_VALUE));
        }
//
        while (!q.isEmpty()) {
            q.dequeue();
        }
        // ..

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }
    public static void main(String[] args) {

        IMyQueue<Integer> mq = new MyQueue<Integer>();
        IMyQueue<Integer> mlq = new MyLoopQueue<Integer>();

        double mqTime = testQueue(mq, 100000);
        double mlqTime = testQueue(mlq, 100000);

        System.out.println("MyQueue，time：" + mqTime + "s.");
        System.out.println("MyLoopQueue，time：" + mlqTime + "s.");

    }
}
