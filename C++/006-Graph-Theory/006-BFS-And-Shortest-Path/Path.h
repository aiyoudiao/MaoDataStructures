//
// Created by LENOVO on 2018/12/5.
//
#ifndef INC_006_GRAPH_THEORY_PATH_H
#define INC_006_GRAPH_THEORY_PATH_H
#include <iostream>
#include <cassert>
#include <vector>
#include <stack>

using namespace std;

template <typename Graph>
class Path {
private:
    Graph &G;
    bool *visited; // 是否被访问过
    int s; // 从一个点s 到任意一个其它点的路径
    int *from; // 每访问一个节点都要进行存储一下。根据from这个数组就可以倒推出亮点之间相应的路径。

    // 深度优先遍历
    void dfs (int v) {
        // 这个节点已经被访问过了
        visited[v] = true;


        // 显示 adjIterator是 Graph中的一个类型
        typename Graph::adjIterator adj(G, v);
        for (int i = adj.begin(); !adj.end(); i = adj.next()) {
            if (!visited[i]) {// 相邻的这个节点有没有被访问过
                from[i] = v;// 也就是说访问的这个i节点是从v这个节点过来的
                dfs(i); // 如果没有被访问过就去访问它
            }
        }
        // 这个整体的过程其实和树的过程是非常的相像的，
        // 只不过在图中需要使用的visited去记录当前这个节点之间有没有被访问过
    }

public:
    Path (Graph &graph, int s):G(graph) {
        // 算法初始化
        assert(s >= 0 && s < G.V());

        visited = new bool[G.V()]; // 有多少个节点就开多少个空间
        from = new int[G.V()];

        // 初始的时候每一个节点都没有被访问过
        for (int i = 0; i < G.V(); i++) {
            visited[i] = false;
            from[i] = -1;
        }
        this->s = s;

        // 寻路算法
        // 通过这个dfs过程就将和s相连接的所有点相应的from值给设置完成了
        dfs(s);
    }

    ~Path () {
        delete [] visited;
        delete [] from;
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

        assert(hasPath(w));

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
            vec.push_back(st.top());
            st.pop();
        }
    }

    // 打印 s -> w 的路径
    void showPath (int w) {

        assert(hasPath(w));

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
};
#endif //INC_006_GRAPH_THEORY_PATH_H
