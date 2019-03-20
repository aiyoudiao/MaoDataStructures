// Student
class Student {
  constructor (grade, classId, studentName, studentScore) {
    this.name = studentName;
    this.score = studentScore;
    this.grade = grade;
    this.classId = classId;
  }

  //@Override hashCode 2018-11-25-jwl
  hashCode () {
    // 选择进制
    const B = 31;

    // 计算hash值
    let hash = 0;
    hash = hash * B + this.getCode(this.name.toLowerCase());
    hash = hash * B + this.getCode(this.score);
    hash = hash * B + this.getCode(this.grade);
    hash = hash * B + this.getCode(this.classId);

    // 返回hash值
    return hash;
  }

  //@Override equals 2018-11-25-jwl
  equals (obj) {
    // 三重判断
    if (!obj)
      return false;
    if (this === obj)
      return true;
    if (this.valueOf() !== obj.valueOf())
      return false;

    // 对属性进行判断
    return this.name === obj.name && this.score === obj.score &&
           this.grade === obj.grade && this.classId === obj.classId;
  }

  // 拆分字符生成数字 -
  getCode (s) {
    
    s = s + "";
    let result = 0;
    // 遍历字符 计算结果
    for (const c of s)
      result += c.charCodeAt(0);

    // 返回结果
    return result;
  }

  //@Override toString 2018-10-19-jwl
  toString () {
    let studentInfo = `Student(name: ${this.name}, score: ${this.score})`;
    return studentInfo;
  }
}

window.onload = function () {
  // 执行主函数
  new Main();
}
