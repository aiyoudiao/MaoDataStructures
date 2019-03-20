import java.util.ArrayList;
import java.util.Collections;

public class Main {

    // 测试BST树
    private static double testBSTTree (MyBSTMap<String, Integer> bst, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<>();
        if (FileOperation.readFile(fileName,words)) {
//            // 进行一下排序的操作，制造最坏的情况，二分搜索树会退化成一个链表。
//            Collections.sort(words);
            System.out.println("Total Words:" + words.size());
            for (String word : words) {
                if (bst.contains(word)) {
                    bst.set(word, bst.get(word) + 1);
                } else {
                    bst.add(word, 1);
                }
            }
//
//            // 特殊处理一下 默认测试 傲慢与偏见 & 狄更斯的双城记
//            // 其它的问题 就直接输出 单词数
//            if (bst.get("pride") != null && bst.get("prejudice") != null) {
//                System.out.println("No Repeat Total Words:" + bst.getSize());
//                System.out.println("Frequency of Pride(Ppride 的 词频次数):" + bst.get("pride"));
//                System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + bst.get("prejudice"));
//            } else if (bst.get("tale") != null && bst.get("two") != null) {
//                System.out.println("Total different Words:" + bst.getSize());
//                System.out.println("Frequency of tale(tale 的 词频次数):" + bst.get("tale"));
//                System.out.println("Frequency of two(two 的 词频次数):" + bst.get("two"));
//            } else {
//                System.out.println("Total different Words:" + bst.getSize());
//            }

//            // 进行删除操作
//            for (String word: words) {
//                bst.remove(word);
//            }
//
//            // 删除所有的单词后，查看bst树中单词的个数。
//            System.out.println("Total Words:" + bst.getSize());

        } else {
            throw new Error("file read fail.");
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 测试AVL树
    private static double testAVLTree (MyAVLTree<String, Integer> avl, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<>();
        if (FileOperation.readFile(fileName,words)) {
//            // 进行一下排序的操作，制造最坏的情况，二分搜索树会退化成一个链表。
//            Collections.sort(words);

            System.out.println("Total Words:" + words.size());
            for (String word : words) {
                if (avl.contains(word)) {
                    avl.set(word, avl.get(word) + 1);
                } else {
                    avl.add(word, 1);
                }
            }

//            // 特殊处理一下 默认测试 傲慢与偏见 & 狄更斯的双城记
//            // 其它的问题 就直接输出 单词数
//            if (avl.get("pride") != null && avl.get("prejudice") != null) {
//                System.out.println("No Repeat Total Words:" + avl.getSize());
//                System.out.println("Frequency of Pride(Ppride 的 词频次数):" + avl.get("pride"));
//                System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + avl.get("prejudice"));
//            } else if (avl.get("tale") != null && avl.get("two") != null) {
//                System.out.println("Total different Words:" + avl.getSize());
//                System.out.println("Frequency of tale(tale 的 词频次数):" + avl.get("tale"));
//                System.out.println("Frequency of two(two 的 词频次数):" + avl.get("two"));
//            } else {
//                System.out.println("Total different Words:" + avl.getSize());
//            }

//            // 进行删除操作
//            for (String word: words) {
//                avl.remove(word);
//            }
//
//            // 删除所有的单词后，查看AVL树中单词的个数。
//            System.out.println("Total Words:" + avl.getSize());

        } else {
            throw new Error("file read fail.");
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 测试红黑树
    private static double testRedBlackTree (MyRedBlackTree<String, Integer> rb, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile(fileName,words)) {
//            // 进行一下排序的操作，制造最坏的情况，二分搜索树会退化成一个链表。
//            Collections.sort(words);

            System.out.println("Total Words:" + words.size());
            for (String word : words) {
                if (rb.contains(word)) {
                    rb.set(word, rb.get(word) + 1);
                } else {
                    rb.add(word, 1);
                }
            }

//            // 特殊处理一下 默认测试 傲慢与偏见 & 狄更斯的双城记
//            // 其它的问题 就直接输出 单词数
//            if (rb.get("pride") != null && rb.get("prejudice") != null) {
//                System.out.println("No Repeat Total Words:" + rb.getSize());
//                System.out.println("Frequency of Pride(Ppride 的 词频次数):" + rb.get("pride"));
//                System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + rb.get("prejudice"));
//            } else if (rb.get("tale") != null && rb.get("two") != null) {
//                System.out.println("Total different Words:" + rb.getSize());
//                System.out.println("Frequency of tale(tale 的 词频次数):" + rb.get("tale"));
//                System.out.println("Frequency of two(two 的 词频次数):" + rb.get("two"));
//            } else {
//                System.out.println("Total different Words:" + rb.getSize());
//            }

//            // 进行删除操作
//            for (String word: words) {
//                rb.remove(word);
//            }
//
//            // 删除所有的单词后，查看AVL树中单词的个数。
//            System.out.println("Total Words:" + rb.getSize());

        } else {
            throw new Error("file read fail.");
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }
 
    // 测试哈希表
    private static double testHashTable (MyHashTable<String, Integer> hs, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile(fileName,words)) {
//            // 进行一下排序的操作，制造最坏的情况，二分搜索树会退化成一个链表。
//            Collections.sort(words);

            System.out.println("Total Words:" + words.size());
            for (String word : words) {
                if (hs.contains(word)) {
                    hs.set(word, hs.get(word) + 1);
                } else {
                    hs.add(word, 1);
                }
            }

//            // 特殊处理一下 默认测试 傲慢与偏见 & 狄更斯的双城记
//            // 其它的问题 就直接输出 单词数
//            if (hs.get("pride") != null && hs.get("prejudice") != null) {
//                System.out.println("No Repeat Total Words:" + hs.getSize());
//                System.out.println("Frequency of Pride(Ppride 的 词频次数):" + hs.get("pride"));
//                System.out.println("Frequency of Prejudice(Prejudice 的 词频次数):" + hs.get("prejudice"));
//            } else if (hs.get("tale") != null && hs.get("two") != null) {
//                System.out.println("Total different Words:" + hs.getSize());
//                System.out.println("Frequency of tale(tale 的 词频次数):" + hs.get("tale"));
//                System.out.println("Frequency of two(two 的 词频次数):" + hs.get("two"));
//            } else {
//                System.out.println("Total different Words:" + hs.getSize());
//            }

//            // 进行删除操作
//            for (String word: words) {
//                hs.remove(word);
//            }
//
//            // 删除所有的单词后，查看AVL树中单词的个数。
//            System.out.println("Total Words:" + hs.getSize());

        } else {
            throw new Error("file read fail.");
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 打印测试红黑树后的信息
    private static void paintTestInfo () {
        // 傲慢与偏见
        String book1 = "./file/pride-and-prejudice.txt";
        System.out.println("Pride and Prejudice.");

        MyBSTMap<String, Integer> myBSTTree = new MyBSTMap<String, Integer>();
        MyAVLTree<String, Integer> myAVLTree = new MyAVLTree<String, Integer>();
        MyRedBlackTree<String, Integer> myRedBlackTree = new MyRedBlackTree<String, Integer>();
//        MyHashTable<String, Integer> myHashTable = new MyHashTable<String, Integer>(131071);
        MyHashTable<String, Integer> myHashTable = new MyHashTable<String, Integer>();

        double myBSTTreeTime = testBSTTree(myBSTTree, book1);
        double myAVLTreeTime = testAVLTree(myAVLTree, book1);
        double myRedBlackTreeTime = testRedBlackTree(myRedBlackTree, book1);
        double myHashTableTime = testHashTable(myHashTable, book1);

        /**
         * MyBSTMap，time：0.263417346s.
         * MyAVLTree，time：0.255284637s.
         * MyRedBlackTree，time：0.216410822s.
         * MyHashTable，time：0.146759553s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTTreeTime + "s.");
        System.out.println("MyAVLTree，time：" + myAVLTreeTime + "s.");
        System.out.println("MyRedBlackTree，time：" + myRedBlackTreeTime + "s.");
        System.out.println("MyHashTable，time：" + myHashTableTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";

        myBSTTree = new MyBSTMap<String, Integer>();
        myAVLTree = new MyAVLTree<String, Integer>();
        myRedBlackTree = new MyRedBlackTree<String, Integer>();
//        myHashTable = new MyHashTable<String, Integer>(196613);
        myHashTable = new MyHashTable<String, Integer>();

        myBSTTreeTime = testBSTTree(myBSTTree, book2);
        myAVLTreeTime = testAVLTree(myAVLTree, book2);
        myRedBlackTreeTime = testRedBlackTree(myRedBlackTree, book2);
        myHashTableTime = testHashTable(myHashTable, book2);

        /**
         * MyBSTMap，time：0.272627746s.
         * MyAVLTree，time：0.269105581s.
         * MyRedBlackTree，time：0.236891635s.
         * MyHashTable，time：0.138411306s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTTreeTime + "s.");
        System.out.println("MyAVLTree，time：" + myAVLTreeTime + "s.");
        System.out.println("MyRedBlackTree，time：" + myRedBlackTreeTime + "s.");
        System.out.println("MyHashTable，time：" + myHashTableTime + "s.");
    }

    public static void main(String[] args) {
        paintTestInfo();
    }
}