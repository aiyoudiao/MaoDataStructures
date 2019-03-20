import java.util.ArrayList;
import java.util.TreeMap;

/**
 * Created by LENOVO on 2018/11/5.
 * Leetcode 350.两个数组的交集 II
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */
public class Solution2 {
    public int[] intersect(int[] nums1, int[] nums2) {
        TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();

        for (int num: nums1) {
            if (map.containsKey(num))
                map.put(num, map.get(num) + 1);
            else
                map.put(num, 1);
        }

        ArrayList<Integer> data = new ArrayList<Integer>();
        for (int num: nums2) {
            if (map.containsKey(num)) {
                data.add(num);
                int result = map.get(num) - 1;
                map.put(num, result);
                if (result == 0)
                    map.remove(num);
            }
        }

        int[] ret = new int[data.size()];
        for (int i = 0; i < ret.length ; i++) {
            ret[i] = data.get(i);
        }

        return ret;
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 2, 1};
        int[] nums2 = {2, 2};
        int[] nums3 = {4,9,5};
        int[] nums4 = {9,4,9,8,4};

        int[] result1 = (new Solution2()).intersect(nums1, nums2);
        int[] result2 = (new Solution2()).intersect(nums3, nums4);

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
