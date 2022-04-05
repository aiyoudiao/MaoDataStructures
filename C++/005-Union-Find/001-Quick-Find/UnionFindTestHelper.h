//
// Created by LENOVO on 2018/12/4.
//

#ifndef INC_005_UNION_FIND_UNIONFINDTESTHELPER_H
#define INC_005_UNION_FIND_UNIONFINDTESTHELPER_H

#include <iostream>
#include <ctime>
#include "UnionFindQucikFind.h"

using namespace std;

// 测试并查集的辅助函数
namespace UnionFindTestHelper{

    // 测试第一版本的并查集, 测试元素个数为n
    void testUnionFind1( int n ){

        srand( time(NULL) );
        UnionFindQuickFind::UnionFind1 uf = UnionFindQuickFind::UnionFind1(n);

        time_t startTime = clock();

        // 进行n次操作, 每次随机选择两个节点进行合并操作
        for( int i = 0 ; i < n ; i ++ ){
            int a = rand()%n;
            int b = rand()%n;
            uf.unionElements(a,b);
        }
        // 再进行n次操作, 每次随机选择两个节点, 查看这两个节点是否同指一个根节点
        for(int i = 0 ; i < n ; i ++ ){
            int a = rand()%n;
            int b = rand()%n;
            uf.isConnected(a,b);
        }
        time_t endTime = clock();

        // 打印输出对这2n个操作的耗时
        cout<<"UnionFind1: "<<2*n<<" openCount, time "<<double(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;
    }
}
#endif //INC_005_UNION_FIND_UNIONFINDTESTHELPER_H
