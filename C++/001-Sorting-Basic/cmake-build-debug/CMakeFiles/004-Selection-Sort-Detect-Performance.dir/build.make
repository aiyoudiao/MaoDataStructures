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
CMAKE_SOURCE_DIR = /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/004-Selection-Sort-Detect-Performance.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/004-Selection-Sort-Detect-Performance.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/004-Selection-Sort-Detect-Performance.dir/flags.make

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/flags.make
CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o: ../004-Selection-Sort-Detect-Performance/main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o"
	/usr/bin/c++.exe   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o -c /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/004-Selection-Sort-Detect-Performance/main.cpp

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.i"
	/usr/bin/c++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/004-Selection-Sort-Detect-Performance/main.cpp > CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.i

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.s"
	/usr/bin/c++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/004-Selection-Sort-Detect-Performance/main.cpp -o CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.s

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.requires:

.PHONY : CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.requires

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.provides: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.requires
	$(MAKE) -f CMakeFiles/004-Selection-Sort-Detect-Performance.dir/build.make CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.provides.build
.PHONY : CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.provides

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.provides.build: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o


# Object files for target 004-Selection-Sort-Detect-Performance
004__Selection__Sort__Detect__Performance_OBJECTS = \
"CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o"

# External object files for target 004-Selection-Sort-Detect-Performance
004__Selection__Sort__Detect__Performance_EXTERNAL_OBJECTS =

004-Selection-Sort-Detect-Performance.exe: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o
004-Selection-Sort-Detect-Performance.exe: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/build.make
004-Selection-Sort-Detect-Performance.exe: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 004-Selection-Sort-Detect-Performance.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/004-Selection-Sort-Detect-Performance.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/004-Selection-Sort-Detect-Performance.dir/build: 004-Selection-Sort-Detect-Performance.exe

.PHONY : CMakeFiles/004-Selection-Sort-Detect-Performance.dir/build

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/requires: CMakeFiles/004-Selection-Sort-Detect-Performance.dir/004-Selection-Sort-Detect-Performance/main.cpp.o.requires

.PHONY : CMakeFiles/004-Selection-Sort-Detect-Performance.dir/requires

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/004-Selection-Sort-Detect-Performance.dir/cmake_clean.cmake
.PHONY : CMakeFiles/004-Selection-Sort-Detect-Performance.dir/clean

CMakeFiles/004-Selection-Sort-Detect-Performance.dir/depend:
	cd /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug /cygdrive/c/Users/LENOVO/Desktop/Algorithms/myproject/Algorithms/001-Sorting-Basic/cmake-build-debug/CMakeFiles/004-Selection-Sort-Detect-Performance.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/004-Selection-Sort-Detect-Performance.dir/depend

