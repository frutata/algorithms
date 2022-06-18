class BSTNode
{
    constructor(value)
    {
        this.left=undefined;
        this.right=undefined;
        this.value=value;
    }
};

class BST
{
    constructor()
    {
        this.root=undefined;
    }

    /* I'm just here to print your BST In-Order. */
    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }

    /* Time Complexity: O(N) */
    /* Description: Count and return the total number of nodes in the tree */
    Size(node)
    {
        if(!node) return 0;
        /* Call me recursively */
        return 1+this.Size(node.left)+this.Size(node.right);
    }

    /* Time Complexity: O(N) */
    /* Description: Count and return the furthest path from root to leaf node */
    Height(node)
    {
        if(!node) return 0;
        let left=this.Height(node.left)+1;
        let right=this.Height(node.right)+1;
        return left>right?left:right;
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();
bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);
bst.root.right=new BSTNode(150);
bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

// console.log(bst.Size(bst.root));     /* Expected: 7 */
console.log(bst.Height(bst.root));     /* Expected: 3 */