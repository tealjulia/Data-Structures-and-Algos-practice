class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

//reverse
function reverse (secondHalf){
  let node = secondHalf, prev, temp;

  while(node){
    temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  console.log(prev);

  return prev;
};

//compare
function compareLLs(head1, head2){
  let temp1 = head1;
  let temp2 = head2;

  while (temp1 && temp2){
    if(temp1.val == temp2.val){
      temp1 = temp1.next;
      temp2 = temp2.next;
    } else {
      return false;
    }
  }
  if (!temp1 && !temp2){
    return true;
  } 
  return false;
}


//main function
var isPalindrome = function(head) {
  if (!head || !head.next){
    return true;
  }

  let slow = head;
  let fast = head;
  let slowPrev = head;
  let center;
  let result = true;
    
  

  while (fast && fast.next){
    fast = fast.next.next;
    slowPrev = slow;
    slow = slow.next;
  }

  if (fast) {
    center = slow;
    slow = slow.next;
  }

  slowPrev.next = null;

  //flip secondHalf
  let secondHalf = slow;
  secondHalf = reverse(secondHalf);
  result = compareLLs(head, secondHalf);
  secondHalf = reverse(secondHalf);

  if(center){
    slowPrev.next = center;
    center.next = secondHalf;
  } else {
    slowPrev.next = secondHalf;
  }
  return result

};

//good to go -- Make LL!
let arr = [1, 2, 3, 3, 2];
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

console.log(isPalindrome(myList));