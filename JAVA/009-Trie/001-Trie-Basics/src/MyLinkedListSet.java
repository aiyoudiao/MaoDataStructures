import java.util.ArrayList;

public class MyLinkedListSet<E> implements IMySet<E>{
    // 链表对象
    private MyLinkedList<E> myLinkedList;

    public MyLinkedListSet () {
        myLinkedList = new MyLinkedList<E>();
    }

    /**
     * @param e 添加操作
     */
    @Override
    public void add(E e) {
        if (!myLinkedList.contains(e)) {
            myLinkedList.addFirst(e);
        }
    }

    /**
     * @param e 移除操作
     */
    @Override
    public void remove(E e) {
        myLinkedList.removeElement(e);
    }

    /**
     * @param e
     * @return contain
     * 是否包含指定元素
     */
    @Override
    public boolean contains(E e) {
        return myLinkedList.contains(e);
    }

    /**
     * @return size
     * 获取实际元素个数
     */
    @Override
    public int getSize() {
        return myLinkedList.getSize();
    }

    /**
     * @return isempty
     * 集合是否为空
     */
    @Override
    public boolean isEmpty() {
        return myLinkedList.isEmpty();
    }

    public static void main(String[] args) {

        // 傲慢与偏见
        System.out.println("Pride and Prejudice.");

        ArrayList<String> words = new ArrayList<String>();
        if (FileOperation.readFile("./file/pride-and-prejudice.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyLinkedListSet<String> myLinkedListSet = new MyLinkedListSet<String>();

            for (String word : words) {
                myLinkedListSet.add(word);
            }
            System.out.println("No Repeat Total Words:" + myLinkedListSet.getSize());
        }
        System.out.println("-----------------------------------------");

        // 狄更斯的双城记
        System.out.println("a-tale-of-two-cities.");
        words = new ArrayList<String>();
        if (FileOperation.readFile("./file/a-tale-of-two-cities.txt",words)) {
            System.out.println("Total Words:" + words.size());

            MyLinkedListSet<String> myLinkedListSet = new MyLinkedListSet<String>();

            for (String word : words) {
                myLinkedListSet.add(word);
            }
            System.out.println("Total different Words:" + myLinkedListSet.getSize());
        }
    }
}
