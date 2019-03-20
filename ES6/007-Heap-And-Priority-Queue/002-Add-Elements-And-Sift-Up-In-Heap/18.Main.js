// main 函数
class Main {
  constructor () {
    this.alterLine("leetcode 349.  两个数组的交集");
    let s = new Solution();
    var nums1 = [1,2,2,1], nums2 = [2,2];
    var nums3 = [4,9,5], nums4 = [9,4,9,8,4];

    console.log("[" + s.intersection(nums1, nums2) + "]");
    console.log("[" + s.intersection(nums3, nums4) + "]");
    this.show("[" + s.intersection(nums1, nums2) + "]");
    this.show("[" + s.intersection(nums3, nums4) + "]");

    this.alterLine("leetcode 350.  两个数组的交集 II");

    console.log("[" + s.intersect(nums1, nums2) + "]");
    console.log("[" + s.intersect(nums3, nums4) + "]");
    this.show("[" + s.intersect(nums1, nums2) + "]");
    this.show("[" + s.intersect(nums3, nums4) + "]");

  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }

  // 展示分割线
  alterLine (title) {
    let line = `--------------------${title}----------------------`
    console.log(line);
    document.body.innerHTML += `${line}<br /><br />`;
  }
}

// 页面加载完毕
window.onload = function () {
  // 执行主函数
  new Main();
}
