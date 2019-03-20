public class Main {

    public static void main(String[] args) {

        MyStack ms = new MyStack(10);
        for (int i = 1; i <= 10 ; i++) {
            ms.push(i);
            System.out.println(ms);
        }

        System.out.println(ms.peek());

//        System.out.println(ms.isEmpty());
//        System.out.println(ms.getSize());
//        System.out.println(ms.getCapacity());

        while (!ms.isEmpty()) {
            ms.pop();
            System.out.println(ms);
        }
    }
}
