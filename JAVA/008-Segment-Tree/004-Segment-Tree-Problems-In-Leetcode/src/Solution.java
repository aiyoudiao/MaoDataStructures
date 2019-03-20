/**
 * Created by LENOVO on 2018/11/1.
 */
public class Solution {

    public static void main(String[] args) {

        // 初始数据
        int[] nums = {-2, 0, 3, -5, 2, -1};
        NumArray obj = new NumArray(nums);
        NumArray2 obj2 = new NumArray2(nums);

        // 输出
        System.out.println(obj.sumRange(0,2));
        System.out.println(obj2.sumRange(0,2));
        System.out.println(obj.sumRange(2,5));
        System.out.println(obj2.sumRange(2,5));
        System.out.println(obj.sumRange(0,5));
        System.out.println(obj2.sumRange(0,5));
    }
}
