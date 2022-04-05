#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

#include "FileOps.h"
#include "SequenceST.h"


using namespace std;

template <typename Key, typename Value>
class BinarySearchTree {
    // 私有的结构体  节点
private:
    struct Node {
        Key key;
        Value value;
        Node* left;
        Node* right;

        Node (Key key, Value value) {
            this->key = key;
            this->value = value;
            this->left = this->right = NULL;
        };
    };

    Node* root;
    int count;

public:
    BinarySearchTree () {
        root = NULL;
        count = 0;
    }
    ~BinarySearchTree() {
        // TODO: ~BinarySearchTree()
    }

    // 插入操作
    void insert (Key key, Value value) {
        root = insert(root, key, value);
    }

    // 包含操作
    bool contain (Key key) {
        return contain(root, key);
    }

    // 查找操作
    Value* search (Key key) {
        return search(root, key);
    }

    int size () {
        return count;
    }

    bool isEmpty () {
        return count == 0;
    }

private:
    // 向以节点node为根的二分搜索树中插入 节点(key, value)
    // 返回插入新节点后的二分搜索树的根
    Node* insert (Node* node, Key key, Value value) {

        // 这个节点为空，说明可以插入节点了
        if (node == NULL) {
            node = new Node(key, value);
            count ++;
            return node;
        }

        // 开始查找合适的位置，三种情况
        // 1. 如果这个元素存在那么就进行覆盖操作
        // 2. 如果这个元素的key比当前节点的key小，就去当前node的left中再去进行插入操作
        // 3. 如果这个元素的key比当前节点的key大，就去当前node的right中再去进行插入操作
        if (node->key == key)
            node->value =value;
        else if (node->key > key)
            node->left = insert(node->left, key, value);
        else // node->key < key
            node->right = insert(node->right, key, value);

        return node;
    }

    // 在 以节点node为根的二分搜索树中 查看 是否包含键值为key的节点
    bool contain (Node* node, Key key) {

        // 这个节点为空，说明找不到了，这也是递归结束条件
        if (node == NULL)
            return false;

        // 开始查找是否包含，三种情况
        // 1. 如果这个元素的key找到了，那么就返回true
        // 2. 如果这个元素的key比当前节点的key小，就去当前node的left中再去进行查找操作
        // 3. 如果这个元素的key比当前节点的key大，就去当前node的right中再去进行查找操作
        if (node->key == key)
            return true;
        else if (node->key > key)
            return contain(node->left, key);
        else // node->key < key
            return contain(node->right, key);
    }

    // 在 以节点node为根的二分搜索树中 查找 键值为key的节点的value值
    Value* search (Node* node, Key key) {

        // 这个节点为空，说明找不到了，这也是递归结束条件
        if (node == NULL)
            return NULL;

        // 开始查找，三种情况
        // 1. 如果这个元素的key找到了，那么就返回这个节点的value，但是要将他转换为指针类型
        // 2. 如果这个元素的key比当前节点的key小，就去当前node的left中再去进行查找操作
        // 3. 如果这个元素的key比当前节点的key大，就去当前node的right中再去进行查找操作
        if (node->key == key)
            return &(node->value);
        else if (node->key > key)
            return search(node->left, key);
        else
            return search(node->right, key);
    }
};

// 测试二分搜索树和顺序查找表之间的性能差距
// 二分搜索树的性能远远优于顺序查找表
int main() {

    // 使用圣经作为我们的测试用例
    string filename = "../004-Binary-Search-Tree-Search/bible.txt";
    vector<string> words;
    if( FileOps::readFile(filename, words) ) {

        cout << "There are totally " << words.size() << " words in " << filename << endl;
        cout << endl;


        // 测试 BinarySearchTree
        time_t startTime = clock();

        // 统计圣经中所有词的词频
        // 注: 这个词频统计法相对简陋, 没有考虑很多文本处理中的特殊问题
        // 在这里只做性能测试用
        BinarySearchTree<string, int> bst = BinarySearchTree<string, int>();
        for (vector<string>::iterator iter = words.begin(); iter != words.end(); iter++) {
            int *res = bst.search(*iter);
            if (res == NULL)
                bst.insert(*iter, 1);
            else
                (*res)++;
        }

        // 输出圣经中god一词出现的频率
        if(bst.contain("god"))
            cout << "'god' : " << *bst.search("god") << endl;
        else
            cout << "No word 'god' in " << filename << endl;

        time_t endTime = clock();

        cout << "BinarySearchTree , time: " << double(endTime - startTime) / CLOCKS_PER_SEC << " s." << endl;
        cout << endl;


        // 测试顺序查找表 SST
        startTime = clock();

        // 统计圣经中所有词的词频
        // 注: 这个词频统计法相对简陋, 没有考虑很多文本处理中的特殊问题
        // 在这里只做性能测试用
        SequenceST<string, int> sst = SequenceST<string, int>();
        for (vector<string>::iterator iter = words.begin(); iter != words.end(); iter++) {
            int *res = sst.search(*iter);
            if (res == NULL)
                sst.insert(*iter, 1);
            else
                (*res)++;
        }

        // 输出圣经中god一词出现的频率
        if(sst.contain("god"))
            cout << "'god' : " << *sst.search("god") << endl;
        else
            cout << "No word 'god' in " << filename << endl;

        endTime = clock();

        cout << "SST , time: " << double(endTime - startTime) / CLOCKS_PER_SEC << " s." << endl;
    }

    return 0;
}