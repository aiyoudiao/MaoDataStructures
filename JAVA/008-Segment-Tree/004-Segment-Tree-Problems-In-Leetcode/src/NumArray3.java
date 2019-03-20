/**
 * 题目：307.区域和检索 - 数组可修改
 * 网址：https://leetcode-cn.com/problems/range-sum-query-mutable/
 * 方式：对数组进行一定的预处理
 */
public class NumArray3 {

    private int[] sum;
    private int[] data;
    public NumArray3(int[] nums) {

        // 克隆一份原数组
        data = new int[nums.length];
        for (int i = 0; i < nums.length ; i++)
            data[i] = nums[i];

        if (nums.length > 0) {
            sum = new int[nums.length + 1];

//            sum[0] = 0;
//            for (int i = 1; i < sum.length; i++)
//                sum[i] = sum[i - 1] + nums[i - 1];
            for (int i = 0; i < nums.length; i++)
                sum[i + 1] = sum[i] + nums[i];
        }
    }

    public void update(int i, int val) {
        data[i] = val;

//        for (int j = i + 1; j < sum.length ; j++)
//            sum[j] = sum[j - 1] + data[j - 1];

        for (int j = 0; j < data.length ; j++)
            sum[j + 1] = sum[j] + data[j];
    }

    public int sumRange(int i, int j) {
        return sum[j + 1] - sum[i];
    }

}
