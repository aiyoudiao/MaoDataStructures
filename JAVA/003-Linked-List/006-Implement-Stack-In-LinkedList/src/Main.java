public class Main {

    public static void main(String[] args) {
        MyLinkedListStack<Integer> mkls = new MyLinkedListStack<Integer>();

        for (int i = 1; i <= 5 ; i++) {
            mkls.push(i);
            System.out.println(mkls);
        }

        System.out.println(mkls.peek());

        for (int i = 0; i < 5 ; i++) {
            System.out.println(mkls);
            mkls.pop();
        }
    }
}
