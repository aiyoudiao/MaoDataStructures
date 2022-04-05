#include <iostream>
#include <algorithm>
#include <string>
// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

// 使用双引号的方式进行引用
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"
#include "MergeSortBottomUp.h"
#include "QuickSort.h"
#include "QucikSortTwo.h"
#include "QuickSort3Ways.h"
#include "HeapSort.h"

using namespace std;

// 索引堆
template <typename Item>
class IndexMaxHeap { // parent(i)= i / 2;leftChild(i)= 2 * i;rightChild(i) = 2 * i + 1;
// 私有的数组
private:
    Item* data;
    int* indexes;
    int count;
    int capacity;
    void shiftUp (int k) {
        int parentIndex = indexes[k / 2]; // 取出父亲节点的真正索引
        int currentIndex = indexes[k]; // 取出当前节点的真正索引
        // k 等于 1 的节点已经是这棵树的根节点了
        while ( k > 1 && data[parentIndex] < data[currentIndex]) {
            swap(data[parentIndex], data[currentIndex]);

            // 继续上浮
            k /= 2;
            // 获取父亲的索引和上浮后当前元素的索引
            parentIndex = indexes[k / 2];
            currentIndex = indexes[k];
        }
    }
    void shiftDown (int k ) {

        // (2 * k <= count) 至少要有左孩子，
        // 堆中节点是从左向右的方向排列的，堆是完全二叉树。
        while (2 * k <= count) {

            int max = 2 * k; // 默认最大值索引为 左孩子，左孩子 + 1就是右孩子
            // 查看右孩子是否存在 并且 左孩子值小于右孩子
            if (max + 1 <= count && data[indexes[max]] < data[indexes[max + 1]])
                max += 1; // 切换为右孩子
            // 当前k位置的元素大于 原节点的左右孩子中最大的元素的值
            // 循环可以结束了，因为当前位置就是合适的
            if (data[indexes[k]] >= data[indexes[max]])
                break;
            swap(indexes[k], indexes[max]);
            k = max;
        }
    }

// 构造函数初始化数组
public:
    IndexMaxHeap (int capacity) {
        // 数组的长度之所以加一，使用 数组索引要从1开始，所以会浪费掉一个索引为0 的空间
        data = new Item[capacity + 1];
        indexes = new int[capacity + 1];
        count = 0;
        // 获取容量
        this->capacity = capacity;
    }
    // 堆化的方法
    IndexMaxHeap (Item arr[], int n) {
        // 开辟空间设置容量
        data = new Item[n + 1];
        capacity = n;

        // 拷贝一份原数组
        for (int i = 0; i < n; ++i)
            data[i + 1] = arr[i];
        count = n;

        // 找到堆中最后一个非叶子节点，从底遍历到顶
        // 最后一个叶子节点的索引 的父亲节点就是 最后一个非叶子节点
        // count / 2；根节点索引为1；从后遍历到前
        for (int i = count / 2; i >= 1; i --)
            shiftDown(i);
    }
    // 在析构函数中销毁这个数组
    ~MaxHeap() {
        delete [] data;
        delete [] indexes;
    }
    // 传入的i对用户来说，是从0开始索引的，这是这个索引堆的索引是从 1 开始的，因为数组中的元素是从索引位置1开始存元素
    // 添加元素
    void insert (int i, Item item) {
        // 防止数组越界
        assert(count + 1 <= capacity);
        assert(i + 1 >= 1 && i + 1 <= capacity);

        i += 1;
        data[i] = item;
        indexes[count + 1] = i;
        count ++;
        // 上浮
        shiftUp(count);
    }

    // 取出最大值
    Item extractMax () {
        // 防止元素为空的情况
        assert(count > 0);

        int maxIndex = indexes[1]; // 取出堆顶节点的真正索引
        int lastIndex = indexes[count]; // 取出堆尾节点的真正索引

        Item item = data[maxIndex];

        // 交换最后一个记录  和 第一个记录的位置
        swap(indexes[maxIndex], indexes[lastIndex]);
        count --;

        // 下沉
        shiftDown(1);

        // 返回这个值
        return item;
    }

    // 取出最大元素的索引
    int extractMaxIndex () {
        // 防止元素为空的情况
        assert(count > 0);

        int maxIndex = indexes[1]; // 取出堆顶节点的真正索引
        int lastIndex = indexes[count]; // 取出堆尾节点的真正索引

        int item = maxIndex - 1; // 从1开始的索引转成从0开始的索引

        // 交换最后一个记录  和 第一个记录的位置
        swap(indexes[maxIndex], indexes[lastIndex]);
        count --;

        // 下沉
        shiftDown(1);

        // 返回这个值
        return item;
    }

    // 根据索引获取 堆中的数据
    Item getItem (int i) {
        return data[i + 1];
    }

    // 修改操作
    // 最差的情况下 这个时间复杂度是 n + logn，所以它是 O(n)级别的函数
    // 那么用户在外面进行n次操作，这个时间复杂度就是n^2级别的，所以需要优化它
    void change (int i, Item newItem) {
        // 因为堆中元素的索引是从1开始的，外界使用的时候认为堆中元素索引是从0开始的。
        i += 1;
        data[i] = newItem;

        // 找到indexes[j] = i, j表示data[i]在堆中的位置
        // 之后再shiftUp(j), 再shiftDown(j)
        for (int j = 0; j <= count; ++j) {
            if (indexes[j] == i) {
                shiftUp(j);
                shiftDown(j);
                return;
            }
        }
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

int main() {
    return 0;
}