#include <iostream>

#include "UnionFindTestHelper.h"

using namespace std;

int main() {
    // 使用100000的数据规模
    int n = 100000;

    // 虽然isConnected只需要O(1)的时间, 但由于union操作需要O(n)的时间
    // 总体测试过程的算法复杂度是O(n^2)的
//    UnionFindTestHelper::testUnionFind1(n);

    // 其时间性能是O(n*h)的, h为并查集表达的树的最大高度
    // 这里严格来讲, h和logn没有关系, 可以简单先这么理解
    // 后续会对h进行优化, 总体而言, 这个h是远小于n的
    // 第二个版本好于第一个版本, n越大越明显:)
    UnionFindTestHelper::testUnionFind2(n);

    // 其时间性能依然是O(n*h)的, h为并查集表达的树的最大高度
    // 但由于它能更高概率的保证树的平衡, 所以性能更优
    UnionFindTestHelper::testUnionFind3(n);

    std::cout << "test complated." << std::endl;

    // UnionFind2: 200000 openCount, time 17.328 s.
    // UnionFind3: 200000 openCount, time 0.015 s.
    //  test complated.
    return 0;
}