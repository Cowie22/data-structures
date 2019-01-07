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

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true; 
  }
  if (this.children) {
    for (let i = 0; i < this.children.length; i++) {
      var child = this.children[i]; 
      child.contains(target); 
    }
  }
  //check if parent.value === target
    //if not check if parent has children 
  //check each child for value 
    //check if each child has children 
      //check each for value 
  
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
