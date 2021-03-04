class Node {
  constructor(data, next){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.size = 0
  }
}

class Queue {
  constructor(){
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(data){
    const node = new Node(data, this.s1.top);
    node.next = this.s1.top;
    this.s1.top = node;
    this.s1.size++;
  }

  dequeue(data){
    if(this.s2.size == 0){
      if(this.s1.size == 0){
        return "Queue empty"
      } else {
        while(this.s1.size > 0){
          let temp = this.s1.top;
          this.s1.top = this.s1.top.next;
          this.s1.size--;

          if(this.s2.top){
            this.s2.top.prev = temp;
          }
          
          temp.next = this.s2.top;
          this.s2.top = temp;
          
          this.s2.size++;
          }
        }         
      }
      let popped = this.s2.top;
      this.s2.top = this.s2.top.next;
      this.s2.size--;
      return popped;
  }


  isEmpty(){
    if (this.s1.size + this.s2.size == 0){
      return true
    } else {
      return false
    }
  }

}

enqueue(1);

console.log(this.s1);
console.log(this.s2);