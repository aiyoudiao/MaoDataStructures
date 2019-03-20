public class Main {

    public static void main(String[] args) {
        MyLinkedList<Integer> mkl = new MyLinkedList<Integer>();

        for (int i = 1; i <= 5 ; i++) {
            mkl.addFirst(i);
            System.out.println(mkl);
        }
        mkl.insert(2, 88888);
        System.out.println(mkl);
    }
}
