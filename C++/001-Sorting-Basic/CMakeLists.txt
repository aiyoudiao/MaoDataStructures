cmake_minimum_required(VERSION 3.6)
project(001_Sorting_Basic)

set(CMAKE_CXX_STANDARD 11)

# 参考模板， 如果新增加程序 就按照这种方式新建一个 变量 并且新添加一个应用即可
#set(SOURCE_FILES main.cpp)
#add_executable(001_Sorting_Basic ${SOURCE_FILES})

# 001-Selection-Sort
set(SOURCE_FILES2 ./001-Selection-Sort/main.cpp)
add_executable(001-Selection-Sort ${SOURCE_FILES2})

# 002-Selection-Sort-Using-Template
set(SOURCE_FILES3 ./002-Selection-Sort-Using-Template/main.cpp 002-Selection-Sort-Using-Template/Student.h)
add_executable(002-Selection-Sort-Using-Template ${SOURCE_FILES3})

# 003-Selection-Sort-Generate-Test-Cases
set(SOURCE_FILES4 ./003-Selection-Sort-Generate-Test-Cases/main.cpp 003-Selection-Sort-Generate-Test-Cases/Student.h 003-Selection-Sort-Generate-Test-Cases/SortTestHelper.h)
add_executable(003-Selection-Sort-Generate-Test-Cases ${SOURCE_FILES4})

# 004-Selection-Sort-Detect-Performance
set(SOURCE_FILES5 ./004-Selection-Sort-Detect-Performance/main.cpp 004-Selection-Sort-Detect-Performance/Student.h 004-Selection-Sort-Detect-Performance/SortTestHelper.h)
add_executable(004-Selection-Sort-Detect-Performance ${SOURCE_FILES5})

# 005-Insertion-Sort
set(SOURCE_FILES6 ./005-Insertion-Sort/main.cpp 005-Insertion-Sort/Student.h 005-Insertion-Sort/SortTestHelper.h 005-Insertion-Sort/SelectionSort.h)
add_executable(005-Insertion-Sort ${SOURCE_FILES6})

# 006-Insertion-Sort-Advance
set(SOURCE_FILES7 ./006-Insertion-Sort-Advance/main.cpp 006-Insertion-Sort-Advance/Student.h 006-Insertion-Sort-Advance/SortTestHelper.h 006-Insertion-Sort-Advance/SelectionSort.h 006-Insertion-Sort-Advance/InsertionSort.h)
add_executable(006-Insertion-Sort-Advance ${SOURCE_FILES7})