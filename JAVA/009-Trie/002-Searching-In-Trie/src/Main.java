import java.util.ArrayList;

public class Main {

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

    public static void main(String[] args) {

        // 傲慢与偏见
        String book1 = "./file/pride-and-prejudice.txt";
        System.out.println("Pride and Prejudice.");

        MyBSTSet<String> myBSTSet = new MyBSTSet<String>();
        MyLinkedListSet<String> myLinkedListSet = new MyLinkedListSet<String>();
        MyTrieSet myTrieSet = new MyTrieSet();

        double myBSTSetTime = testSet(myBSTSet, book1);
//        double myLinkedListSetTime = testSet(myLinkedListSet, book1);
        double myTrieSetTime = testSet(myTrieSet, book1);
        // Total Words:125901
        // Total different Words:6530

        // MyBSTSet，time：0.209599118s.
        System.out.println("MyBSTSet，time：" + myBSTSetTime + "s.");
        // MyLinkedListSet，time：6.082037257s.
//        System.out.println("MyLinkedListSet，time：" + myLinkedListSetTime + "s.");
        // MyTrieSetTime，time：0.127590941s.
        System.out.println("MyTrieSetTime，time：" + myTrieSetTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";

        myBSTSet = new MyBSTSet<String>();
        myLinkedListSet = new MyLinkedListSet<String>();
        myTrieSet = new MyTrieSet();

        myBSTSetTime = testSet(myBSTSet, book2);
//        myLinkedListSetTime = testSet(myLinkedListSet, book2);
        myTrieSetTime = testSet(myTrieSet, book2);
        // Total Words:141489
        // Total different Words:9944

        // MyBSTSet，time：0.153439192s.
        System.out.println("MyBSTSet，time：" + myBSTSetTime + "s.");
        // MyLinkedListSet，time：10.154179461s.
//        System.out.println("MyLinkedListSet，time：" + myLinkedListSetTime + "s.");
        // MyTrieSetTime，time：0.129285733s.
        System.out.println("MyTrieSetTime，time：" + myTrieSetTime + "s.");
    }
}
