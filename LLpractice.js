class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

//merge two sorted lists 
//INPUT: two linked lists with nodes in ascending order
//OUTPUT: one merged linked list with nodes in ascending order

const mergeLists = (l1, l2) => {

  let dummy = new Node(-1);
  let p1 = l1;
  let p2 = l2;
  let p3 = dummy;

  while (p1 !== null || p2 !== null){
    if (p1.val<p2.val && p1 && p2) {
      p3.next = p1;
      p3 = p3.next;
      p1 = p1.next;
    } else if(p1 && p2){
      p3.next = p2;
      p3 = p3.next;
      p2 = p2.next;
    } else if (!p1){
      p3.next 
    } else (!p2){

    }


  }


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