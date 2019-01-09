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
    let node = list.head; 
    while (node) {
      if (node.value === target) {
        return true; 
      }
      node = node.next; 
    }
    return false; 
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
.addToTail(): O(1)
.removeHead(): O(1)
.contains: O(N) 
*/
