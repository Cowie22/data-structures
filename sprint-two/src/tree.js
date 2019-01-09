var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];// fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode); 
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true; 
  }
  for (let i = 0; i < this.children.length; i++) {
    var child = this.children[i]; 
    if (child.contains(target)) {
      return true;
    } 
  }
  return false;
  //check if parent.value === target
  //if not check if parent has children 
  //check each child for value 
  //check if each child has children 
  //check each for value 
  
  
};



/*
 .addChild: O(1) - will always have to create a node& push to tree
 # of operations will never change.
 .contains: O(N) - adding more inputs linerally increases the number
 of iterations (operations) the for loop will have to perform. 
 */
