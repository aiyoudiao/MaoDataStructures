/**
 * Created by LENOVO on 2018/11/21.
 */
public class Student {
    int grade;
    int classId;
    String firstName;
    String lastName;

    Student (int grade, int classId, String firstName, String lastName) {
        this.grade = grade;
        this.classId = classId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public int hashCode() {
        // 选择进制
        int B = 31;

        // 计算hash值
        int hash = 0;
        hash = hash * B + grade;
        hash = hash * B + classId;
        hash = hash * B + firstName.toLowerCase().hashCode();
        hash = hash * B + lastName.toLowerCase().hashCode();

        // 返回hash值
        return hash;
    }

    @Override
    public boolean equals(Object obj) {

        if (obj == null)
            return false;
        if (this == obj)
            return true;
        if (getClass() != obj.getClass())
            return false;

        Student another = (Student)obj;

        return this.grade == another.grade &&
                this.classId == another.classId &&
                this.firstName.toLowerCase() == another.firstName.toLowerCase() &&
                this.lastName.toLowerCase() == another.lastName.toLowerCase();
    }
}
