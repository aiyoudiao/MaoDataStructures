#include <iostream>
#include <algorithm>

using namespace std;

template <typename Key, typename Value>
class BinarySearchTree {
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

    void insert (Key key, Value value) {
        root = insert(root, key, value);
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
};

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}