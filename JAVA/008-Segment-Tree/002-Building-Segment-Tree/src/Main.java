public class Main {

    public static void main(String[] args) {
        // 初始数据
	    Integer[] nums = {-2, 0, 3, -5, 2, -1};
	    // 初始化线段树，将初始数据和融合器传入进去
	    MySegmentTree<Integer> mySegmentTree =
                new MySegmentTree<Integer>(nums, (a, b) -> a + b );

	    // 输出
        System.out.println(mySegmentTree);
    }
}
