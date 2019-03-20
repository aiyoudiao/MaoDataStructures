// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }

    // 构造函数，传入一个数组，转换成一个链表。
    public ListNode (int [] arr) {

        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("arr can not be empty.");
        }

        this.val = arr[0];
        ListNode cur = this;
        for (int i = 1; i < arr.length - 1; i++) {
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
    }

    @Override
    public String toString () {

        StringBuilder sb = new StringBuilder();
        sb.append("LinkedList:");
        sb.append("[ ");
        for (ListNode cur = this; cur.next != null; cur = cur.next) {
            sb.append(cur.val);
            sb.append("->");
        }
        sb.append("NULL");
        sb.append(" ]");

        return sb.toString();
    }
}