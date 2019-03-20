// 自定义链表映射 Map
class MyLinkedListMap {
  constructor () {
    this.dummyHead = new MyLinkedListMapNode();
    this.size = 0;
  }

  // 根据key获取节点 -
  getNode (key) {

    let cur = this.dummyHead.next;

    while (cur !== null) {
      if (cur.key === key)
        return cur;
      cur = cur.next;
    }

    return null;
  }

  // 添加操作 +
  add (key, value) {
    let node = this.getNode(key);
    // 这个节点如果存在就 覆盖值即可
    if (node !== null)
      node.value = value;
    else { // 如果不存在，那么就在头部添加以下
      let newNode = new MyLinkedListMapNode(key, value);
      newNode.next = this.dummyHead.next;
      this.dummyHead.next = newNode;
      this.size ++;
    }
  }

  // 删除操作 返回被删除的元素 +
  remove (key) {

    let prev = this.dummyHead;
    // 循环查找
    while (prev.next !== null) {
      if (prev.next.key === key)
        break;
      prev = prev.next;
    }

    // 如果触碰了break， 那就满足条件
    if (prev.next !== null) {
      let delNode = prev.next;
      prev.next = delNode.next;

      let value = delNode.value;
      delNode = delNode.next = null;
      this.size --;
      return value;
    }

    // 如果没有触屏break 那就返回空值回去
    return null;
  }

  // 查询操作 返回查询到的元素 +
  get (key) {
    let node = this.getNode(key);
    if (node === null)
      return null;
    return node.value;
  }

  // 修改操作 +
  set (key, value) {
    let node = this.getNode(key);
    if (node === null)
      throw new Error(key + " doesn't exist.");

    node.value = value;
  }

  // 返回是否包含该key的元素的判断值  +
  contains (key) {
    return this.getNode(key) !== null;
  }

  // 返回映射中实际的元素个数 +
  getSize () {
    return this.size;
  }

  // 返回映射中是否为空的判断值  +
  isEmpty () {
    return this.size === 0;
  }

  // @Override toString() 2018-11-05-jwl
  toString () {
    let mapInfo = `MyLinkedListMap: size = ${this.size}, data = [ `;
    document.body.innerHTML += `MyLinkedListMap: size = ${this.size}, data = [ <br/><br/>`;

    let cur = this.dummyHead.next;

    for (var i = 0; i < this.size - 1; i++) {
      mapInfo += ` ${cur.toString()}, \r\n`;
      document.body.innerHTML += ` ${cur.toString()}, <br/><br/>`;
      cur = cur.next;
    }

    if (cur !== null){
      mapInfo += ` ${cur.toString()} \r\n`;
      document.body.innerHTML += ` ${cur.toString()} <br/><br/>`;
    }

    mapInfo += ` ] \r\n`;
    document.body.innerHTML += ` ] <br/><br/>`;

    return mapInfo;
  }
}

