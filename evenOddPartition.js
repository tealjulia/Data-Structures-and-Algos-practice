 
 class ListNode {
  constructor (data){
    this.data = data;
    this.next = null;
  }
}

//Given a linked list, remove the k'th to last element, and return the head of the new linked list.

function removeKFromList(l, k) {
  if (!l) return l;
  if (!l.next && l.data == k) return new ListNode();
  
  let dummy = new ListNode(-1);
  dummy.next = l;
  let prev = dummy;
  let curr = l;
  let next = curr.next;
  
  while (next !== null){ 
      if (curr.data == k){
          prev.next = next;
          curr = next; 
          next = curr.next;
      } else {
          prev = curr;
          curr = next; 
          next = curr.next;
      }
    if (curr.data == k) {
        prev.next = null;
    }    
  }
  return llToArr(dummy.next);
}


//good to go -- Make LL!
let arr = [4];
let curr = new ListNode(0);
let head = null;
let myList = createLL(arr);
let k = 4;

function createLL(arr){
  let ll, head;
  ll = null;

  for (let i=arr.length-1; i>=0; i--){
    head = new ListNode(arr[i]);
    head.next = ll;
    ll = head;
  }
  // console.log(ll);
  return head
}

const llToArr = (head) => {
  let arr = [];
  let curr = head;
  while (curr){
    arr.push(curr.data);
    curr = curr.next;
  }
  return arr;
}

console.log(removeKFromList(myList, k));