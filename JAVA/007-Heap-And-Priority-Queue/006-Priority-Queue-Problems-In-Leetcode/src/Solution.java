import java.util.LinkedList;
import java.util.List;
import java.util.TreeMap;

class Solution {

    private class Freq implements Comparable<Freq> {

        // 元素的值和频率
        public int e, freq;

        public Freq () {}
        public Freq (int e, int freq) {
            this.e = e;
            this.freq = freq;
        }

        @Override
        public int compareTo(Freq another) {

            // 最大堆，取出优先级最高的那个元素，
            // 频次最低的那个元素才是优先级最高的

            // 频次低的话优先级才高
            if (this.freq < another.freq)
                return 1;
            else if (this.freq > another.freq)
                return -1;
            else
                return 0;
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

        // 使用自定义的优先队列
        MyPriorityQueue<Freq> priorityQueue = new MyPriorityQueue<Freq>();

        // 这样的一个算法就是nlogk这样一个级别的算法
        for (int key: treeMap.keySet()) {
            // 如果还没有存够k个元素
            if (priorityQueue.getSize() < k)
                priorityQueue.enqueue(new Freq(key, treeMap.get(key)));
            else if (treeMap.get(key) > priorityQueue.getFront().freq) {
                priorityQueue.dequeue();
                priorityQueue.enqueue(new Freq(key, treeMap.get(key)));
            }
        }
        LinkedList<Integer> result = new LinkedList<Integer>();
        while (!priorityQueue.isEmpty())
            result.add(priorityQueue.dequeue().e);
        return result;
    }

    public static void main(String[] args) {
        int[] testData = {4,1,-1,2,-1,2,3};//{3,0,1,0};
        Solution solution = new Solution();
        System.out.println(solution.topKFrequent(testData, 2));
    }
}