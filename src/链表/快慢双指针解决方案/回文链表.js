/**
 * 
 * @param {*} head 
 * @returns 
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 输入：head = [1,2,2,1] 输出：true 输入：head = [1,2] 输出：false
 */
// 其一，find mid node 使用快慢指针找到链表中点。找中间节点，让快指针走两步
// 其二，reverse 逆序后半部分。
// 其三，check 从头、中点，开始比较是否相同。
var isPalindrome = function(head) {
    let slow = head
    let fast = head
    let pre = null
    // 根据快慢指针，找到中间节点或者前半部分链表的尾节点（注意判断条件） 
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next //找中间节点，让快指针走两步
    }
    // 反转后半部分 要实现 O(n) 的时间复杂度和 O(1) 的空间复杂度，需要翻转后半部分
    while(slow) {
        let next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }
    // 检查
    while(head && pre) {
        if(head.val !== pre.val) return false
        head = head.next
        pre = pre.next
    }
    return true
  };
  function isPalindrome(head) {
    let slow = head; fast = head; pre = null
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    while(slow) {
        let next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }
    while(head && pre) {
        if(head.val !== pre.val) return false
        head = head.next
        pre = pre.next
    }
    return true
  }

  // 解法二：因为是回文所以链表反过来和正过来一模一样，可以用stack做，很方便
  class Solution {
    public boolean isPalindrome(ListNode head) {
        Stack<Integer> stack=new Stack<Integer>();
        ListNode cur=head;
        while(cur!=null){
            stack.push(cur.val);
            cur=cur.next;
        }
        while(head!=null){
            if(stack.pop()!=head.val)
                return false;
            head=head.next;
        }
        return true;
    }
}