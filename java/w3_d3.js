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

    IsEmpty()
    {
        return this.head == undefined;
    }

    PushBack(value)
    {
        let node = new Node(value);
        let runner = this.head
        if (this.head == undefined){
            this.head = node;
        }
        else{
            while(runner.next){
                runner = runner.next
            }
            runner.next = node;
        }

    }

    PushBackN(arr)
    {
        for (let val of arr){
            this.PushBack(val)
        }
    }

    Iterate()
    {
        let str="";
        for(let node=this.head;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
    }

    /* Time:O(n) */
    /* Space:O(1) */
    /* Description: Iteratively reverses the linked list in-place. Don't make a new list. */
    /*
        Instructions (These go IN your loop):
        1. Store .next (The one AFTER your runner), because if you lose it, you can't go back.
        2. Set current's next to previous.
        3. Set previous to current
        4. Set current to step one's value. (The old next)
        5. Set head to previous (I go outside the loop when you're done).
    */
    Reverse()
    {
        if (this.head == undefined) return;
        if (this.head.next == undefined) return;
        let previous = undefined;
        let current = this.head;
        while(current){
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
};


let items=[10,20,30,40,50];
let list=new List();
list.PushBackN(items); /* Remember Me? Bring me back for this to work! */
list.Iterate(); // 10 , 20 etc
list.Reverse(); 
list.Iterate(); // 50, 40, etc