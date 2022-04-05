cmake_minimum_required(VERSION 3.6)
project(003_Heap)

set(CMAKE_CXX_STANDARD 11)

# 参考模板， 如果新增加程序 就按照这种方式新建一个 变量 并且新添加一个应用即可
#set(SOURCE_FILES main.cpp)
#add_executable(003_Heap ${SOURCE_FILES})

# 001-Max-Heap-Class-Basic
set(SOURCE_FILES1  001-Max-Heap-Class-Basic/main.cpp)
add_executable(001-Max-Heap-Class-Basic ${SOURCE_FILES1})

# 002-Max-Heap-Shift-Up
set(SOURCE_FILES2  002-Max-Heap-Shift-Up/main.cpp)
add_executable(002-Max-Heap-Shift-Up ${SOURCE_FILES2})

# 003-Max-Heap-Shift-Down
set(SOURCE_FILES3  003-Max-Heap-Shift-Down/main.cpp)
add_executable(003-Max-Heap-Shift-Down ${SOURCE_FILES3})

# 004-Heap-Sort-Basic-And-Heapify
set(SOURCE_FILES4 ./004-Heap-Sort-Basic-And-Heapify/main.cpp 004-Heap-Sort-Basic-And-Heapify/SortTestHelper.h 004-Heap-Sort-Basic-And-Heapify/SelectionSort.h 004-Heap-Sort-Basic-And-Heapify/InsertionSort.h 004-Heap-Sort-Basic-And-Heapify/MergeSort.h 004-Heap-Sort-Basic-And-Heapify/MergeSortBottomUp.h 004-Heap-Sort-Basic-And-Heapify/QuickSort.h 004-Heap-Sort-Basic-And-Heapify/QucikSortTwo.h 004-Heap-Sort-Basic-And-Heapify/QuickSort3Ways.h 004-Heap-Sort-Basic-And-Heapify/MaxHeap.h)
add_executable(004-Heap-Sort-Basic-And-Heapify ${SOURCE_FILES4})

# 005-Heap-Sort-Advance
set(SOURCE_FILES5 ./005-Heap-Sort-Advance/main.cpp 005-Heap-Sort-Advance/SortTestHelper.h 005-Heap-Sort-Advance/SelectionSort.h 005-Heap-Sort-Advance/InsertionSort.h 005-Heap-Sort-Advance/MergeSort.h 005-Heap-Sort-Advance/MergeSortBottomUp.h 005-Heap-Sort-Advance/QuickSort.h 005-Heap-Sort-Advance/QucikSortTwo.h 005-Heap-Sort-Advance/QuickSort3Ways.h 005-Heap-Sort-Advance/MaxHeap.h)
add_executable(005-Heap-Sort-Advance ${SOURCE_FILES5})

# 006-Heap-Sort-In-Situ
set(SOURCE_FILES6 ./006-Heap-Sort-In-Situ/main.cpp 006-Heap-Sort-In-Situ/SortTestHelper.h 006-Heap-Sort-In-Situ/SelectionSort.h 006-Heap-Sort-In-Situ/InsertionSort.h 006-Heap-Sort-In-Situ/MergeSort.h 006-Heap-Sort-In-Situ/MergeSortBottomUp.h 006-Heap-Sort-In-Situ/QuickSort.h 006-Heap-Sort-In-Situ/QucikSortTwo.h 006-Heap-Sort-In-Situ/QuickSort3Ways.h 006-Heap-Sort-In-Situ/MaxHeap.h 006-Heap-Sort-In-Situ/HeapSort.h)
add_executable(006-Heap-Sort-In-Situ ${SOURCE_FILES6})

# 007-Index-Heap-Basic
set(SOURCE_FILES7 ./007-Index-Heap-Basic/main.cpp 007-Index-Heap-Basic/SortTestHelper.h 007-Index-Heap-Basic/SelectionSort.h 007-Index-Heap-Basic/InsertionSort.h 007-Index-Heap-Basic/MergeSort.h 007-Index-Heap-Basic/MergeSortBottomUp.h 007-Index-Heap-Basic/QuickSort.h 007-Index-Heap-Basic/QucikSortTwo.h 007-Index-Heap-Basic/QuickSort3Ways.h 007-Index-Heap-Basic/MaxHeap.h 007-Index-Heap-Basic/HeapSort.h)
add_executable(007-Index-Heap-Basic ${SOURCE_FILES7})

# 008-Index-Heap-Advance
set(SOURCE_FILES8 ./008-Index-Heap-Advance/main.cpp 008-Index-Heap-Advance/SortTestHelper.h 008-Index-Heap-Advance/SelectionSort.h 008-Index-Heap-Advance/InsertionSort.h 008-Index-Heap-Advance/MergeSort.h 008-Index-Heap-Advance/MergeSortBottomUp.h 008-Index-Heap-Advance/QuickSort.h 008-Index-Heap-Advance/QucikSortTwo.h 008-Index-Heap-Advance/QuickSort3Ways.h 008-Index-Heap-Advance/MaxHeap.h 008-Index-Heap-Advance/HeapSort.h)
add_executable(008-Index-Heap-Advance ${SOURCE_FILES8})