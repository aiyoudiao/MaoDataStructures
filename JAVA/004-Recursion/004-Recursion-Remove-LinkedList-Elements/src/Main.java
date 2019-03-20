public class Main {

    public static void main(String[] args) {

	    int[] arr = {1, 10, 7, 5, 1, 9, 1, 5, 1, 5, 6, 7};

//        for (int i = 0; i < 10 ; i++) {
//            arr[i] = i;
//            arr[10 + i] = 5;
//        }

        ListNode  node1 = new ListNode(arr);
        System.out.println(node1);

        Solution s1 = new Solution();
        s1.removeElements(node1, 5);
        System.out.println(node1);

        ListNode  node2 = new ListNode(arr);
        System.out.println(node2);

        DummyHeadSolution s2 = new DummyHeadSolution();
        s2.removeElements(node2, 5);
        System.out.println(node2);

        ListNode  node3 = new ListNode(arr);
        System.out.println(node3);

        RecursionSolution s3 = new RecursionSolution();
        s3.removeElements(node3, 1);
        System.out.println(node3);
    }
}
