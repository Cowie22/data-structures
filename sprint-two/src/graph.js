

// Instantiate a new graph
var Graph = function() {

  this.vertex = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertex[node] = [];  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertex[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.vertex[node]) {
    delete this.vertex[node]; 
  }
  for (let key in this.vertex) {
    if (this.vertex[key].indexOf(node) !== -1) {
      this.vertex[key].splice(this.vertex[key].indexOf(node), 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this.vertex[fromNode].indexOf(toNode) !== -1 && this.vertex[toNode].indexOf(fromNode) !== -1; 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertex[fromNode].push(toNode);
  this.vertex[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let startNode = this.vertex[fromNode];
  let finishNode = this.vertex[toNode];
  startNode.splice(startNode.indexOf(toNode), 1);
  finishNode.splice(finishNode.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let callBackNodes = Object.keys(this.vertex);
  callBackNodes.map(function(values) {
    cb(parseInt(values));
  });
//we need to prefore a callback on all of the nodes in the graph
//the nodes are held at the vertex keys
//we need to look at all of the keys
//loop the keys and perform a callback on them
//last two steps potentially done by using object
//we can get an array of all the keys, using object keys
//then map this array with the callback
};

/*
 .addNode: O(1) - one step every time you need to add a node
 .contains: O(1) - we made an object, and objects have constant time lookup
 .removeNode: O(n^2) - in order to splice an item you have to find it using the index and then after it is removed, the remaining items need to shift over
 .hasEdge: O(n) - finding a node at an index takes searching through the entire array
 .addEdge: O(1) - there are always two operations to perform
 .removeEdge: O(n^2) - have to find the index of the node and then splice it out, so that everything has to move over
 .forEachNode: O(n) - have to iterate the array of keys and perform the callback on each item.  The longer the array, the more time this will take  
 */


