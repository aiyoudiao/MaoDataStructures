cmake_minimum_required(VERSION 3.6)
project(002_Sorting_Advance)

set(CMAKE_CXX_STANDARD 11)

# 参考模板， 如果新增加程序 就按照这种方式新建一个 变量 并且新添加一个应用即可
#set(SOURCE_FILES main.cpp)
#add_executable(002_Sorting_Advance ${SOURCE_FILES})

# 001-Merge-Sort
set(SOURCE_FILES1 ./001-Merge-Sort/main.cpp 001-Merge-Sort/SortTestHelper.h 001-Merge-Sort/SelectionSort.h 001-Merge-Sort/InsertionSort.h)
add_executable(001-Merge-Sort ${SOURCE_FILES1})

# 002-Merge-Sort-Advance
set(SOURCE_FILES2 ./002-Merge-Sort-Advance/main.cpp 002-Merge-Sort-Advance/SortTestHelper.h 002-Merge-Sort-Advance/SelectionSort.h 002-Merge-Sort-Advance/InsertionSort.h)
add_executable(002-Merge-Sort-Advance ${SOURCE_FILES2})

# 003-Merge-Sort-Bottom-Up
set(SOURCE_FILES3 ./003-Merge-Sort-Bottom-Up/main.cpp 003-Merge-Sort-Bottom-Up/SortTestHelper.h 003-Merge-Sort-Bottom-Up/SelectionSort.h 003-Merge-Sort-Bottom-Up/InsertionSort.h 003-Merge-Sort-Bottom-Up/MergeSort.h)
add_executable(003-Merge-Sort-Bottom-Up ${SOURCE_FILES3})

# 004-Quick-Sort
set(SOURCE_FILES4 ./004-Quick-Sort/main.cpp 004-Quick-Sort/SortTestHelper.h 004-Quick-Sort/SelectionSort.h 004-Quick-Sort/InsertionSort.h 004-Quick-Sort/MergeSort.h 004-Quick-Sort/MergeSortBottomUp.h)
add_executable(004-Quick-Sort ${SOURCE_FILES4})

# 005-Quick-Sort-Deal-With-Nearly-Ordered-Array
set(SOURCE_FILES5 ./005-Quick-Sort-Deal-With-Nearly-Ordered-Array/main.cpp 005-Quick-Sort-Deal-With-Nearly-Ordered-Array/SortTestHelper.h 005-Quick-Sort-Deal-With-Nearly-Ordered-Array/SelectionSort.h 005-Quick-Sort-Deal-With-Nearly-Ordered-Array/InsertionSort.h 005-Quick-Sort-Deal-With-Nearly-Ordered-Array/MergeSort.h 005-Quick-Sort-Deal-With-Nearly-Ordered-Array/MergeSortBottomUp.h)
add_executable(005-Quick-Sort-Deal-With-Nearly-Ordered-Array ${SOURCE_FILES5})

# 006-Quick-Sort-Deal-With-Identcal-Keys
set(SOURCE_FILES6 ./006-Quick-Sort-Deal-With-Identcal-Keys/main.cpp 006-Quick-Sort-Deal-With-Identcal-Keys/SortTestHelper.h 006-Quick-Sort-Deal-With-Identcal-Keys/SelectionSort.h 006-Quick-Sort-Deal-With-Identcal-Keys/InsertionSort.h 006-Quick-Sort-Deal-With-Identcal-Keys/MergeSort.h 006-Quick-Sort-Deal-With-Identcal-Keys/MergeSortBottomUp.h 006-Quick-Sort-Deal-With-Identcal-Keys/QuickSort.h)
add_executable(006-Quick-Sort-Deal-With-Identcal-Keys ${SOURCE_FILES6})

# 007-Quick-Sort-Three-Ways
set(SOURCE_FILES7 ./007-Quick-Sort-Three-Ways/main.cpp 007-Quick-Sort-Three-Ways/SortTestHelper.h 007-Quick-Sort-Three-Ways/SelectionSort.h 007-Quick-Sort-Three-Ways/InsertionSort.h 007-Quick-Sort-Three-Ways/MergeSort.h 007-Quick-Sort-Three-Ways/MergeSortBottomUp.h 007-Quick-Sort-Three-Ways/QuickSort.h 007-Quick-Sort-Three-Ways/QucikSortTwo.h)
add_executable(007-Quick-Sort-Three-Ways ${SOURCE_FILES7})