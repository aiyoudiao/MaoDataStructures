//
// Created by LENOVO on 2018/12/4.
//
#ifndef INC_006_GRAPH_THEORY_SPARSEGRAPH_H
#define INC_006_GRAPH_THEORY_SPARSEGRAPH_H

#include <ostream>
#include <vector>
#include <cassert>

using namespace std;

// 稀疏图 - 邻接表
class SparseGraph {

private:
    int n, m;
    bool directed;
    vector<vector<int>> g; // 和i这个顶点相邻的所有的顶点编号，使用int来表示

public:
    SparseGraph (int n, bool directed) {
        this->n = n;
        this->m = 0;
        this->directed = directed;

        // 在这个实现中使用向量的方式来实现是为了简便
        // 其实也可以使用链表的方式来实现，
        // 使用链表的方式来实现，它的优点是在删除一个元素的时候更加方便
        for (int i = 0; i < n; ++i)
            g.push_back(vector<int>()); // 每一个顶点都是一个空的向量
    }

    ~SparseGraph () {}

    // 添加边
    void addEdge (int v, int w) {

        // 检查是否越界
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        // 表示 v 和 w 相连
        g[v].push_back(w);

        // 如果是一个无向图的话，相应的就会有一个反向的连接操作
        if (v != w && !directed)
            g[w].push_back(v);

        m ++;

        // 自环边的问题，如果v和w是一致的话，只需要运行一次push_back，
        // 所以对于上面的判断也需要加额外的条件，
        // v != w 同时也是 无向图 才会去进行相应的反向连接的操作，
        // 使用这样的一种方式就很好的处理了自环边这样的一个问题。
        // 但是还存在平行边这样的一个问题，
        // 平行边这样的一个问题就是邻接表的一个缺点，
        // 使用hasEdge这个函数来表达两个点之间是否存在这条边时，
        // 在最差的情况下是O(n) 的这个级别的而不是O(1)这个界别的，
        // 如果每一次都在添加边的时候判断一下是否存在这条边，
        // 那么添加边的操作就达到了O(n)的时间复杂度。
        // 所以使用邻接表取消掉平行的边相应的成本就会比较高，
        // 也正因为如此，在通常的情况下实现一个邻接表的时候，
        // 在 addEdge这个函数中先不去管平行边这个问题，
        // 也就是允许它有平行的边，
        // 通常情况下真的需要确认这个图中没有平行的边，
        // 做的事情是把整张图中所有的边都加进来以后再进行一次综合的处理，
        // 从而将平行的边给删除掉。
    }

    // 是否存在这条边
    // 使用O(n) 的复杂度来判断 v和w之间是否有边
    bool hasEdge (int v, int w) {
        // 检查是否越界
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        for (int i = 0; i < g[v].size(); ++i)
            if (g[v][i] == w)
                return true;
        return false;
    }

    // 返回顶点数
    int V() { return n;}
    // 返回边数
    int E() { return m;}

    // 显示图中的信息，将图以邻接表的形式打印出来
    void show () {
        for (int i = 0; i < n; ++i) {
            cout << "vertex " << i << ":\t";
            for (int j = 0; j < g[i].size(); ++j)
                cout << g[i][j] << "\t";
            cout << endl;
        }
    }

    // 相邻边的迭代器的类
    class adjIterator {
    private:
        SparseGraph &G; // 存储图的引用
        int v; // 存储这个相邻的节点
        int index; // 用一个变量来指示当前迭代到哪里了
    public:
        // 传入一张图相应的引用，传入一张图的某一个顶点
        // 也就是迭代哪张图，迭代这张图中哪个顶点相邻的边
        // 由于这个G是一个引用，所以需要使用构造列表的方式初始化他
        adjIterator (SparseGraph &graph, int v) : G(graph){
            this->v = v;
            this->index = 0; // 初始化的时候index 为 0
        }

        // 要迭代的第一个元素
        int begin () { // 这样就找到了v这个节点在这个图中的第一个相邻的节点，如果没有找到就返回-1
            index = 0; // 用户可能多次调用begin，那么就需要每次将index设置为0

            // 如果 g 中 分量v的size不为0 就返回g[v][0]，也就是相应的第0个元素
            if (G.g[v].size() != 0)
                return G.g[v][0];
            return -1;
        }

        // 从当前迭代的这个元素位置向下偏移找下一个元素
        int next () {
            index ++;

            // 如果小于就说明没有越界，那么直接返回即可
            if (index < G.g[v].size())
                return G.g[v][index];
            // 否则返回 - 1
            return -1;
        }

        // 查看迭代终止没有
        bool end () {
            // 当前的index 是否大于等于 g[v.size();
            // 如果大于等于就说明越界了，那就说明迭代完成了。
            return index >= G.g[v].size();
        }
    };
};
#endif //INC_006_GRAPH_THEORY_SPARSEGRAPH_H