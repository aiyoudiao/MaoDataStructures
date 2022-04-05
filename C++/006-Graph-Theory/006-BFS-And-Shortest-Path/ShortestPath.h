//
// Created by LENOVO on 2018/12/6.
//

#ifndef INC_006_GRAPH_THEORY_SHORTESTPATH_H
#define INC_006_GRAPH_THEORY_SHORTESTPATH_H
#include <iostream>
#include <cassert>
#include <vector>
#include <stack>
#include <queue>

using namespace std;

template <typename Graph>
class ShortestPath {
private:
    Graph &G;
    bool *visited; // 是否被访问过
    int s; // 从一个点s 到任意一个其它点的路径
    int *from; // 每访问一个节点都要进行存储一下。根据from这个数组就可以倒推出亮点之间相应的路径。
    int *ord; // 在这个数组中记录从s到每一个节点具体的最短距离是多少

public:
    ShortestPath (Graph &graph, int s):G(graph) {
        // 算法初始化
        assert(s >= 0 && s < graph.V());

        visited = new bool[graph.V()]; // 有多少个节点就开多少个空间
        from = new int[graph.V()];
        ord = new int[graph.V()];

        // 初始的时候每一个节点都没有被访问过
        for (int i = 0; i < graph.V(); i++) {
            visited[i] = false;
            from[i] = -1;
            ord[i] = -1;
        }
        this->s = s;

        queue<int> q;

        // 无向图的最短路径算法
        q.push(s);
        visited[s] = true;
        ord[s] = 0;
        while ( !q.empty()) {

            int v = q.front();
            q.pop();

            // 找到图中v这个节点所有相邻的元素
            typename Graph::adjIterator adj (G, v);
            for (int i = adj.begin(); !adj.end(); i = adj.next())
                if (!visited[i]) {
                    q.push(i);
                    visited[i] = true;
                    from[i] = v;
                    ord[i] = ord[v] + 1; // 从他过来的这个节点相应的距离 + 1
                }
        }
    }

    ~ShortestPath () {
        delete [] visited;
        delete [] from;
        delete [] ord;
    }

    // s -> w 之间是否有路
    bool hasPath (int w) {
        // 检查越界情况
        assert(w >= 0 && w < G.V());

        // 直接返回visited是否为true就好了，
        // 如果为true说明在递归遍历s到所有的点的过程中访问了这个w，
        // 那么自然是相连接的。
        return visited[w];
    }

    // s -> w 具体的路径， 将它存到一个 vec的向量中
    void path (int w, vector<int> &vec) {

        // 检查越界情况
        assert(w >= 0 && w < G.V());

        // 由于是一个倒着推的过程，
        // 所以可以把倒推的这些节点放入一个stack中，
        // 之后再逐渐的在这个stack中取回到vec中
        stack<int> st;

        int p = w;
        // 这个过程从w开始往回推一步一步倒着找到所有的节点
        // 直到源节点，因为从来没有给源节点赋过值，
        // 所以源节点的from肯定是-1，
        // 这样一来 这个路径就以倒序的方式存到了from中
        while (p != -1) {
            st.push(p);
            p = from[p];
        }

        // 下面要做的就是
        // 把路径从stack中取出来
        vec.clear();
        while (!st.empty()) {
            // 获取栈顶的元素，然后再将栈顶的元素扔出去
            // 这样一来就将路径以正序的方式存到了向量里
            vec.push_back((int &&) st.top());
            st.pop();
        }
    }

    // 打印 s -> w 的路径
    void showPath (int w) {

        // 检查越界情况
        assert(w >= 0 && w < G.V());

        vector<int> vec;
        path(w, vec);

        for (int i = 0; i < vec.size(); i ++) {
            cout << vec[i];
            if (i == vec.size() - 1)
                cout << endl;
            else
                cout << " -> ";
        }
    }

    // 查询 s -> w 最短路径的长度
    int length (int w) {
        assert(w >= 0 && w < G.V());
        return ord[w];
    }
};
#endif //INC_006_GRAPH_THEORY_SHORTESTPATH_H
