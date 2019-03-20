/**
 * 题目：303.区域和检索-数组不可变
 * 网址：https://leetcode-cn.com/problems/range-sum-query-immutable/
 * 方式：对数组进行一定的预处理
 */
public class NumArray2 {

    private int[] sum; // sum[i] 表示存储前i个元素和
                        // sum[i] 存储 nums[0...(i-1)]的和
                        // 因为sum[0] 中存的是0，而并不是nums[0]
                        // sum[1]中存储的才是nums[0]这一个元素的和
    public NumArray2(int[] nums) {
        if (nums.length > 0) {
            sum = new int[nums.length + 1];
//            sum[0] = 0;
//            for (int i = 1; i < sum.length; i++)
//                sum[i] = sum[i - 1] + nums[i - 1];

            for (int i = 0; i < nums.length; i++)
                sum[i + 1] = sum[i] + nums[i];
        }
    }
    public int sumRange(int i, int j) {
        return sum[j + 1] - sum[i];
    }
}
