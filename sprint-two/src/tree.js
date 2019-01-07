var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods)
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode); 
};

treeMethods.contains = function(target, parent) {
  parent = parent || this;
  if (parent.value === target) {
    return true; 
  }
  for (let i = 0; i < parent.children.length; i++) {
    var child = this.children[i]; 
    if (child.contains(target, parent.children[i])) {
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
 * Complexity: What is the time complexity of the above functions?
 */
