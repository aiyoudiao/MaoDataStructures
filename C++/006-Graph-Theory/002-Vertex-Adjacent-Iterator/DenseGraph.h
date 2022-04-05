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

    // 相邻边的迭代器的类
    class adjIterator {
    private:
        DenseGraph &G; // 存储图的引用
        int v; // 存储这个相邻的节点
        int index; // 用一个变量来指示当前迭代到哪里了
    public:
        // 传入一张图相应的引用，传入一张图的某一个顶点
        // 也就是迭代哪张图，迭代这张图中哪个顶点相邻的边
        // 由于这个G是一个引用，所以需要使用构造列表的方式初始化他
        adjIterator (DenseGraph &graph, int v) : G(graph){
            this->v = v;
            this->index = -1; // 初始化的时候index 为 -1
        }

        // 在稠密图中应该遍历 v 所在的这一行中所有的元素
        // 如果这个元素是false就说明没有这个边，
        // 如果说是true的话，才有这一个边

        // 在begin的时候，这个index不见得是取0的，
        // 而应该去找 这一行中 第一个值为true的元素
       int begin () {
            index = -1;
            return next();
        }

        // next 这个函数做的事情，
        // 从当前的index开始去找之后第一个为true的那个元素
        // 首先在初始的时候index加一下1，之后进行这个循环，
        // 只要小于这个图中的顶点个数，每一次index ++，
        // 来看g相应的这个v这一行的index是否为true，
        // 一旦为true的话，当前的index就能返回回去，
        // 经过这重循环后没有找到一个为true的元素，
        // 那么就说明 所有的邻边都已经遍历完了，
        // 直接return -1 就好了。
        int next () {
            for (index += 1; index < G.V(); ++index)
                if (G.g[v][index])
                    return index;
            return -1;
        }

        // 通过查看index值是否大于等于顶点的个数，来确定这一行中所有的元素都遍历完了。
        bool end () {
            return index >= G.V();
        }
    };
};
#endif //INC_006_GRAPH_THEORY_DENSEGRAPH_H