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

    /* Determine whether the list is empty. */
    IsEmpty()
    {
        // const obj = List;
        // // console.log(obj);
        // const empty = Object.keys(obj);
        // if(empty.length === 0){
        //     console.log("empty");
        // }
        // else{
        //     console.log("not empty");
        // }
        return this.head==undefined;
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        if(!this.head){
            this.head = new Node(value);
            return;
        }
        for(var node=this.head; node.next; node=node.next){}
        node.next = new Node(value);
        // this while loop does the same as the for loop
        // let node = this.head;
        // while(node.next){
        //     node=node.next;
        // }
        // node.next = new Node(value);
    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        for(let value of arr){
            this.PushBack(value);
        }
    }

    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }
};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=[111,222,333,444,555];

/* Create our list */
let list=new List();
//check to see if the list is empty
list.IsEmpty();
/* Insert nodes into the list: */
list.PushBack(test_data1);
list.PushBack(test_data2);
list.PushBack(test_data3);
//making sure our IsEmpty function works properly
list.IsEmpty();
/* Insert array of nodes into the list: */
list.PushBackN(test_data4);
/* Iterate our list, so we can see our node values */
list.Iterate(value=>console.log(value));
/* Expected output: */
/*
    123
    234
    345
    111
    222
    333
    444
    555
*/