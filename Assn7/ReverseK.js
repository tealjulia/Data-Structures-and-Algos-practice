class Node {
  constructor(val, next){
    this.val = val;
    this.next = null;
  }
}

function reverseKNodes(head, k){
  let current = head;
  let nextNode, prevNode = null;
  let count = 0;

  while (current && count < k){
    nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
    count ++;
  }

  while(current){
    count = 0;
    prevNode.next = reverseKNodes(current, k);
  }
  return prevNode;

}

