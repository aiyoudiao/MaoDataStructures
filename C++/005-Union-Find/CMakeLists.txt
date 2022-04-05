cmake_minimum_required(VERSION 3.6)
project(005_Union_Find)

set(CMAKE_CXX_STANDARD 11)

# 参考模板， 如果新增加程序 就按照这种方式新建一个 变量 并且新添加一个应用即可
#set(SOURCE_FILES main.cpp)
#add_executable(005_Union_Find ${SOURCE_FILES})

# 001-Quick-Find
set(SOURCE_FILES1 001-Quick-Find/main.cpp 001-Quick-Find/UnionFindTestHelper.h 001-Quick-Find/UnionFindQucikFind.h)
add_executable(001-Quick-Find ${SOURCE_FILES1})

# 002-Quick-Union
set(SOURCE_FILES2 002-Quick-Union/main.cpp 002-Quick-Union/UnionFindTestHelper.h 002-Quick-Union/UnionFindQucikFind.h 002-Quick-Union/UnionFindQuickUnion1.h)
add_executable(002-Quick-Union ${SOURCE_FILES2})

# 003-Optimize-By-Size
set(SOURCE_FILES3 003-Optimize-By-Size/main.cpp 003-Optimize-By-Size/UnionFindTestHelper.h 003-Optimize-By-Size/UnionFindQucikFind.h 003-Optimize-By-Size/UnionFindQuickUnion1.h 003-Optimize-By-Size/UnionFindQuickUnion2.h)
add_executable(003-Optimize-By-Size ${SOURCE_FILES3})

# 004-Optimaize-By-Rank
set(SOURCE_FILES4 004-Optimaize-By-Rank/main.cpp 004-Optimaize-By-Rank/UnionFindTestHelper.h 004-Optimaize-By-Rank/UnionFindQucikFind.h 004-Optimaize-By-Rank/UnionFindQuickUnion1.h 004-Optimaize-By-Rank/UnionFindQuickUnion2.h 004-Optimaize-By-Rank/UnionFindQuickUnion3.h)
add_executable(004-Optimaize-By-Rank ${SOURCE_FILES4})

# 005-Path-Compression
set(SOURCE_FILES5 005-Path-Compression/main.cpp 005-Path-Compression/UnionFindTestHelper.h 005-Path-Compression/UnionFindQucikFind.h 005-Path-Compression/UnionFindQuickUnion1.h 005-Path-Compression/UnionFindQuickUnion2.h 005-Path-Compression/UnionFindQuickUnion3.h 005-Path-Compression/UnionFindQuickUnion4.h)
add_executable(005-Path-Compression ${SOURCE_FILES5})