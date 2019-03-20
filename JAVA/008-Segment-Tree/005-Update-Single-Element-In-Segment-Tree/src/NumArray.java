/**
 * 题目：307.区域和检索 - 数组可修改
 * 网址：https://leetcode-cn.com/problems/range-sum-query-mutable/
 * 方式：使用线段树
 */
public class NumArray {

    private int[] sum;
    private MySegmentTree<Integer> mySegmentTree;
    public NumArray(int[] nums) {
        if (nums.length > 0) {

            Integer[] data = new Integer[nums.length];
            for (int i = 0; i < nums.length; i++)
                data[i] = nums[i];

            mySegmentTree = new MySegmentTree<Integer>(data, (a, b) -> a + b);
        }
    }

    public void update(int i, int val) {
        mySegmentTree.set(i, val);
    }

    public int sumRange(int i, int j) {
        return mySegmentTree.query(i, j);
    }

}
