#include <iostream>
#include <ctime>
#include <vector>

#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"
#include "Components.h"

using namespace std;

int main() {

    string filename = "../004-DFS-and-Components/testG1.txt";

    // 初始化 稀疏图
    SparseGraph g1(13, false);
    // 初始化 读取图的实例，并且传入 稀疏图的实例，还有设计好的图文件
    ReadGraph<SparseGraph> readGraph1(g1, filename);
    Component<SparseGraph> component1(g1);
    cout << filename << " ---> Component Count：" << component1.count() << endl;
//    g1.show();
    cout << endl;

    string filename2 = "../004-DFS-and-Components/testG2.txt";
    // 初始化 稀疏图
    SparseGraph g2(6, false);
    // 初始化 读取图的实例，并且传入 稀疏图的实例，还有设计好的图文件
    ReadGraph<SparseGraph> readGraph2(g2, filename2);
    Component<SparseGraph> component2(g2);
    cout << filename2 << " ---> Component Count：" << component2.count() << endl;
//    g2.show();
    cout << endl;

    cout << "Hello, World!" << endl;
    return 0;
}