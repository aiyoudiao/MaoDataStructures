public class RecursionSolution {

    public ListNode removeElements(ListNode head, int val, int depth) {
//        if (head == null) return null;
//        head.next = removeElements(head.next, val, depth);
//        return head.val == val ? head.next : head;

        String depathString = generateDepathString(depth);
        System.out.print(depathString);
        System.out.println("Call: remove " + val + " in " + head);

        if (head == null) {

            System.out.print(depathString);
            System.out.println("Return ：" + head);

            return null;
        }

        ListNode result = removeElements(head.next, val, depth + 1);
        System.out.print(depathString);
        System.out.println("After： remove " + val + " ：" + result);

        ListNode ret;
        if (head.val == val) {
            ret = result;
        } else {
            head.next = result;
            ret = head;
        }

        System.out.print(depathString);
        System.out.println("Return ：" + ret);

        return ret;

    }

    private String generateDepathString (int depath) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < depath; i++) {
            sb.append("-- "); // -- 表示深度，--相同则代表在同一递归深度
        }
        return sb.toString();
    }

    public static void main(String[] args) {

        int[] arr = {6, 7, 8};

//        for (int i = 0; i < 10 ; i++) {
//            arr[i] = i;
//            arr[10 + i] = 5;
//        }

        ListNode  node = new ListNode(arr);
        System.out.println(node);

        RecursionSolution rs = new RecursionSolution();
        rs.removeElements(node, 7, 0);
        System.out.println(node);
    }
}
