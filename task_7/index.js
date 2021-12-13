function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}
function Tree(data) {
    let node = new Node(data);
    this._root = node;
}
let tree = new Tree('1');

tree._root.children.push(new Node('2'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('3'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('4'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('5'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('6'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('7'));
tree._root.children[2].children[0].parent = tree._root.children[2];

function search(node) {
    console.log(node.data);
    if (node.children.length) {
        for (let i = 0; i < node.children.length; i++) {
            search(node.children[i]);
        }
    }
}
//search(tree._root)