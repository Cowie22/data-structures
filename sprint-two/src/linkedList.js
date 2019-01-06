var LinkedList = function() {
  var list = {}; 
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); 
    if (!list.head) {
      list.tail = newNode;
      list.head = newNode;    
    }
    list.tail.next = newNode;
    list.tail = newNode; 
  };

  list.removeHead = function() {
    var result = list.head.value; 
    if (list.head) {
      list.head = list.head.next;  
    }
    return result;
   
  };

  list.contains = function(target) {
    
    /*for (let key in list) {
      if (list[key] === Node(target)) {
        return true; 
      } else if (typeof list[key] === 'object') {
        contains(list[key]); 
      }
    }*/
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
