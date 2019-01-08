

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index) || [];
  let tuple = [k,v];
  for (let i = 0; i < bucket.length; i++) {
    let bucketTuple = bucket[i];
    if (bucketTuple[0] === k) {
      bucketTuple[1] = v; 
    }
  }
  if (!bucket.includes(tuple)) {
    bucket.push(tuple);
  } 
  this._storage.set(index, bucket);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1]; 
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = this._storage.get(index); 
  delete tuple[0][1]; 
};     



/*
 * Complexity: What is the time complexity of the above functions?
 */


