#include <iostream>
#include <ctime>
#include <vector>

#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"

using namespace std;

void main1 () {

//    // c++ 迭代器
//    vector<int> arr({1, 2, 3, 4, 5});
//    vector<int>::iterator iter;
//
//    for (iter = arr.begin(); iter != arr.end(); iter ++)
//        cout<<*iter<<endl;

    int N = 20; // 20 个节点
    int M = 100; // 100 条边
    int* NArr = new int[M]; // 生成同一份测试数据
    int* MArr = new int[M]; // 生成同一份测试数据

    srand(time(NULL));

    // 生成一个 有20个节点 100条边组成的图
    // Sparse Graph // 稀疏图-无向图
    cout << endl << "Sparse Graph 稀疏图-无向图" << endl;
    SparseGraph g1(N, false);
    for (int i = 0; i < M; ++i) {
        int a = rand() % N;
        int b = rand() % N;
        NArr[i] = a;
        MArr[i] = b;
        g1.addEdge(a, b);
    }

    // 打印整张图
    // 时间复杂度是O(E) 有多少个边就遍历了多少次
    for (int v = 0; v < N; ++v) {
        cout << v << " : ";
        // 生成g1这张图对于v这个节点相应的邻边的迭代器
        SparseGraph::adjIterator adj(g1, v);
        for (int w = adj.begin(); !adj.end(); w = adj.next())
            cout << w << " ";
        cout << endl;
    }

    // 生成一个 有20个节点 100条边组成的图
    // Dense Graph // 稠密图-无向图
    cout << endl << "Dense Graph 稠密图-无向图" << endl;
    DenseGraph g2(N, false);
    for (int i = 0; i < M; ++i) {
//        int a = rand() % N;
//        int b = rand() % N;
        int a = NArr[i];
        int b = MArr[i];
        g2.addEdge(a, b);
    }

    // 打印整张图
    // 时间复杂度是O(V^2) 在迭代器里面也将所有的顶点都遍历了一遍，
    // 再加上外面的一次遍历，所以就是两重循环O(V^2)
    for (int v = 0; v < N; ++v) {
        cout << v << " : ";
        // 生成g2这张图对于v这个节点相应的邻边的迭代器
        DenseGraph::adjIterator adj(g2, v);
        for (int w = adj.begin(); !adj.end(); w = adj.next())
            cout << w << " ";
        cout << endl;
    }

    delete [] NArr;
    delete [] MArr;
}

int main() {

    string filename = "../003-Read-Graph/testG1.txt";

    // 初始化 稀疏图
    SparseGraph g1(13, false);
    // 初始化 读取图的实例，并且传入 稀疏图的实例，还有设计好的图文件
    ReadGraph<SparseGraph> readGraph1(g1, filename);
    g1.show();
    cout << endl;

    // 初始化 稠密图
    DenseGraph g2(13, false);
    // 初始化 读取图的实例，并且传入 稠密图的实例，还有设计好的图文件
    ReadGraph<DenseGraph> readGraph2(g2, filename);
    g2.show();
    cout << endl;

    cout << "Hello, World!" << endl;
    return 0;
}