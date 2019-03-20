import java.util.Random;

public class Main {

    public static void main(String[] args) {
        int n = 1000000;

        MaxHeap<Integer> maxHeap = new MaxHeap<Integer>();
        Random random = new Random();

        // 循环添加随机数的值
        for (int i = 0; i < n; i++)
            maxHeap.add(random.nextInt(Integer.MAX_VALUE));

        System.out.println("MaxHeap maxHeap size:" + maxHeap.size());

        // 使用数组取值
        int [] arr = new int[n];
        for (int i = 0; i < n ; i++)
            arr[i] = maxHeap.extractMax();

        System.out.println("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());

        // 检验一下是否符合要求
        for (int i = 1; i < n; i++)
            if (arr[i - 1] < arr[i]) throw new IllegalArgumentException("");

        System.out.println("test maxHeap completed.");
    }
}