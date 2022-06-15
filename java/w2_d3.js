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

    Insert(value)
    {
        /* Your Code Here */
        let node=this.root;
        while(node.left&&node.right)
        {
            if(value<node.value)
            {
                node=node.left;
            }
            else
            {
                node=node.right;
            }
        }
        if(value<node.value)
        {
            node.left=new BSTNode(value);
        }
        else
        {
            node.right=new BSTNode(value);
        }
    }

    InsertRecursive(node,value)
    {
        /* Your Code Here */
        /* CALL ME RECURSIVELY! */

        if(value<node.value)
        {
            if(!node.left)
            {
                node.left=new BSTNode(value);
                return;
            }
            this.InsertRecursive(node.left,value);
        }
        else
        {
            if(!node.right)
            {
                node.right=new BSTNode(value);
                return;
            }
            this.InsertRecursive(node.right,value);
        }
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
};