
class Node {
  constructor (data){
    this.data = data;
    this.next = null;
  }
}

function rotateLL(head, k){
  let newTail = newHead = runner = head;
  let count = 1;

  //set runner out k spaces head
  while (runner.next && count<k){
    runner = runner.next;
    count++;
  }
  
  //move tail and head up until runner reaches the end
  while (runner.next){
    runner = runner.next;

    newTail = newHead;
    newHead = newHead.next;
  }
  // console.log(runner);
  // console.log(newHead);
  newTail.next = null;
  runner.next = head;
  head = newHead;    
  
  return head;
}

//good to go -- Make LL!
let arr = [0, 1, 2, 3, 4, 5];
let curr = new Node(0);
let head = null;
let myList = createLL(arr);
let k = 4;

function createLL(arr){
  let ll, head;
  ll = null;

  for (let i=arr.length-1; i>=0; i--){
    head = new Node(arr[i]);
    head.next = ll;
    ll = head;
  }
  // console.log(ll);
  return head
}

console.log(rotateLL(myList, k));