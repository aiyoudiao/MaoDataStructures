//
// Created by liuyubobobo on 9/22/16.
//
#ifndef INC_04_READ_GRAPH_READGRAPH_H
#define INC_04_READ_GRAPH_READGRAPH_H

#include <iostream>
#include <string>
#include <fstream>
#include <sstream>
#include <cassert>

using namespace std;

// 读取图算法
template <typename Graph>
class ReadGraph{

    // 这个函数从算法的角度逻辑的角度来看非常的简单
    // 这样就写出了一个同时作用在稀疏图和稠密图上的这样的一个简单的算法
public:
    // 从文件filename中读取图的信息, 存储进图graph中
    ReadGraph(Graph &graph, const string &filename){

        ifstream file(filename);
        string line;
        int V, E;

        // 成功读取文件
        assert( file.is_open() );

        // 第一行读取图中的节点个数和边的个数，并且把他放入lien这个变量中
        // 同时要确认它是读取成功的。
        assert( getline(file, line) );
        // 将line这个字符串放入一个字符串流里
        stringstream ss(line);
        // 将ss 解析出V 和 E 这两个整型变量
        // 这样就处理了文件的第一行，将点数和边数都读取了进来
        ss>>V>>E;

        // 确认一下 这个 点数和 实际的这个图它相应的点数是一致的
        assert( V == graph.V() );

        // 读取每一条边的信息  循环E那么多次， 每次都读取问文件中的一行
        for( int i = 0 ; i < E ; i ++ ){

            // 读取一行放入line里，然后再放入字符串流里
            assert( getline(file, line) );
            stringstream ss(line);

            // 声明两个变量，将ss中两个整型放入a和b中
            int a,b;
            ss>>a>>b;
            // 确认a 和 b 是否越界
            assert( a >= 0 && a < V );
            assert( b >= 0 && b < V );
            // 开始添加两点之间的边
            graph.addEdge( a , b );
        }
    }
};
#endif //INC_04_READ_GRAPH_READGRAPH_H