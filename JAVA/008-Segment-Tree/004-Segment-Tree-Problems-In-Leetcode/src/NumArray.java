/**
 * 题目：303.区域和检索-数组不可变
 * 网址：https://leetcode-cn.com/problems/range-sum-query-immutable/
 * 方式：使用线段树
 */
class NumArray {

    private MySegmentTree<Integer> mySegmentTree;

    public NumArray(int[] nums) {

        if (nums.length > 0) {

            Integer[] data = new Integer[nums.length];
            for (int i = 0; i < nums.length; i++)
                data[i] = nums[i];

            mySegmentTree =
                    new MySegmentTree<Integer>(data, (a, b) -> a + b);
        }
    }

    public int sumRange(int i, int j) {
        if (mySegmentTree == null)
            throw new IllegalArgumentException("segment tree is null.");
        return mySegmentTree.query(i, j);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(i,j);
 */