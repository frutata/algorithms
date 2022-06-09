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
        for(let value of arr) this.PushBack(value);
    }

    SecondToLast()
    {
        /* Your Code Here */
        let node=this.head;
        while(node.next.next)
        {
            node=node.next;
        }
        return node.value;
    }

    RemoveValue(value) /* 3 */
    {
        /* Your Code Here */
        let node=this.head;
        let prev=null;
        while(node)
        {
            if(node.value==value)
            {
                prev.next=prev.next.next;
                node.next=undefined;
                return;
            }
            prev=node;
            node=node.next;
        }
    }

    Prepend(new_value,search_value)
    {
        /* Your Code Here */
        let node=this.head;
        let prev=undefined;
        while(node)
        {
            if(node.value==search_value)
            {
                let old_list=node;
                prev.next=new Node(new_value);
                prev.next.next=old_list;
            }
            prev=node;
            node=node.next;
        }
    }
};

let list=new List();

list.PushBackN([111,222,333,444,555,666]);

list.Prepend(333,444);

list.Iterate(value=>console.log(value));