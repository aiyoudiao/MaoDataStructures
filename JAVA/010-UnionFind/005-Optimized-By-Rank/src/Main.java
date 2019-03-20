import java.util.Random;
public class Main {

    private static double testUnionFind (IMyUnionFind myUnionFind, int openCount) {

        int size = myUnionFind.getSize();
        Random random = new Random();

        long startTime = System.nanoTime();

        for (int i = 1; i <= openCount ; i++) {
            int a = random.nextInt(size);
            int b = random.nextInt(size);

            myUnionFind.unionElements(a, b);
        }


        for (int i = 1; i <= openCount ; i++) {
            int a = random.nextInt(size);
            int b = random.nextInt(size);

            myUnionFind.isConnected(a, b);
        }

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }

    public static void main(String[] args) {
        // 千万级别
        int size = 10000000; // 并查集维护节点数
        int openCount = 10000000; // 操作数

//        MyUnionFindOne myUnionFindOne = new MyUnionFindOne(size);
//        MyUnionFindTwo myUnionFindTwo = new MyUnionFindTwo(size);
        MyUnionFindThree myUnionFindThree = new MyUnionFindThree(size);
        MyUnionFindFour myUnionFindFour = new MyUnionFindFour(size);

//        double muf1Time = testUnionFind(myUnionFindOne, openCount);
//        double muf2Time = testUnionFind(myUnionFindTwo, openCount);
        double muf3Time = testUnionFind(myUnionFindThree, openCount);
        double muf4Time = testUnionFind(myUnionFindFour, openCount);

//        System.out.println("MyUnionFindOne，time：" + muf1Time + "s.");
//        System.out.println("MyUnionFindTwo，time：" + muf2Time + "s.");
        System.out.println("MyUnionFindThree，time：" + muf3Time + "s.");
        System.out.println("MyUnionFindFour，time：" + muf4Time + "s.");

    }
}
