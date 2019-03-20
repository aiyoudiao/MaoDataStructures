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

class Solution3 {

    private class Freq{

        // 元素的值和频率
        public int e, freq;

        public Freq () {}
        public Freq (int e, int freq) {
            this.e = e;
            this.freq = freq;
        }
    }

    // 实现一个比较器的类
    private class FreqComparator implements Comparator<Freq> {

        @Override
        public int compare(Freq fq1, Freq fq2) {
//            if (fq1.freq < fq2.freq)
//                return -1;
//            else if (fq1.freq > fq2.freq)
//                return 1;
//            else
//                return 0;
            return fq1.freq - fq2.freq;
        }
    }

    public List<Integer> topKFrequent(int[] nums, int k) {

        // 先将数组中的元素放入 TreeMap中，统计每个数字出现的次数
        TreeMap<Integer, Integer> treeMap = new TreeMap<Integer, Integer>();

        for (int num: nums) {
            if (treeMap.containsKey(num))
                treeMap.put(num, treeMap.get(num) + 1);
            else
                treeMap.put(num, 1);
        }

        // 使用java的PriorityQueue   将比较器作为优先队列的一个参数传递进去
        PriorityQueue<Freq> priorityQueue = new PriorityQueue<Freq>(new FreqComparator());

        // 这样的一个算法就是nlogk这样一个级别的算法
        for (int key: treeMap.keySet()) {
            // 如果还没有存够k个元素
            if (priorityQueue.size() < k)
                priorityQueue.add(new Freq(key, treeMap.get(key)));
            else if (treeMap.get(key) > priorityQueue.peek().freq) {
                priorityQueue.remove();
                priorityQueue.add(new Freq(key, treeMap.get(key)));
            }
        }
        LinkedList<Integer> result = new LinkedList<Integer>();
        while (!priorityQueue.isEmpty())
            result.add(priorityQueue.remove().e);
        return result;
    }

    public static void main(String[] args) {
        int[] testData = {4, 1, -1, 2, -1, 2, 3};//{3,0,1,0};
        Solution3 solution = new Solution3();
        System.out.println(solution.topKFrequent(testData, 2));
    }
}
