import java.util.ArrayList;

public class MyBSTSet<E extends Comparable<E>> implements IMySet<E> {

    // 二分搜索树对象
    private MyBinarySearchTree<E> myBST;

    public MyBSTSet () {
        myBST = new MyBinarySearchTree<E>();
    }

    /**
     * @param e 添加操作
     */
    @Override
    public void add(E e) {
        myBST.add(e);
    }

    /**
     * @param e 移除操作
     */
    @Override
    public void remove(E e) {
        myBST.remove(e);
    }

    /**
     * @param e
     * @return contain
     * 是否包含指定元素
     */
    @Override
    public boolean contains(E e) {

        return myBST.contains(e);
    }

    /**
     * @return size
     * 获取实际元素个数
     */
    @Override
    public int getSize() {
        return myBST.getSize();
    }

    /**
     * @return isempty
     * 集合是否为空
     */
    @Override
    public boolean isEmpty() {
        return myBST.isEmpty();
    }

    public static void main(String[] args) {

        // 傲慢与偏见
        System.out.println("Pride and Prejudice.");

        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile("./file/pride-and-prejudice.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyBSTSet<String> mbsst = new MyBSTSet<String>();

            for (String word : words) {
                mbsst.add(word);
            }
            System.out.println("No Repeat Total Words:" + mbsst.getSize());
        }
        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        words = new ArrayList<String>();
        if (FileOperation.readFile("./file/a-tale-of-two-cities.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyBSTSet<String> mbsst = new MyBSTSet<String>();

            for (String word : words) {
                mbsst.add(word);
            }
            System.out.println("Total different Words:" + mbsst.getSize());
        }
    }
}
