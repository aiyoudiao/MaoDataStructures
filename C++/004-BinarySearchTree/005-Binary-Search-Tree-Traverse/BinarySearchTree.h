//
// Created by LENOVO on 2018/12/3.
//

#ifndef INC_004_BINARYSEARCHTREE_BINARYSEARCHTREE_H
#define INC_004_BINARYSEARCHTREE_BINARYSEARCHTREE_H

#include <ostream>
#include <algorithm>
#include <string>


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
};

#endif //INC_004_BINARYSEARCHTREE_BINARYSEARCHTREE_H
