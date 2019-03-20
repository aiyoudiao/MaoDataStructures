public class Main {

    public static void main(String[] args) {

        MyBinarySearchTree<Integer> mbst = new MyBinarySearchTree<Integer>();

        int [] nums = {5, 3, 6, 8, 4, 2};
        for (int i = 0; i < nums.length ; i++) {
            mbst.add(nums[i]);
        }

        /////////////////
        //      5      //
        //    /   \    //
        //   3    6    //
        //  / \    \   //
        // 2  4     8  //
        /////////////////
        mbst.preOrder();

        System.out.println();

        // 输出 调试字符串
        System.out.println(mbst.toString());
    }
}
