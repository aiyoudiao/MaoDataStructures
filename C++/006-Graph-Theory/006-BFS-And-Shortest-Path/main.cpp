#include <iostream>
// 稀疏图
#include "SparseGraph.h"
// 稠密图
#include "DenseGraph.h"
// 读取图
#include "ReadGraph.h"
// 求图中连通分量
#include "Components.h"
// 寻找一个点的路径
#include "Path.h"
// 寻找一个点的最短路径
#include "ShortestPath.h"

using namespace std;

int main() {

    string filename = "../006-BFS-And-Shortest-Path/testG.txt";
    // 初始化 稀疏图
    SparseGraph g(7, false);
    // 初始化 读取图的实例，并且传入 稀疏图的实例，还有设计好的图文件
    ReadGraph<SparseGraph> readGraph(g, filename);
    Component<SparseGraph> component(g);
    cout << filename << " ---> Component Count：" << component.count() << endl;
    g.show();
    cout << endl;

    Path<SparseGraph> path(g, 0);
    cout << "DFS : ";
    path.showPath(6);

    ShortestPath<SparseGraph> shortestPath1(g, 0);
    cout << "BFS : ";
    shortestPath1.showPath(6);

    cout << "Hello, World!" << endl;
    return 0;
}