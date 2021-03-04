class node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class lruCache {
  constructor() {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  //SET -- Add node to front of LinkedList
  //update cache table 
  setItem(key, value){
    this.ensureLimit();

    if(!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    //update cache map
    this.cache[key] = this.head;
    this.size++;
  }

  //"get" -- read from cache map and make that node as new Head of LL
  read(key){
    if(this.cache[key]){
      const value = this.cache[key].value;

      //node removed from its position and cache
      this.remove(key);
      //node re-written to head of LL (set as most recently used)
      this.setItem(key, value);

      return value;
    }

    console.log(`Item not available in cache for key ${key}`);
  }
  
  //ensure size does not exceed limit 
  ensureLimit(){
    if(this.size === this.limit){
      this.remove(this.tail.key)
    }
  }

  remove(key){
    const node = this.cache[key];

    if(node.prev !== null){
      node.prev.next = node.next
    } else{
      this.head = node.next;
    }

    if(node.next !== null){
      node.next.prev = node.prev;
    } else{
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }

  clear(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Invokes a callback function with every node of the chain and the index of each
  forEach(fn){
    let node = this.head;
    let counter = 0;
    while(node){
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  // To iterate over LRU with a 'for...of' loop
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}