# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.6

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /cygdrive/c/Users/LENOVO/.CLion2016.3/system/cygwin_cmake/bin/cmake.exe

# The command to remove a file.
RM = /cygdrive/c/Users/LENOVO/.CLion2016.3/system/cygwin_cmake/bin/cmake.exe -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/002_Sorting_Advance.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/002_Sorting_Advance.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/002_Sorting_Advance.dir/flags.make

CMakeFiles/002_Sorting_Advance.dir/main.cpp.o: CMakeFiles/002_Sorting_Advance.dir/flags.make
CMakeFiles/002_Sorting_Advance.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/002_Sorting_Advance.dir/main.cpp.o"
	/usr/bin/c++.exe   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/002_Sorting_Advance.dir/main.cpp.o -c /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/main.cpp

CMakeFiles/002_Sorting_Advance.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/002_Sorting_Advance.dir/main.cpp.i"
	/usr/bin/c++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/main.cpp > CMakeFiles/002_Sorting_Advance.dir/main.cpp.i

CMakeFiles/002_Sorting_Advance.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/002_Sorting_Advance.dir/main.cpp.s"
	/usr/bin/c++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/main.cpp -o CMakeFiles/002_Sorting_Advance.dir/main.cpp.s

CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.requires:

.PHONY : CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.requires

CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.provides: CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.requires
	$(MAKE) -f CMakeFiles/002_Sorting_Advance.dir/build.make CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.provides.build
.PHONY : CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.provides

CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.provides.build: CMakeFiles/002_Sorting_Advance.dir/main.cpp.o


# Object files for target 002_Sorting_Advance
002_Sorting_Advance_OBJECTS = \
"CMakeFiles/002_Sorting_Advance.dir/main.cpp.o"

# External object files for target 002_Sorting_Advance
002_Sorting_Advance_EXTERNAL_OBJECTS =

002_Sorting_Advance.exe: CMakeFiles/002_Sorting_Advance.dir/main.cpp.o
002_Sorting_Advance.exe: CMakeFiles/002_Sorting_Advance.dir/build.make
002_Sorting_Advance.exe: CMakeFiles/002_Sorting_Advance.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 002_Sorting_Advance.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/002_Sorting_Advance.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/002_Sorting_Advance.dir/build: 002_Sorting_Advance.exe

.PHONY : CMakeFiles/002_Sorting_Advance.dir/build

CMakeFiles/002_Sorting_Advance.dir/requires: CMakeFiles/002_Sorting_Advance.dir/main.cpp.o.requires

.PHONY : CMakeFiles/002_Sorting_Advance.dir/requires

CMakeFiles/002_Sorting_Advance.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/002_Sorting_Advance.dir/cmake_clean.cmake
.PHONY : CMakeFiles/002_Sorting_Advance.dir/clean

CMakeFiles/002_Sorting_Advance.dir/depend:
	cd /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/002-Sorting-Advance/cmake-build-debug/CMakeFiles/002_Sorting_Advance.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/002_Sorting_Advance.dir/depend

