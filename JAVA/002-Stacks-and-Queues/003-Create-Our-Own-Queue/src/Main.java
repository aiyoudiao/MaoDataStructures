public class Main {

    public static void main(String[] args) {

//        MyQueue<Integer> mq = new MyQueue<Integer>(10);
        MyLoopQueue<Integer> mq = new MyLoopQueue<Integer>(10);

        for (int i = 1; i <= 11 ; i++) {
            mq.enqueue(i);
            System.out.println(mq);
        }

        System.out.println(mq.getFront());


        while (!mq.isEmpty()) {
            System.out.println(mq);
            mq.dequeue();
        }
    }
}
