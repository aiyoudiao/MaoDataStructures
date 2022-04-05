//
// Created by LENOVO on 2018/11/27.
//
// .h文件是不对外隐藏的
// .cpp文件在编译之后会对外进行源代码隐藏

// 自定生成宏定义，防止文件之间的多重引用
#ifndef INC_001_SORTING_BASIC_STUDENT_H
#define INC_001_SORTING_BASIC_STUDENT_H

// 在软件行业 是避免使用using namespace的，这样容易出现命名空间污染的问题
// 这里使用是为了方便
using namespace std;

struct Student {

    string name;
    int score;

    // 对小于号运算符进行重载
    bool operator<(const Student &otherStudent) {
        // 通过修改这个 < 运算符 就可以 按照学生成绩从大到小进行排序
//        return score < otherStudent.score;
//        return score > otherStudent.score;

        // 如果学生的成绩相同就按照学生name进行排序
        return score != otherStudent.score ?
               score > otherStudent.score : name < otherStudent.name;
    }

    // 对<< 这个输出的运算符进行重载 使用了有源函数friend
    friend ostream& operator<<(ostream &os, const Student &student) {

        os<<"Student："<<student.name<<" "<<student.score<<endl;
        return os;
    }
};

#endif //INC_001_SORTING_BASIC_STUDENT_H
