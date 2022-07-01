class PNode
{
    constructor(priority,value)
    {
        this.priority=priority;
        this.value=value;
        this.previous=undefined;
        this.next=undefined;
    }
};

class PQueue
{
    constructor()
    {
        this.head=undefined;
        this.tail=undefined;
    }

    Enqueue(priority,value)
    {
        if(!this.head)
        {
            this.head=new PNode(priority,value);
            this.tail=this.head;
            return;
        }
        this.tail.next=new PNode(priority,value);
        this.tail.next.previous=this.tail;
        this.tail=this.tail.next;
        let node=this.tail.previous;
        while(node&&node.priority>node.next.priority)
        {
            let np=node.priority;
            let nv=node.value;
            node.priority=node.next.priority;
            node.value=node.next.value;
            node.next.priority=np;
            node.next.value=nv;
            node=node.previous;
        }
    }

    Dequeue()
    {
        if(!this.head) return;
        let head=this.head.value;
        this.head=this.head.next;
        if(this.head) this.head.previous=undefined;
        return head;
    }
};
let pqueue=new PQueue();
pqueue.Enqueue(4,"bob");
pqueue.Enqueue(2,"ellen");
pqueue.Enqueue(1,"mary");
pqueue.Enqueue(3,"jim");
// pqueue.Enqueue(1,"Ike Godsey");

// let node=pqueue.head;
// for(;node;node=node.next)
// {
//     console.log(node.priority,node.value);
// }
// console.log(pqueue.Dequeue()+pqueue.Dequeue()); /* Expected: maryellen */
// console.log(pqueue.Dequeue()+pqueue.Dequeue()); /* Expected: jimbob */