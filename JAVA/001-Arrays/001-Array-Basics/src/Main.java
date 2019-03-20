public class Main {

    public static void main(String[] args) {
        // 输出
        System.out.println("Array");

        // 定义数组
        int[] arr = new int[10];

        // 循环赋值
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i;
        }

        // 定义数组
        int[] scores = new int[]{100, 99, 88};

        // for循环遍历 数组
        for (int i = 0; i <scores.length ; i++) {
            System.out.println(scores[i]);
        }

        // 修改数组中某个元素
        scores[0] = 60;

        // foreach 遍历数组
        for (int score: scores) {
            System.out.println(score);
        }

    }
}