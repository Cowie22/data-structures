var LinkedList = function() {
  var list = {}; 
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); 
    if (!list.tail) {
      list.tail.next = newNode;
      list.head.next = newNode;    
    }
    list.tail.next = newNode;
     
    // if (list.head === null) {
    //   list.head = list.tail;
    // } 
      
      
    
    // }
    
  };

  list.removeHead = function() {
    var result = list.head.value; 
    if (list.head) {
      list.head = list.head.next;  
    }
  
    
    return result;
    // if (Object.keys(list).length > 0) {
    //   var result = list.head; 
    //   delete list.head; 
    //   //something 
    //   return result; 
    // } 
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
