//
// Created by LENOVO on 2018/12/4.
//
#ifndef INC_006_GRAPH_THEORY_DENSEGRAPH_H
#define INC_006_GRAPH_THEORY_DENSEGRAPH_H

#include <ostream>
#include <vector>
#include <cassert>

using namespace std;

// 稠密图 - 邻接矩阵
class DenseGraph {
private:
    int n, m; // 存储相应的点数和边数
    bool directed; // 这个图是一个有向图还是无向图
    vector<vector<bool>> g; // 二维矩阵，采用vector套vector的形式

public:
    DenseGraph(int n, bool directed) {
        this->n = n; // 图的定点数 n 就传入的 n
        this->m = 0; // 图的边数默认为0，后续设计一个添加边的方法，逐渐的将这个边添加上
        this->directed = directed; // 这个图是否是有向图

        // 创建一个n * n 名字叫做g的矩阵，
        // 并且在初始化的时候 这个n * n的矩阵里所有的元素都是false
        for (int i = 0; i < n; ++i)
            g.push_back( vector<bool> (n, false));
    }

    ~DenseGraph() {
        // 没有new任何空间，所以不需要进行相应的delete操作。
    }

    // 添加边 传入 v 和 w 这两个顶点相应的索引
    // 表示 顶点 v 和 w 之间建立一条边
    // 使用addEdge的时候已经不自觉的将平行边给去掉了
    // 因为在g[v][w]已经为true的话就直接return;
    // 事实上这也是使用邻接矩阵的一个优势。
    // 可以非常方便的来处理平行边的问题
    void addEdge (int v, int w) {

        // 检查是否越界
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        // 如果已经有这条边
        if (hasEdge(v, w))
            return;

        // 表示从 v 到 w 有一条边
        g[v][w] = true;

        // 如果是一个有向图，那么执行上面的一句即可，
        // 如果是一个无向图，那么还需要执行 反向添加一条边。
        if (!directed)
            g[w][v] = true;

        m ++; // 边数加1
    }

    // 是否存在这条边
    // 使用O(1) 的复杂度来判断 v和w之间是否有边
    bool hasEdge (int v, int w) {
        // 检查是否越界
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);
        return g[v][w];
    }

    // 多少个顶点
    int V () { return n;}
    // 多少个边
    int E () { return m;}

};

#endif //INC_006_GRAPH_THEORY_DENSEGRAPH_H
