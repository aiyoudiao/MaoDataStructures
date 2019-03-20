import java.util.ArrayList;
import java.util.Collections;

public class Main {

    private static double testSet (IMyMap<String, Integer> map, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile(fileName,words)) {
//            // 进行一下排序的操作，制造最坏的情况，二分搜索树会退化成一个链表。
//            Collections.sort(words);

            System.out.println("Total Words:" + words.size());
            for (String word : words) {
                if (map.contains(word)) {
                    map.set(word, map.get(word) + 1);
                } else {
                    map.add(word, 1);
                }
            }

            // 特殊处理一下 默认测试 傲慢与偏见 & 狄更斯的双城记
            // 其它的问题 就直接输出 单词数
            if (map.get("pride") != null && map.get("prejudice") != null) {
                System.out.println("No Repeat Total Words:" + map.getSize());
                System.out.println("Frequency of Pride(Ppride 的 词频次数):" + map.get("pride"));
                System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + map.get("prejudice"));
            } else if (map.get("tale") != null && map.get("two") != null) {
                System.out.println("Total different Words:" + map.getSize());
                System.out.println("Frequency of tale(tale 的 词频次数):" + map.get("tale"));
                System.out.println("Frequency of two(two 的 词频次数):" + map.get("two"));
            } else {
                System.out.println("Total different Words:" + map.getSize());
            }

            // 进行删除操作
            for (String word: words) {
                map.remove(word);
            }

            // 删除所有的单词后，查看AVL树中单词的个数。
            System.out.println("Total Words:" + map.getSize());

        } else {
            throw new Error("file read fail.");
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    public static void main(String[] args) {

        // 傲慢与偏见
        String book1 = "./file/pride-and-prejudice.txt";
        System.out.println("Pride and Prejudice.");

        MyBSTMap<String, Integer> myBSTMap = new MyBSTMap<String, Integer>();
        AVLTree<String, Integer> avlTree = new AVLTree<String, Integer>();

        double myBSTMapTime = testSet(myBSTMap, book1);
        double avlTreeTime = testSet(avlTree, book1);

        /**
         * MyBSTMap，time：0.260194112s.
         * AVLTree，time：0.208899495s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTMapTime + "s.");
        System.out.println("AVLTree，time：" + avlTreeTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";

        myBSTMap = new MyBSTMap<String, Integer>();
        avlTree = new AVLTree<String, Integer>();

        myBSTMapTime = testSet(myBSTMap, book2);
        avlTreeTime = testSet(avlTree, book2);

        /**
         * MyBSTMap，time：0.32490768s.
         * AVLTree，time：0.28482232s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTMapTime + "s.");
        System.out.println("AVLTree，time：" + avlTreeTime + "s.");
    }
}
