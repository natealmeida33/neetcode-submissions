/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    mergeTwoLinkedLists(listA, listB) {
        // You need:
        // 1. A way to track your position in each list
        // 2. A dummy node to build your result
        // 3. A tail pointer to append nodes
        // 4. A loop that compares listA.val with listB.val
        // 5. Attach the smaller node and move that pointer
        // 6. Handle leftovers when one list is exhausted
        const dummy = new ListNode();
        let tail = dummy;

        while (listA && listB) {
            if (listA.val < listB.val) {
                tail.next = listA;
                listA = listA.next;
            } else {
                tail.next = listB;
                listB = listB.next;
            }
            tail = tail.next;
        }

        while (listA) {
            tail.next = listA;
            listA = listA.next;
            tail = tail.next;
        }
        while (listB) {
            tail.next = listB;
            listB = listB.next;
            tail = tail.next;
        }

        return dummy.next;
    }
 
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            const mergedLists = [];
            for (let i = 0; i < lists.length; i+=2) {
                const listA = lists[i];
                const listB = lists[i + 1];
                mergedLists.push(this.mergeTwoLinkedLists(listA, listB));
            }

            lists = mergedLists;
        }

        return lists[0];
    }
}
