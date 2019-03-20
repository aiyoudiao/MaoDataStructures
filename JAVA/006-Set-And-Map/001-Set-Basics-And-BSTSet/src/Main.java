import java.util.ArrayList;
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        // 傲慢与偏见
        System.out.println("Pride and Prejudice.");

        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile("./file/pride-and-prejudice.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyBSTSet<String> mbsst = new MyBSTSet<String>();

            for (String word : words) {
                mbsst.add(word);
            }
            System.out.println("No Repeat Total Words:" + mbsst.getSize());
        }
        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        words = new ArrayList<String>();
        if (FileOperation.readFile("./file/a-tale-of-two-cities.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyBSTSet<String> mbsst = new MyBSTSet<String>();

            for (String word : words) {
                mbsst.add(word);
            }
            System.out.println("Total different Words:" + mbsst.getSize());
        }
    }
}
