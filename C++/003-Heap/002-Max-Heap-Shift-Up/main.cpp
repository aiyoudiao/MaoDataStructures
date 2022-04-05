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
class MaxHeap { // parent(i)= i / 2;leftChild(i)= 2 * i;rightChild(i) = 2 * i + 1;
// 私有的数组
private:
    Item* data;
    int count;
    int capacity;
    void shiftUp (int k) {
        // k 等于 1 的节点已经是这棵树的根节点了
        while ( k > 1 && data[k / 2] < data[k]) {
            swap(data[k / 2], data[k]);
            k /= 2;
        }
    }

// 构造函数初始化数组
public:
    MaxHeap (int capacity) {
        // 数组的长度之所以加一，使用 数组索引要从1开始，所以会浪费掉一个索引为0 的空间
        data = new Item[capacity + 1];
        count = 0;
        // 获取容量
        this->capacity = capacity;
    }
    // 在析构函数中销毁这个数组
    ~MaxHeap() {
        delete [] data;
    }

    // 添加元素
    void insert (Item item) {
        // 防止数组越界
        assert(count + 1 <= capacity);

        data[count + 1] = item;
        count ++;
        // 上浮
        shiftUp(count);
    }

    // 实际存储元素个数
    int size () {
        return count;
    }

    // 堆中元素是否为空
    bool isEmpty () {
        return count == 0;
    }

public:
    // 以树状打印整个堆结构
    void testPrint(){

        // 我们的testPrint只能打印100个元素以内的堆的树状信息
        if( size() >= 100 ){
            cout<<"This print function can only work for less than 100 int";
            return;
        }

        // 我们的testPrint只能处理整数信息
        if( typeid(Item) != typeid(int) ){
            cout <<"This print function can only work for int item";
            return;
        }

        cout<<"The max heap size is: "<<size()<<endl;
        cout<<"Data in the max heap: ";
        for( int i = 1 ; i <= size() ; i ++ ){
            // 我们的testPrint要求堆中的所有整数在[0, 100)的范围内
            assert( data[i] >= 0 && data[i] < 100 );
            cout<<data[i]<<" ";
        }
        cout<<endl;
        cout<<endl;

        int n = size();
        int max_level = 0;
        int number_per_level = 1;
        while( n > 0 ) {
            max_level += 1;
            n -= number_per_level;
            number_per_level *= 2;
        }

        int max_level_number = int(pow(2, max_level-1));
        int cur_tree_max_level_number = max_level_number;
        int index = 1;
        for( int level = 0 ; level < max_level ; level ++ ){
            string line1 = string(max_level_number*3-1, ' ');

            int cur_level_number = min(count-int(pow(2,level))+1,int(pow(2,level)));
            bool isLeft = true;
            for( int index_cur_level = 0 ; index_cur_level < cur_level_number ; index ++ , index_cur_level ++ ){
                putNumberInLine( data[index] , line1 , index_cur_level , cur_tree_max_level_number*3-1 , isLeft );
                isLeft = !isLeft;
            }
            cout<<line1<<endl;

            if( level == max_level - 1 )
                break;

            string line2 = string(max_level_number*3-1, ' ');
            for( int index_cur_level = 0 ; index_cur_level < cur_level_number ; index_cur_level ++ )
                putBranchInLine( line2 , index_cur_level , cur_tree_max_level_number*3-1 );
            cout<<line2<<endl;

            cur_tree_max_level_number /= 2;
        }
    }

private:
    void putNumberInLine( int num, string &line, int index_cur_level, int cur_tree_width, bool isLeft){

        int sub_tree_width = (cur_tree_width - 1) / 2;
        int offset = index_cur_level * (cur_tree_width+1) + sub_tree_width;
        assert(offset + 1 < line.size());
        if( num >= 10 ) {
            line[offset + 0] = '0' + num / 10;
            line[offset + 1] = '0' + num % 10;
        }
        else{
            if( isLeft)
                line[offset + 0] = '0' + num;
            else
                line[offset + 1] = '0' + num;
        }
    }

    void putBranchInLine( string &line, int index_cur_level, int cur_tree_width){

        int sub_tree_width = (cur_tree_width - 1) / 2;
        int sub_sub_tree_width = (sub_tree_width - 1) / 2;
        int offset_left = index_cur_level * (cur_tree_width+1) + sub_sub_tree_width;
        assert( offset_left + 1 < line.size() );
        int offset_right = index_cur_level * (cur_tree_width+1) + sub_tree_width + 1 + sub_sub_tree_width;
        assert( offset_right < line.size() );

        line[offset_left + 1] = '/';
        line[offset_right + 0] = '\\';
    }
};

int main () {
    MaxHeap<int> maxHeap = MaxHeap<int>(100);
    cout << maxHeap.size() << endl;

    srand(time(NULL));
    for (int i = 0; i < 15; ++i)
        maxHeap.insert(rand() % 100);

    maxHeap.testPrint();
    return  0;
}