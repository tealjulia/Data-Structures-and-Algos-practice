class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}


var getIntersectionNode = function(headA, headB) {
  let countA = getLength(headA);
  let countB = getLength(headB);
  let diff = 0;
  
  if (countA>countB){
      diff = countA-countB;
      findIntersection(diff, headA, headB);
  } else if (countB>countA){
      diff = countB-countA;
      findIntersection(diff, headA, headB);
  }
  
  
      
};

function getLength (head){
  let curr = head;
  let count = 0;
  
  while (curr){
      count++;
      curr = curr.next;
  }
  return count;
};

function findIntersection(diff, head1, head2){
  let curr1 = head1;
  let curr2 = head2;
  for (let i =0; i<diff; i++){
      if(curr1 == null){
          return null;
      }
      curr1 = curr1.next;
  }
  
  while (curr1 !== null && curr2 !== null){
      if (curr1 == curr2){
          return curr1;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
  }
  return null;
  
}

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