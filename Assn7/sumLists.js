class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

function sum(head){
  let curr = head;
  let sum = 0;
  let i = 0;

  while (curr) {
    sum += curr.val*Math.pow(10, i);
    curr=curr.next;
    i++;
  }
  console.log(sum);
  return sum
}

function strToLL(str){
  let ll, head;
  ll = null;

  for (let i=0; i<str.length; i++){
    head = new Node(str[i]);
    head.next = ll;
    ll = head;
  }
  return ll
}

function sumLists (l1, l2){
  let num1 = sum(l1);
  let num2 = sum(l2);

  // console.log(num1);
  // console.log(num2);

  let total = (num1+num2).toString();

  console.log(total);

  let result = strToLL(total)

  return result;
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