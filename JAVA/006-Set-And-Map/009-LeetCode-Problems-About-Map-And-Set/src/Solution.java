import java.util.ArrayList;
import java.util.TreeMap;
import java.util.TreeSet;

/**
 * Created by LENOVO on 2018/11/5.
 * leetcode 349.两个数组的交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */
public class Solution {
    // 12ms
    public int[] intersectionTemp(int[] nums1, int[] nums2) {
        TreeSet<Integer> treeSet1 = new TreeSet<Integer>();
        TreeSet<Integer> treeSet2 = new TreeSet<Integer>();
        for (int i = 0; i < nums1.length ; i++) {
            treeSet1.add(nums1[i]);
        }
        for (int i = 0; i < nums2.length; i++) {
            treeSet2.add(nums2[i]);
        }

        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        while (!treeSet2.isEmpty()) {
            int result = treeSet2.pollFirst();
            if(treeSet1.contains(result)) {
                arrayList.add(result);
            }
        }

        int[] result = new int[arrayList.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = arrayList.get(i);
        }

        return result;
    }

    // 8ms
    public int[] intersection(int[] nums1, int[] nums2) {
        TreeSet<Integer> set = new TreeSet<Integer>();

        for (int key: nums1) {
            set.add(key);
        }

        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        for (int key: nums2) {
            if (set.contains(key)) {
                arrayList.add(key);
                set.remove(key);
            }
        }

        int[] result = new int[arrayList.size()];

        for (int i = 0; i < result.length; i++) {
            result[i] = arrayList.get(i);
        }

        return result;
    }

    // 超出时间限制 or 16ms
    public int[] intersection2Temp(int[] nums1, int[] nums2) {
        TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();
        ArrayList<Integer> keys = new ArrayList<Integer>();

        for (int i = 0; i < nums1.length; i++) {
            if (!map.containsKey(nums1[i]))
                keys.add(nums1[i]);
            map.put(nums1[i],1);
        }

        for (int i = 0; i < nums2.length; i++) {
            if (map.containsKey(nums2[i]))
                map.put(nums2[i], map.get(nums2[i]) + 1);
        }

        int key = 0;
        ArrayList<Integer> data = new ArrayList<Integer>();
        for (int i = 0; i < keys.size() ; i++) {
            key = keys.get(i);
            if (map.get(key) >= 2) {
                data.add(key);
            }
        }

        int[] result = new int[data.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = data.get(i);
        }

        return result;
    }

    // 12ms
    public int[] intersection2(int[] nums1, int[] nums2) {
        TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();
        ArrayList<Integer> keys = new ArrayList<Integer>();

        for (int key: nums1)
            map.put(key, 0);

        for (int key: nums2) {
            if (map.containsKey(key)){
                keys.add(key);
                map.remove(key);
            }
        }

        int[] result = new int[keys.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = keys.get(i);
        }

        return result;
    }

    public static void main(String[] args) {
       int[] nums1 = {1, 2, 2, 1};
       int[] nums2 = {2, 2};
       int[] nums3 = {4,9,5};
       int[] nums4 = {9,4,9,8,4};

       int[] result1 = (new Solution()).intersection2(nums1, nums2);
       int[] result2 = (new Solution()).intersection2(nums3, nums4);

        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < result1.length ; i++) {
            sb.append(result1[i]);
            if (i != result1.length - 1)
                sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());

        System.out.println("");

        sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < result2.length ; i++) {
            sb.append(result2[i]);
            if (i != result2.length - 1)
                sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());

    }
}
