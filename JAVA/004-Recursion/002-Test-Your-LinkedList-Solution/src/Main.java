public class Main {

    public static void main(String[] args) {

	    int[] arr = new int[20];

        for (int i = 0; i < 10 ; i++) {
            arr[i] = i;
            arr[10 + i] = 5;
        }

        ListNode  node1 = new ListNode(arr);
        System.out.println(node1);

        Solution s1 = new Solution();
        s1.removeElements(node1, 5);
        System.out.println(node1);

        ListNode  node2 = new ListNode(arr);
        System.out.println(node2);

        Solution2 s2 = new Solution2();
        s2.removeElements(node2, 5);
        System.out.println(node2);
    }
}
