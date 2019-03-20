import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

/**
 * Created by LENOVO on 2018/11/20.
 */
public class Main2 {

    // 测试普通二分搜索树
    public static double testBST (MyBSTMap<Integer, Object> bst, ArrayList<Integer> list) {
        long startTime = System.nanoTime();

        for (Integer x: list)
            bst.add(x, null);

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 测试AVL树
    public static double testAVLT (MyAVLTree<Integer, Object> avl, ArrayList<Integer> list) {
        long startTime = System.nanoTime();

        for (Integer x: list)
            avl.add(x, null);

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 测试红黑树
    public static double testRBT (MyRedBlackTree<Integer, Object> rb, ArrayList<Integer> list) {
        long startTime = System.nanoTime();

        for (Integer x: list)
            rb.add(x, null);

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 测试多次，查看平均时间
    public static void testInfo (int openCount, ArrayList<Integer> list) {
        double bstTreeTimeTotal = 0, avlTreeTimeTotal = 0, rbTreeTimeTotal = 0;

        for (int i = 0; i < openCount; i++) {

            double bstTreeTime = testBST(new MyBSTMap<>(), list);
            bstTreeTimeTotal += bstTreeTime;

            double rbTreeTime = testRBT(new MyRedBlackTree<>(), list);
            rbTreeTimeTotal += rbTreeTime;

            double avlTreeTime = testAVLT(new MyAVLTree<>(), list);
            avlTreeTimeTotal += avlTreeTime;
        }

        System.out.println("MyBSTMap，time：" + (bstTreeTimeTotal / openCount) + "s.");
        System.out.println("MyAVLTree，time：" + (avlTreeTimeTotal / openCount) + "s.");
        System.out.println("MyRedBlackTree，time：" + (rbTreeTimeTotal / openCount) + "s.");

    }


    public static void testInfo2 (int openCount, ArrayList<Integer> list) {
        double avlTreeTimeTotal = 0, rbTreeTimeTotal = 0;

        for (int i = 0; i < openCount; i++) {

            double avlTreeTime = testAVLT(new MyAVLTree<>(), list);
            avlTreeTimeTotal += avlTreeTime;

            double rbTreeTime = testRBT(new MyRedBlackTree<>(), list);
            rbTreeTimeTotal += rbTreeTime;
        }

        System.out.println("MyAVLTree，time：" + (avlTreeTimeTotal / openCount) + "s.");
        System.out.println("MyRedBlackTree，time：" + (rbTreeTimeTotal / openCount) + "s.");

    }


    public static void main(String[] args) {
        int n = 1000000;

        Random random = new Random();
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < n; i++)
            list.add(random.nextInt(Integer.MAX_VALUE));

        //  MyBSTMap，time：1.6909336600999993s.
        //  MyAVLTree，time：1.6370302330200002s.
        //  MyRedBlackTree，time：1.6952068629799997s.
        testInfo(10, list);

        // 按照顺序排序
        Collections.sort(list);

        /*
        * MyAVLTree，time：0.8986701219000001s.
        * MyRedBlackTree，time：0.6534602183s.
        * */
        testInfo2(10, list);

    }
}
