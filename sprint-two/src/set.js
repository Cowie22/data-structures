var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
  
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true; 
  } else {
    return false; 
  }
};

setPrototype.remove = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 .add: O(N) - indexOf requires iteration of an array, as more items are added it requires more operations. 
 .contains: O(N) - indexOf requires iteration of an array, as more items are added it requires more operations.
 .remove: O(N^2) - indexOf requires iteration of an array, as more items are added it requires more operations. 
 After the item is removed each item must be shifted. Thus as more items are added to the array, the amount 
 of operations increases exponentially n*n. 
 */