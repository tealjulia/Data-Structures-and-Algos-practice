class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

var mergeLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeLists(l1, l2.next);
    return l2
  }
 
};


let arr1 = [0, 2,];
let arr2 = [1, 3]
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

console.log(mergeLists(l1, l2));
