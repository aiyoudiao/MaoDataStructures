cmake_minimum_required(VERSION 3.6)
project(006_Graph_Theory)

set(CMAKE_CXX_STANDARD 11)

# 参考模板， 如果新增加程序 就按照这种方式新建一个 变量 并且新添加一个应用即可
#set(SOURCE_FILES main.cpp)
#add_executable(006_Graph_Theory ${SOURCE_FILES})

# 001-Graph-Representation
set(SOURCE_FILES1 001-Graph-Representation/main.cpp 001-Graph-Representation/DenseGraph.h 001-Graph-Representation/SparseGraph.h)
add_executable(001-Graph-Representation ${SOURCE_FILES1})

# 002-Vertex-Adjacent-Iterator
set(SOURCE_FILES2 002-Vertex-Adjacent-Iterator/main.cpp 002-Vertex-Adjacent-Iterator/DenseGraph.h 002-Vertex-Adjacent-Iterator/SparseGraph.h)
add_executable(002-Vertex-Adjacent-Iterator ${SOURCE_FILES2})

# 003-Read-Graph
set(SOURCE_FILES3 003-Read-Graph/main.cpp 003-Read-Graph/DenseGraph.h 003-Read-Graph/SparseGraph.h 003-Read-Graph/ReadGraph.h)
add_executable(003-Read-Graph ${SOURCE_FILES3})

# 004-DFS-and-Components
set(SOURCE_FILES4 004-DFS-and-Components/main.cpp 004-DFS-and-Components/DenseGraph.h 004-DFS-and-Components/SparseGraph.h 004-DFS-and-Components/ReadGraph.h 004-DFS-and-Components/Components.h)
add_executable(004-DFS-and-Components ${SOURCE_FILES4})

# 005-Finding-A-Path
set(SOURCE_FILES5 005-Finding-A-Path/main.cpp 005-Finding-A-Path/DenseGraph.h 005-Finding-A-Path/SparseGraph.h 005-Finding-A-Path/ReadGraph.h 005-Finding-A-Path/Components.h 005-Finding-A-Path/Path.h)
add_executable(005-Finding-A-Path ${SOURCE_FILES5})

# 006-BFS-And-Shortest-Path
set(SOURCE_FILES6 006-BFS-And-Shortest-Path/main.cpp 006-BFS-And-Shortest-Path/DenseGraph.h 006-BFS-And-Shortest-Path/SparseGraph.h 006-BFS-And-Shortest-Path/ReadGraph.h 006-BFS-And-Shortest-Path/Components.h 006-BFS-And-Shortest-Path/Path.h 006-BFS-And-Shortest-Path/ShortestPath.h)
add_executable(006-BFS-And-Shortest-Path ${SOURCE_FILES6})