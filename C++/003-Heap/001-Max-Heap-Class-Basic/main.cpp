//
// Created by LENOVO on 2018/12/2.
//
#include <iostream>
#include <algorithm>
#include <string>
#include <ctime>
#include <cmath>
#include <cassert>

using namespace std;

template <typename Item>
class MaxHeap {
// 私有的数组
private:
    Item* data;
    int count;

// 构造函数初始化数组
public:
    MaxHeap (int capacity) {
        data = new Item[capacity + 1];
        count = 0;
    }
    // 在析构函数中销毁这个数组
    ~MaxHeap() {
        delete [] data;
    }

    // 实际存储元素个数
    int size () {
        return count;
    }

    // 堆中元素是否为空
    bool isEmpty () {
        return count == 0;
    }
};

int main () {
    MaxHeap<int> maxHeap = MaxHeap<int>(100);
    cout << maxHeap.size() << endl;

    return  0;
}