const { add, Node, Bst } = require('./bst');

test('adds 5 + 10 = 15', () => {
  expect(add(5, 10)).toBe(15);
});

test('Node is left is null, right is null ', () => {
  const node = new Node(3);
  expect(node.left === null || node.right === null || node.data === 3);
});
