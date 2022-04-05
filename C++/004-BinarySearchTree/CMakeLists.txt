cmake_minimum_required(VERSION 3.6)
project(004_BinarySearchTree)

set(CMAKE_CXX_STANDARD 11)

# 参考模板， 如果新增加程序 就按照这种方式新建一个 变量 并且新添加一个应用即可
#set(SOURCE_FILES main.cpp)
#add_executable(004_BinarySearchTree ${SOURCE_FILES})

# 001-Binary-Serach
set(SOURCE_FILES1 001-Binary-Serach/main.cpp)
add_executable(001-Binary-Serach ${SOURCE_FILES1})

# 002-Binary-Search-Tree-Basics
set(SOURCE_FILES2 002-Binary-Search-Tree-Basics/main.cpp)
add_executable(002-Binary-Search-Tree-Basics ${SOURCE_FILES2})

# 003-Binary-Search-Tree-Insert
set(SOURCE_FILES3 003-Binary-Search-Tree-Insert/main.cpp)
add_executable(003-Binary-Search-Tree-Insert ${SOURCE_FILES3})

# 004-Binary-Search-Tree-Search
set(SOURCE_FILES4 004-Binary-Search-Tree-Search/main.cpp 004-Binary-Search-Tree-Search/FileOps.h 004-Binary-Search-Tree-Search/SequenceST.h 004-Binary-Search-Tree-Search/bible.txt)
add_executable(004-Binary-Search-Tree-Search ${SOURCE_FILES4})

# 005-Binary-Search-Tree-Traverse
set(SOURCE_FILES5 005-Binary-Search-Tree-Traverse/main.cpp 005-Binary-Search-Tree-Traverse/FileOps.h 005-Binary-Search-Tree-Traverse/SequenceST.h 005-Binary-Search-Tree-Traverse/bible.txt 005-Binary-Search-Tree-Traverse/BinarySearchTree.h)
add_executable(005-Binary-Search-Tree-Traverse ${SOURCE_FILES5})

# 006-Binary-Search-Tree-Level-Traverse
set(SOURCE_FILES6 006-Binary-Search-Tree-Level-Traverse/main.cpp 006-Binary-Search-Tree-Level-Traverse/FileOps.h 006-Binary-Search-Tree-Level-Traverse/SequenceST.h 006-Binary-Search-Tree-Level-Traverse/bible.txt 006-Binary-Search-Tree-Level-Traverse/BinarySearchTree.h)
add_executable(006-Binary-Search-Tree-Level-Traverse ${SOURCE_FILES6})

# 007-Binary-Search-Tree-Remove-Min-And-Max
set(SOURCE_FILES7 007-Binary-Search-Tree-Remove-Min-And-Max/main.cpp 007-Binary-Search-Tree-Remove-Min-And-Max/FileOps.h 007-Binary-Search-Tree-Remove-Min-And-Max/SequenceST.h 007-Binary-Search-Tree-Remove-Min-And-Max/bible.txt 007-Binary-Search-Tree-Remove-Min-And-Max/BinarySearchTree.h)
add_executable(007-Binary-Search-Tree-Remove-Min-And-Max ${SOURCE_FILES7})

# 008-Binary-Search-Tree-Remove
set(SOURCE_FILES8 008-Binary-Search-Tree-Remove/main.cpp 008-Binary-Search-Tree-Remove/FileOps.h 008-Binary-Search-Tree-Remove/SequenceST.h 008-Binary-Search-Tree-Remove/bible.txt 008-Binary-Search-Tree-Remove/BinarySearchTree.h)
add_executable(008-Binary-Search-Tree-Remove ${SOURCE_FILES8})