class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

const removeKthToLast = (head, k) => {
  if (!head.next) return head;
  
  let countPtr = head;
  let count = 0;
  
  while (countPtr){
    count ++;
    countPtr = countPtr.next;
  }
  
  countPtr = head;
  count -= k;

  if (count == 0){
    head = head.next;
  }

  while (count > 1){
    countPtr = countPtr.next;
    count --;
  }
  
   countPtr.next !== null ? countPtr.next = countPtr.next.next : countPtr.next = null;
   
   return head;
 }


 //good to go -- Make LL!
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 8;
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

console.log(llToArr(removeKthToLast(myList, k)));