//
// Created by LENOVO on 2018/12/4.
//
#ifndef INC_005_UNION_FIND_UNIONFINDQUCIKFIND_H
#define INC_005_UNION_FIND_UNIONFINDQUCIKFIND_H

#include <cassert>

namespace UnionFindQuickFind {

class UnionFind1 {

    private:
        int* id; // 存储节点的指向
        int count; // 节点的个数

    public:
        UnionFind1 (int n) {
            count = n;

            // 初始化，默认每一个节点都指向自身
            id = new int[n];
            for (int i = 0; i < n; ++i)
                id[i] = i;
        }

        ~UnionFind1() {
            delete [] id;
        }

        // 查找过程, 查找节点index所指向的节点
        int find (int index) {
            assert(index >= 0 && index < count);

            return id[index];
        }

        // 查看节点primary和节点secondray是否同指一个根节点
        // O(1)复杂度
        bool isConnected (int primary, int secondray) {
            int primaryId = find(primary);
            int secondaryId = find(secondray);

            return primaryId == secondaryId;
        }

        // 合并节点primary和节点secondray所属的树
        // O(n) 复杂度
        void unionElements (int primary, int secondray) {
            int primaryId = find(primary);
            int secondaryId = find(secondray);

            if (primaryId == secondaryId)
                return;

            for (int i = 0; i < count; ++i)
                if (id[i] == primaryId)
                    id[i] == secondaryId; // i 这个节点 指向 secondary这个节点
        }
    };
}
#endif //INC_005_UNION_FIND_UNIONFINDQUCIKFIND_H
