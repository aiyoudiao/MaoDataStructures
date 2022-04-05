//
// Created by LENOVO on 2018/12/4.
//

#ifndef INC_005_UNION_FIND_UNIONFINDQUICKUNION1_H
#define INC_005_UNION_FIND_UNIONFINDQUICKUNION1_H

#include <cassert>

namespace UnionFindQuickUnion1 {

    class UnionFind2 {

    private:
        int* forest; // 存储节点的指向
        int count; // 节点的个数

    public:
        UnionFind2 (int n) {
            count = n;

            // 初始化，默认每一个节点都指向自身
            forest = new int[n];
            for (int i = 0; i < n; ++i)
                forest[i] = i;
        }

        ~UnionFind2() {
            delete [] forest;
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

            // primary 这个节点 指向 secondary这个节点
            forest[primaryRoot] = secondaryRoot;
        }
    };
}
#endif //INC_005_UNION_FIND_UNIONFINDQUICKUNION1_H
