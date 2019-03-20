public class Calc {

    /*
    * 递归求和 *
     * */

    public static int sum (int[] arr) {
       return sum(arr, 0);
    }

    // 计算 arr[cur...n] 这个区间内的所有数字之和。
    public static int sum (int[] arr, int cur) {
        if (arr.length > cur) {
            return arr[cur] + sum(arr, cur+1);
        }
        return 0;
    }

    /*
    * 尾递归求和 *
     * */

    public static int tailSum (int[] arr) {
       return tailSum(arr, 0);
    }

    public static int tailSum (int[] arr, int cur) {
        return tailSum(arr, 0, 0);
    }

    public static int tailSum (int[] arr, int cur, int result) {
        if (arr.length <= cur) {
            return result;
        }

        return tailSum(arr, cur + 1, result+arr[cur]);

    }
}
