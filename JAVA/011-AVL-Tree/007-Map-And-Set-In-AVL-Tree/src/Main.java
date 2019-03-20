import java.util.ArrayList;

public class Main {

    private static double testMap (IMyMap<String, Integer> map, String fileName) {
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

    private static double testSet (IMySet<String> set, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile(fileName,words)) {
            System.out.println("Total Words:" + words.size());
            for (String word : words) {
                set.add(word);
            }
            System.out.println("Total different Words:" + set.getSize());
        } else {
            throw new Error("file read fail.");
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    // 打印测试Map后的信息
    private static void paintTestMapInfo () {
        // 傲慢与偏见
        String book1 = "./file/pride-and-prejudice.txt";
        System.out.println("Pride and Prejudice.");

        MyBSTMap<String, Integer> myBSTMap = new MyBSTMap<String, Integer>();
        MyAVLTreeMap<String, Integer> myAvlTreeMap = new MyAVLTreeMap<String, Integer>();

        double myBSTMapTime = testMap(myBSTMap, book1);
        double avlTreeMapTime = testMap(myAvlTreeMap, book1);

        /**
         * MyBSTMap，time：0.260194112s.
         * MyAVLTree，time：0.208899495s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTMapTime + "s.");
        System.out.println("MyAVLTreeMap，time：" + avlTreeMapTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";

        myBSTMap = new MyBSTMap<String, Integer>();
        myAvlTreeMap = new MyAVLTreeMap<String, Integer>();

        myBSTMapTime = testMap(myBSTMap, book2);
        avlTreeMapTime = testMap(myAvlTreeMap, book2);

        /**
         * MyBSTMap，time：0.32490768s.
         * MyAVLTree，time：0.28482232s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTMapTime + "s.");
        System.out.println("MyAVLTreeMap，time：" + avlTreeMapTime + "s.");
    }

    // 打印测试Set后的信息
    private static void paintTestSetInfo () {
        // 傲慢与偏见
        String book1 = "./file/pride-and-prejudice.txt";
        System.out.println("Pride and Prejudice.");

        MyBSTSet<String> myBSTSet = new MyBSTSet<String>();
        MyAVLTreeSet<String> myAVLTreeSet = new MyAVLTreeSet<String>();

        double myBSTSetTime = testSet(myBSTSet, book1);
        double myAVLTreeSetTime = testSet(myAVLTreeSet, book1);

        System.out.println("MyBSTSet，time：" + myBSTSetTime + "s.");
        System.out.println("MyAVLTreeSet，time：" + myAVLTreeSetTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";

        myBSTSet = new MyBSTSet<String>();
        myAVLTreeSet = new MyAVLTreeSet<String>();

        myBSTSetTime = testSet(myBSTSet, book2);
        myAVLTreeSetTime = testSet(myAVLTreeSet, book2);

        System.out.println("MyBSTSet，time：" + myBSTSetTime + "s.");
        System.out.println("MyAVLTreeSet，time：" + myAVLTreeSetTime + "s.");
    }
    
    public static void main(String[] args) {
        paintTestMapInfo();
        paintTestSetInfo();
    }
}
