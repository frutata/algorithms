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

    IsEmpty()
    {
        /* Your Code Here */
        return this.root==undefined;
    }

    Min()
    {
        /* Your Code Here */
        let node=this.root;
        while(node.left)
        {
            node=node.left;
        }
        return node.value;
    }

    MaxR(node)
    {
        if(!node.right) return node.value;
        return this.MaxR(node.right);
    }

    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();
console.log(bst.IsEmpty())             /* Expected: true */

bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.right=new BSTNode(150);

bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);

bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

// console.log(bst.Log(bst.root)); /* Uncomment me if you want to see your tree */
console.log(bst.IsEmpty())            /* Expected: false */
console.log(bst.MinR(bst.root));   /* Expected: 25 */
console.log(bst.MaxR(bst.root));   /* Expected: 175 */