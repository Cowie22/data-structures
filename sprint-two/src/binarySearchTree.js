var BinarySearchTree = function(value) {
  var BST = Object.create(binaryMethods); 
  BST.value = value; 
  BST.right = null;
  BST.left = null; 
  return BST;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(value); 
    } else {
      this.right.insert(value);
    }
  } else {
    if (value < this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      } 
    }
  }
};

binaryMethods.contains = function(value) {
  if (this.value === value) {
    return true; 
  } else if (value > this.value) {
    if (!this.right) {
      return false; 
    } else {
      return this.right.contains(value); 
    }
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value); 
    }
  }
  //we need to check if the tree contains the passed in value
  //we can do this using recursion
  //base case will simply be to check if this.value === value
  //else if value > this.value
  //if (!this.right)
  //return false
  //else return this.right.contains(value)
  
};

binaryMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
  
  //execute the callback on every value of the tree
  //we need to iterate over every node in the tree
  //basecase callback(this.value)
  //if this.right(this.right.depthFirstLog(callback))

  
};


/*
 binaryMethods.insert - O(n): the larger the tree is the more times the function will has to recurse to find it's proper position.  Of course this is divided by two
 binaryMethods.contains - O(n): again the larger the tree the more times the function will have to recurse in order to fins the proper position.  Again divided by two
 binaryMethods.depthFirstLog - O(n): the arger the tree, the more items the recusive function must perform upon
 */
