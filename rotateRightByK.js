class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

const rotateRight = (head, k) => {
  if (!head || !head.next) return head;

  let count = 1;
  let tail = head;

  while (tail.next){
    tail = tail.next;
    count++
    console.log(count);
  }
  
  k = count-(k%count);
  tail.next = head;
  console.log('k is ' + k)

  while(k>0){
    tail = tail.next;
    k--;
  }
  
  head = tail.next;
  tail.next = null;
  return head;
}



//good to go -- Make LL!
let arr = [1, 2, 3, 4];
let k = 2;
let curr = new Node(0);
let head = null;
let myList = createLL(arr);

function createLL(arr){
  let ll, head;
  ll = null;

  for (let i=arr.length-1; i>=0; i--){
    head = new Node(arr[i]);
    head.next = ll;
    ll = head;
  }
  return ll
}

const llToArr = (head) => {
  let arr = [];
  let curr = head;
  while (curr){
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}

console.log(llToArr(rotateRight(myList, k)));