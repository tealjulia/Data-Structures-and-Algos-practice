class Queue{
  constructor(){
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  enqueue(data){
    if (c===this.queue.length){
      ensureGrowth();
    }
    queue[this.tail] = data;
    this.tail = (this.tail+1)%this.queue.length;
    this.count++
  }

  ensureGrowth(){
    let n = new Array(this.queue.length * 2);
    if(this.tail < this.head){
      let j = 0
      for (let i = h; i < this.queue.length; i++){
        n[j] = this.queue[i];
        j++;
      }
      for (let i = 0; i <= this.tail; i++){
        n[j] = this.queue[i];
        j++
      }
      this.tail = this.queue.length;
      this.queue = n;
    }
  }

  dequeue(){
    if (count === 0){
      return "Queue empty"
    } else {
      var data = this.queue[head];
      this.queue[this.head++] = null;
      this.count--;
      return data;
    }
  } 
}

class myStack {
  constructor(){
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  stackPush(data){
    this.q1.enqueue(data);
  }

  stackPop(){
    prepQueues();
    let popped = this.q1.head;
    [this.q1, this.q2] = [this.q2, this.q1];
    return popped;
  }

  prepQueues(){
    while (this.q1.length > 1){
      this.q2.enqueue(this.q1.dequeue());
    }
  }

  stackPeek(){
    prepQueues();
    let peeked = this.q1.head;
    [this.q1, this.q2] = [this.q2, this.q1];
    return peeked;
  }
}