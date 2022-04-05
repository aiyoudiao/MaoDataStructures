//
// Created by LENOVO on 2018/12/3.
//

#ifndef INC_004_BINARYSEARCHTREE_BINARYSEARCHTREE_H
#define INC_004_BINARYSEARCHTREE_BINARYSEARCHTREE_H

#include <ostream>
#include <algorithm>
#include <string>
#include <queue>
#include <cassert>

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
        // 释放所有节点的空间。
        destory(root);
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

    // 寻找二分搜索树中的最小键值
    Key minimum() {
        assert(count != 0); // count != 0 值为 false就中断程序

        Node* min = minimum(root);
        return min->key;
    }

    // 寻找二分搜索树中的最大的键值
    Key maximum() {
        assert(count != 0); // count != 0 值为 false就中断程序

        Node* max = maximum(root);
        return max->key;
    }

    // 删除 二分搜索树中的最小节点
    void removeMin () {
        if (root != NULL)
            root = removeMin(root);
    }

    // 删除 二分搜索树中的最大节点
    void removeMax () {
        if (root != NULL)
            root = removeMax(root);
    }

    // 前序遍历
    void preOrder () {
        preOrder(root);
    }
    // 中序遍历
    void inOrder () {
        inOrder(root);
    }
    // 后序遍历
    void portOrder () {
        preOrder(root);
    }
    // 层序遍历
    void levelOrder () {
        // 根不能为空
        if (root == NULL)
            return;

        // 定义一个队列 将根节点入队
        queue<Node*> q;
        q.push(root);

        // 队不为空
        while(!q.empty()) {
            Node* node = q.front(); // 获取队首元素
            q.pop(); // 出队

            // 输出当前节点
            cout << node->key << endl;

            // 左右孩子不为空就入队
            if (node->left != NULL)
                q.push(node->left);
            if (node->right != NULL)
                q.push(node->right);
        }
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

    // 对以节点node为根的二分搜索树 进行前序遍历
    void preOrder (Node* node) {
        if (node != NULL) {
            count << node->key << endl;
            portOrder(node->left);
            preOrder(node->right);
        }
    }

    // 对以节点node为根的二分搜索树 进行中序遍历
    void inOrder (Node* node) {
        if (node != NULL) {
            portOrder(node->left);
            count << node->key << endl;
            preOrder(node->right);
        }
    }

    // 对以节点node为根的二分搜索树 进行后序遍历
    void portOrder (Node* node) {
        if (node != NULL) {
            portOrder(node->left);
            preOrder(node->right);
            count << node->key << endl;
        }
    }

    // 以后续遍历的方式释放空间
    void destory (Node* node) {
        if (node != _NULL) {
            destory(node->left);
            destory(node->right);

            delete node;
            count --;
        }
    }

    // 在以 node为根的二分搜索树中 寻找 最小的节点
    Node* minimum (Node* node) {
        if (node->left == NULL)
            return node;

        return minimum(node->left);
    }

    // 在以 node为根的二分搜索树中 寻找 最大的节点
    Node* maximum (Node* node) {
        if (node->right == NULL)
            return node;

        return minimum(node->right);
    }

    // 在以 node为根的二分搜索树中 删除 最小的节点
    // 并且返回 删除掉 最小节点后的 新的根
    Node* removeMin (Node* node) {
        // 递归到底的情况
        if (node->left == NULL) {
            // 删除当前节点，并且返回当前节点的右子树。
            Node* right = node->right;
            delete node;
            count --;
            return  right;
        }

        // 将复杂的问题 分解成众多性质相同的小问题，求出这些小问题的解，
        // 最终构建出原问题的答案。
        node->left = removeMin(node->left);
        return node;
    }

    // 在以 node为根的二分搜索树中 删除 最大的节点
    // 并且返回 删除掉 最大节点后的 新的根
    Node* removeMax (Node* node) {
        // 递归到底的情况
        if (node->right == NULL) {
            // 删除当前节点，并返回当前节点的 左子树
            Node* left = node->left;
            delete node;
            count --;
            return left;
        }

        // 将复杂的问题 分解成众多性质相同的小问题，求出这些小问题的解，
        // 最终构建出原问题的答案。
        node->right = removeMax(node->right);
        return node;
    }
};

#endif //INC_004_BINARYSEARCHTREE_BINARYSEARCHTREE_H
