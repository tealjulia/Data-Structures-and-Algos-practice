var nthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  
  while (n-1>0){
      fast = fast.next;
      n--;
  }
  
  while (fast.next){
      fast = fast.next;
      slow = slow.next;
  }
  
  return slow;
  
};
