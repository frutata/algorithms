class Node
{
    constructor(value)
    {
        this.next=undefined;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=undefined;
    }

    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }

    PushBack(value)
    {
        /* Your Code Here */
        if(!this.head)
        {
            this.head=new Node(value);
            return;
        }
        for(var node=this.head;node.next;node=node.next){}
        node.next=new Node(value);
    }

    PushBackN(arr)
    {
        /* Your Code Here */
        for(let value of arr) this.PushBack(value);
    }

    /* Determines whether the given value was found within the list */
    /* ( Returns a bool, true or false ) */

    /* value=40 */
    
    Contains(value)
    {
        /* Your Code Here */
        let node=this.head;
        while(node)
        {
            if(node.value==value)
            {
                return true;
            }
            node=node.next;
        }
        return false;
    }

    /* Recursively determines whether the given value was found within the list. */
    /* ( Returns a bool, true or false ) */

    /* node=10,20,30 */
    /* value=30 */
    ContainsRecursive(node,value)
    {
        /* Your Code Here */
        /* Call Me Recursively! */
        if(!node) return false;
        if(node.value==value) return true;
        return this.ContainsRecursive(node.next,value);
    }

    /* Removes and returns the last value in the list. */
    /* Treat me like array.pop() would */
    PopBack()
    {
        /* Your Code Here */
        let node=this.head;
        while(node.next)
        {
            node=node.next;
        }
        let value=node.value;
        node.next=undefined;
        return value;
    }
};