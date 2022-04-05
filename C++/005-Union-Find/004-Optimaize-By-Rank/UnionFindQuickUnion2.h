//
// Created by LENOVO on 2018/12/4.
//

#ifndef INC_005_UNION_FIND_UNIONFINDQUICKUNION2_H
#define INC_005_UNION_FIND_UNIONFINDQUICKUNION2_H

#include <cassert>

namespace UnionFindQuickUnion2 {

    class UnionFind3 {

    private:
        int* forest; // 存储节点的指向
        int* branch; // 每棵树存的节点个数
        int count; // 节点的个数

    public:
        UnionFind3 (int n) {
            count = n;

            // 初始化，默认每一个节点都指向自身，每个节点的节点个数都是1
            forest = new int[n];
            branch = new int[n];
            for (int i = 0; i < n; ++i) {
                forest[i] = i;
                branch[i] = 1;
            }
        }

        ~UnionFind3() {
            delete [] forest;
            delete [] branch;
        }

        // 查找过程, 查找节点index所指向的节点
        int find (int index) {
            assert(index >= 0 && index < count);

            while (index != forest[index])
                index = forest[index];

            return index;
        }

        // 查看节点primary和节点secondray是否同指一个根节点
        // O(h)复杂度, h为树的高度
        bool isConnected (int primary, int secondray) {
            int primaryRoot = find(primary);
            int secondaryRoot = find(secondray);

            return primaryRoot == secondaryRoot;
        }

        // 合并节点primary和节点secondray所属的树
        // O(h)复杂度, h为树的高度
        void unionElements (int primary, int secondray) {
            int primaryRoot = find(primary);
            int secondaryRoot = find(secondray);

            if (primaryRoot == secondaryRoot)
                return;

            // 节点个数少的节点指向节点个数多的节点

            if (branch[primaryRoot] < branch[secondaryRoot]) {
                // primary 这个节点 指向 secondary这个节点
                forest[primaryRoot] = secondaryRoot;
                branch[secondaryRoot] += branch[primaryRoot];

            } else if (branch[primaryRoot] > branch[secondaryRoot]) {
                // secondary 这个节点 指向 primary这个节点
                forest[secondaryRoot] = primaryRoot;
                branch[primaryRoot] += branch[secondaryRoot];
            } else { // 节点数量相等 谁指向谁都一样
                // secondary 这个节点 指向 primary这个节点
                forest[secondaryRoot] = primaryRoot;
                branch[primaryRoot] += branch[secondaryRoot];
            }
        }
    };
}
#endif //INC_005_UNION_FIND_UNIONFINDQUICKUNION2_H
