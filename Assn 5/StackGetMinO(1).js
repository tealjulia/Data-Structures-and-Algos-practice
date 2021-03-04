class node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class stack {
  constructor(){
   this.top = null;
   this.size = 0;
   this.min = null;
  }

  isEmpty(){
    if (this.top == null){
      return true
    } else {
      return false
    }
  }

  // length(){
  //   this.count = 0;
  //   tempNode = this.top;
  //   while(tempNode){
  //     tempNode = tempNode.next;
  //     this.count++;
  //   }
  //   return this.count;
  // }

  peek(){
    if (isEmpty == true){
      return "Stack empty"
    } else {
      return this.top.value;
    }
  }

  push(value){
    if (!this.top){
      this.top = new Node(value);
      this.min = this.top;
    } else if (value < this.min){
      temp = (2 * value) - this.min;
      const node = new Node(temp, this.top);
      node.next = this.top;
      this.min = value;
      this.size++;
    } else {
      const node = new Node(value, this.top)
      node.next = this.top;
      this.top = node;
      this.size++;
    }
  }

  pop(){
    if(!this.top){
      return "Stack empty"
    } else {
      removedNode = this.top.value;
      this.top = this.top.next;
      this.size--;

      if(removedNode < this.min){
        this.min = ((2*this.min) - removedNode);
      }
    }    
  }

  getMin(){
    return `The current minimum is ${this.min}`
  }

  clear(){
    this.top = null;
    this.size = 0;
  }

}

