import java.util.Random;

public class Main {
    private static double testHeap (Integer[] testData, boolean isHeapify) {
        long startTime = System.nanoTime();
        MaxHeap<Integer> maxHeap;

        // 是否支持 Heapify，也就是支持将一个数组直接变成堆的形状
        if (isHeapify) {
            maxHeap = new MaxHeap<Integer>(testData);
        } else {
            maxHeap = new MaxHeap<Integer>();
//            for (int i = 0; i < testData.length ; i++)
//                maxHeap.add(testData[i]);
            for (int num: testData) {
                maxHeap.add(num);
            }
        }

        System.out.println("MaxHeap maxHeap size:" + maxHeap.size());

        // 使用数组取值
        int [] arr = new int[testData.length];
        for (int i = 0; i < arr.length ; i++)
            arr[i] = maxHeap.extractMax();

        System.out.println("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());

        // 检验一下是否符合要求
        for (int i = 1; i < arr.length; i++)
            if (arr[i - 1] < arr[i]) throw new IllegalArgumentException("");

        System.out.println("test maxHeap completed.");

        long endTime = System.nanoTime();

        return  (endTime - startTime) / 1000_000_000.0;
    }
    public static void main(String[] args) {
        int n = 1000000;

        Integer[] testData = new Integer[n];
        Random random = new Random();

        // 循环添加随机数的值
        for (int i = 0; i < n; i++)
            testData[i] = random.nextInt(Integer.MAX_VALUE);

        System.out.println("testData size:" + testData.length);

        System.out.println("-----------------------------------------");

        double notHeapifyTime = testHeap(testData, false);
        System.out.println("without heapify，time：" + notHeapifyTime + "s.");

        System.out.println("-----------------------------------------");

        double heapifyTime = testHeap(testData, true);
        System.out.println("with heapify，time：" + heapifyTime + "s.");
    }
}