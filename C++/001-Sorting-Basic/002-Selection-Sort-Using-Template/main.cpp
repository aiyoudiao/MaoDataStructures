#include <iostream>
#include <algorithm>
#include <string>
// 使用双引号的方式进行引用
#include "Student.h"

// 老的标准 要使用这个swap方法，
// 那么可以引入algorithm这个标准库

using namespace std;
template<typename T>
// 模板函数 也就是泛型的定义方式

// 选择排序
void selectionSort (T arr[], int n) {
    for (int i = 0; i < n; i ++) {

        // 寻找[i, n] 区间里的最小值
        int minIndex = i;
        for (int j = i + 1; j < n; j ++)
            if (arr[j] < arr[minIndex])
                minIndex = j;

        // 交换数组中两个位置的变量
        // swap是c++ 标准库中内置的函数
        // 这个函数在 c++11标准中 std这个空间中
        swap(arr[i], arr[minIndex]);
    }
}
int main() {
    int a[10] = {10,9,8,7,6,5,4,3,2,1};
    selectionSort(a, 10);
    for (int i = 0; i < 10; i++)
        cout<<a[i]<<" ";
    cout<<endl;

    float b[4] = {1.1, 3.3, 4.4, 2.2};
    selectionSort(b, 4);
    for (int j = 0; j < 4; ++j)
        cout<<b[j]<<" ";
    cout<<endl;

    string c[4] = {"D", "A", "C", "B"};
    selectionSort(c, 4);
    for (int k = 0; k < 4; ++k)
        cout<<c[k]<<" ";
    cout<<endl;

    Student d[4] = {{"D", 90},{"C", 100},{"B", 95},{"A", 95}};
    selectionSort(d, 4);
    for (int l = 0; l < 4; ++l)
        cout<<d[l];
    cout<<endl;

    return 0;
}