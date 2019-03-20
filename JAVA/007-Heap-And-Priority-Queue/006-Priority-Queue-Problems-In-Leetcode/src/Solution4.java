/**
 * Created by LENOVO on 2018/10/28.
 * 使用java的PriorityQueue
 * 实现Comparator 初始化时传入这个比较器
 */
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.TreeMap;
import java.util.PriorityQueue;

class Solution4 {

    public List<Integer> topKFrequent(int[] nums, int k) {

        // 先将数组中的元素放入 TreeMap中，统计每个数字出现的次数
        TreeMap<Integer, Integer> treeMap = new TreeMap<Integer, Integer>();

        for (int num: nums) {
            if (treeMap.containsKey(num))
                treeMap.put(num, treeMap.get(num) + 1);
            else
                treeMap.put(num, 1);
        }

        // 使用java的PriorityQueue  然后传入一个匿名的比较器类
        // 比较的方式时，通过TreeMap中对应key的value值来进行比较
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<Integer>(new Comparator<Integer>() {
            @Override
            public int compare(Integer key1, Integer key2) {
                // 看treemap中对应的映射值
                return treeMap.get(key1) - treeMap.get(key2);
            }
        });

        // 这样的一个算法就是nlogk这样一个级别的算法
        for (int key: treeMap.keySet()) {
            // 如果还没有存够k个元素
            if (priorityQueue.size() < k)
                priorityQueue.add(key);
            else if (treeMap.get(key) > treeMap.get(priorityQueue.peek())) {
                priorityQueue.remove();
                priorityQueue.add(key);
            }
        }

        LinkedList<Integer> result = new LinkedList<Integer>();
        while (!priorityQueue.isEmpty())
            result.add(priorityQueue.remove());
        return result;
    }

    public static void main(String[] args) {
        int[] testData = {4, 1, -1, 2, -1, 2, 3};//{3,0,1,0};
        Solution4 solution = new Solution4();
        System.out.println(solution.topKFrequent(testData, 2));
    }
}
