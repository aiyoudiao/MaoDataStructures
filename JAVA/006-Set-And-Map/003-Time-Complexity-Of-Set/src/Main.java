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

        double myBSTSetTime = testSet(myBSTSet, book1);
        double myLinkedListSetTime = testSet(myLinkedListSet, book1);

        System.out.println("MyBSTSet，time：" + myBSTSetTime + "s.");
        System.out.println("MyLinkedListSet，time：" + myLinkedListSetTime + "s.");

        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        String book2 = "./file/a-tale-of-two-cities.txt";

        myBSTSet = new MyBSTSet<String>();
        myLinkedListSet = new MyLinkedListSet<String>();

        myBSTSetTime = testSet(myBSTSet, book2);
        myLinkedListSetTime = testSet(myLinkedListSet, book2);

        System.out.println("MyBSTSet，time：" + myBSTSetTime + "s.");
        System.out.println("MyLinkedListSet，time：" + myLinkedListSetTime + "s.");
    }
}
