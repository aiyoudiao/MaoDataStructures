public class RecursionSolution {

    public ListNode removeElements(ListNode head, int val) {
        if (head == null) {
            return null;
        }

//        写法一
//        ListNode node = removeElements(head.next, val);
//        if (head.val == val) {
//            return node;
//        } else {
//            head.next = node;
//            return head;
//        }

//        写法二
//        if (head.val == val) {
//            head = removeElements(head.next, val);
//        } else {
//            head.next = removeElements(head.next, val);
//        }
//        return head;

//        写法三
        head.next = removeElements(head.next, val);
        if (head.val == val) {
            return head.next;
        } else {
            return head;
        }
    }
}
