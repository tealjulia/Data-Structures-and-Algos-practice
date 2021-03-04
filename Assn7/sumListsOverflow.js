class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}


function sumLists (l1, l2){
  let pointer1 = l1;
  let pointer2 = l2;
  let headPointer = new Node();
  let head = headPointer;
  let carrying = 0;

  while (pointer1 || pointer2){
    let val1 = pointer1 == null ? 0 : pointer1.val;
    let val2 = pointer2 == null ? 0 : pointer2.val;

    let sum = carrying + val1 + val2;
    if (sum > 9){
      carrying = 1;
    }

    headPointer.next = new Node(sum % 10);
    headPointer = headPointer.next;
    pointer1 = pointer1 == null ? null : pointer1.next;
    pointer2 = pointer2 == null ? null : pointer2.next;
  }
  if (carrying > 0) headPointer.next = new Node(carrying);

  return head.next
}



//good to go -- Make LL!
let arr1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let arr2 = [5, 6, 4]
let curr = new Node(0);
let head = null;
let l1 = createLL(arr1);
let l2 = createLL(arr2);

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
console.log("list1 length = " + arr1.length)
console.log(sumLists(l1, l2));