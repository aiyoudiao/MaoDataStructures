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

//        // 前序遍历
//        mbst.preOrder(); // 5 3 2 4 6 8
//        System.out.println();
//
//        // 中序遍历
//        mbst.inOrder(); // 2 3 4 5 6 8
//        System.out.println();
//
//        // 后序遍历
//        mbst.postOrder(); // 2 4 3 8 6 5
//        System.out.println();
//
//        // 前序遍历 非递归
//        mbst.preOrderNonRecursive(); // 5 3 2 4 6 8
//        System.out.println();

        mbst.levelOrder(); // 5 3 6 2 4 8
        System.out.println();


//        // 输出 调试字符串
//        System.out.println(mbst.toString());
    }
}
