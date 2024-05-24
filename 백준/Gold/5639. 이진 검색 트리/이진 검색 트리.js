class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.preOrderList = "";
    this.inOrderList = "";
    this.postOrderList = "";
  }

  insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const tree = new BST();

rl.on("line", (line) => {
  input.push(Number(line.trim()));
}).on("close", () => {
  input.forEach((v) => {
    tree.insert(v);
  });

  const postOrderList = [];

  const postOrder = (node) => {
    if (node != null) {
      postOrder(node.left);
      postOrder(node.right);
      postOrderList.push(node.data);
    }
  };

  postOrder(tree.root);
  postOrderList.map(String);
  console.log(postOrderList.join("\n"));
  process.exit();
});
