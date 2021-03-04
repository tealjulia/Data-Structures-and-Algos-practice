/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var middleNode = function(head) {
    
    
  let slow = head,
     fast = head;
  
  while (fast !== null && fast.next !== null){
      fast = fast.next;
      fast = fast.next;
      slow = slow.next;
  }
  return slow;
};