//
// Created by LENOVO on 2018/12/5.
//
#ifndef INC_006_GRAPH_THEORY_COMPONENTS_H
#define INC_006_GRAPH_THEORY_COMPONENTS_H

#include <iostream>
#include <cassert>

using namespace std;

template <typename Graph>
class Component {
private:
    Graph &G;
    bool *visited; // 是否被访问过
    int ccount; // 有多少个连通分量
    int *id; // 查看两个节点之间是否是相连的

    // 深度优先遍历
    void dfs (int v) {
        // 这个节点已经被访问过了
        visited[v] = true;
        // 初始化 id， 每一部分的根都是ccount，因为同一个部分的ccount值是一样的。
        id[v] = ccount;


        // 显示 adjIterator是 Graph中的一个类型
        typename Graph::adjIterator adj(G, v);
        for (int i = adj.begin(); !adj.end(); i = adj.next()) {
            if (!visited[i]) // 相邻的这个节点有没有被访问过
                dfs(i); // 如果没有被访问过就去访问它
        }
        // 这个整体的过程其实和树的过程是非常的相像的，
        // 只不过在图中需要使用的visited去记录当前这个节点之间有没有被访问过
    }

public:
    Component (Graph &graph): G(graph) {
        visited = new bool[G.V()]; // 有多少个节点就开多少个空间
        ccount = 0;
        id = new int[G.V()];

        // 初始的时候每一个节点都没有被访问过
        for (int i = 0; i < G.V(); ++i) {
            visited[i] = false;
            id[i] = -1;
        }

        for (int j = 0; j < G.V(); ++j) {
            // 如果这个节点没有被访问过
            if (!visited[j]) {
                // 那么就进行一次深度的优先遍历
                // 将i与i相连接的所有节点全部都遍历一遍，
                // 没遍历到的节点一定在另外一个连通分量中
                dfs(j);
                ccount++; // 连通分量++
            }
        }
    }

    ~Component () {
        delete [] visited;
        delete [] id;
    }

    // 返回这个图的连通分量
    int count () {
        return  ccount;
    }

    // 使用并查集只能看两个节点是否相连，
    // 如果你要看这两个节点相连接的两个路径是怎样的，所以图论这样的算法的威力就显现出来了
    // 两个节点是否是连接的
    bool isConnected (int v, int w) {
        // 确认v 和 w 是否越界
        assert( v >= 0 && v < G.V() );
        assert( w >= 0 && w < G.V() );
        return id[v] == id[w];
    }
};
#endif //INC_006_GRAPH_THEORY_COMPONENTS_H