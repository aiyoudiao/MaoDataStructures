/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {

    public static ListNode removeElements(ListNode head, int val) {

//        第一种方式 做对头节点做特殊处理
//        while (head != null && head.val == val) {
//            ListNode delNode = head;
//            head = head.next;
//            delNode.next = null;
//        }
//
//        if (head == null) {
//            return head;
//        }
//
//        ListNode prev = head;
//        while (prev.next != null) {
//            if (prev.next.val == val) {
//                ListNode delNode = prev.next;
//                prev.next = delNode.next;
//                delNode.next = null;
//            } else {
//                prev = prev.next;
//            }
//        }
//
//        return head;

//      第二种方式：添加虚拟头节点
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;
        ListNode node = dummyHead;
        while (node.next != null) {
            if (node.next.val == val) {
                node.next = node.next.next;
            } else {
                node = node.next;
            }
        }

        return dummyHead.next;
    }
}
