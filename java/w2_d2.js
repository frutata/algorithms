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

    Contains(value)
    {
        /* Your Code Here */
        let node=this.root;
        while(node)
        {
            if(node.value==value) // is this your number?
            {
                return true;
            }
            
            if(value<node.value) // go left if smaller
            {
                node=node.left;
            }
            else // go right if bigger
            {
                node=node.right;
            }
        }
        return false;
    }

    ContainsRecursive(node,value)
    {
        /* Your Code Here */
        /* Call me recursively! */
        if(!node) return false;
        if(node.value==value) return true;
        return this.ContainsRecursive(value<node.value?node.left:node.right,value);
    }
};