import java.util.ArrayList;
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        MyBinarySearchTree<Integer> mbst = new MyBinarySearchTree<Integer>();
        // 动态数组
        ArrayList<Integer> arrayList = new ArrayList<Integer>();

        Random random = new Random();
        int n = 10;

        for (int i = 0; i < n; i++) {
            int value = random.nextInt(Integer.MAX_VALUE);
            mbst.add(value);
            arrayList.add(value);
        }

        // 输出二分搜索树
        System.out.println(mbst.getSize());
        // 输出数组中内容
        System.out.println(arrayList);

        for (int i = 0; i < arrayList.size(); i++) {
            mbst.remove(arrayList.get(i));
        }

        // 输出二分搜索树
        System.out.println(mbst.getSize());

        System.out.println("remove test completed.");
    }
}
