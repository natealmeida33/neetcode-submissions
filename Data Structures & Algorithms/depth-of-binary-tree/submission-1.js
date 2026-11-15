/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        const dfs = (node, max) => {
            if (!node || (!node.left && !node.right)) return max;

            const left = dfs(node.left, max + 1);
            const right = dfs(node.right, max + 1);

            return Math.max(left, right);      
        }

        return dfs(root, 1);
    }
}
