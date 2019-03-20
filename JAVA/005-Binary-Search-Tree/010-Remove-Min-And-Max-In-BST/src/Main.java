import java.util.ArrayList;
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        MyBinarySearchTree<Integer> mbst = new MyBinarySearchTree<Integer>();

        Random random = new Random();
        int n = 100;

        for (int i = 0; i < n; i++) {
            mbst.add(random.nextInt(Integer.MAX_VALUE));
        }

        // 动态数组
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        while (!mbst.isEmpty()) {
            arrayList.add(mbst.removeMin());
//            arrayList.add(mbst.removeMax());
        }

        // 数组中就是从小到大排序的
        System.out.println(arrayList);

        // 验证一下
        for (int i = 1; i < arrayList.size() ; i++) {
            // 如果前面的数大于后面的数就报异常
            if (arrayList.get(i - 1) > arrayList.get(i)) {
                // 如果前面的数小于后面的数就报异常
//            if (arrayList.get(i - 1) < arrayList.get(i)) {
                throw new IllegalArgumentException("error.");
            }
        }
        System.out.println("removeMin test completed.");
//        System.out.println("removeMax test completed.");
    }
}
