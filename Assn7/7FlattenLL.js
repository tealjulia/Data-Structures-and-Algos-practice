// CASE 1: if null -- just return the ll
// CASE 2: if no down and no next -- just return it
// CASE 3: if no child but does have next, just move next
// CASE 4: if down, no next -- flatten the down then return
// CASE 5: if child and next -- flatten, then connect with next, then go next.

class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
    this.bottom = null;
  }
}





// Create LL from array

let arr = [0, [0, 1, 2], [4, 3, 6, 7]];
let curr = new Node(0);
let head = null;
let myList = createLL(arr);

function createLL(arr){
  let ll, head;
  ll = null;
  let newNode;
  let temp;

  for (let i=0; i<arr.length; i++){
    if(!arr[i][1]){
      newNode = new Node(arr[i]);
      // console.log(newNode);

    } else if(arr[i].length > 1) {
        newNode = new Node(arr[i][0]);
        let newNodeBottom = new Node(arr[i][1]);
        newNode.bottom = newNodeBottom;
        let temp = newNodeBottom;  
        j = 2;

          while(arr[i][j]) {
            const nestedNode = new Node(arr[i][j]);
            temp.next = nestedNode;
            temp = nestedNode;
            j++;
          }
      }
    if(!head) {
      head = newNode;
      temp = newNode;
    } else {
      temp.next = newNode;
      temp = newNode;
    }
    }



  

  console.log(head)
  return head
}

// console.log(flatten(myList));