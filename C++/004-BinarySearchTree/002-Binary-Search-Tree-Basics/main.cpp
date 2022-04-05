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

    int size () {
        return count;
    }

    bool isEmpty () {
        return count == 0;
    }
};

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}