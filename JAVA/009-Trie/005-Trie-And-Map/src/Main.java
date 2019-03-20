import java.util.ArrayList;
public class Main {

    private static double testSet (IMyMap<String, Integer> map, String fileName) {
        long startTime = System.nanoTime();

        System.out.println("Read File：" + fileName);
        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile(fileName,words)) {
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
        /**
         * Read File：./file/pride-and-prejudice.txt
         * Total Words:125901
         * No Repeat Total Words:6530
         * Frequency of Pride(Ppride 的 词频次数):53
         * Frequency of Prejudice(Prejudice 的 词频次数):11
         * **/

        MyBSTMap<String, Integer> myBSTMap = new MyBSTMap<String, Integer>();
        MyLinkedListMap<String, Integer> myLinkedListMap = new MyLinkedListMap<String, Integer>();
        MyTrieMap<Integer> myTrieMap = new MyTrieMap< Integer>();

        double myBSTMapTime = testSet(myBSTMap, book1);
        double myLinkedListMapTime = testSet(myLinkedListMap, book1);
        double myTrieMapTime = testSet(myTrieMap, book1);

        /**
         * MyBSTMap，time：0.269984805s.
         * MyLinkedListMap，time：24.217881582s.
         * MyTrieMap，time：0.173457741s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTMapTime + "s.");
        System.out.println("MyLinkedListMap，time：" + myLinkedListMapTime + "s.");
        System.out.println("MyTrieMap，time：" + myTrieMapTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";
        /**
         * Read File：./file/a-tale-of-two-cities.txt
         * Total Words:141489
         * Total different Words:9944
         * Frequency of tale(tale 的 词频次数):7
         * Frequency of two(two 的 词频次数):230
         **/

        myBSTMap = new MyBSTMap<String, Integer>();
        myLinkedListMap = new MyLinkedListMap<String, Integer>();
        myTrieMap = new MyTrieMap<Integer>();

        myBSTMapTime = testSet(myBSTMap, book2);
        myLinkedListMapTime = testSet(myLinkedListMap, book2);
        myTrieMapTime = testSet(myTrieMap, book2);

        /**
         * MyBSTMap，time：0.21705792s.
         * MyLinkedListMap，time：40.117349965s.
         * MyTrieMap，time：0.195021338s.
         **/
        System.out.println("MyBSTMap，time：" + myBSTMapTime + "s.");
        System.out.println("MyLinkedListMap，time：" + myLinkedListMapTime + "s.");
        System.out.println("MyTrieMap，time：" + myTrieMapTime + "s.");
    }
}
