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

    Iterate()
    {
        let str="";
        for(let node=this.head;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
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
    
    /* Add all nodes of the supplied list to this list */
    Concat(other_list)
    {
        /* Your Code Here */
    }

    /* Finds the node with the smallest value and moves it to the front. */
    MinToFront()
    {
        /* Your Code Here */
    }

    /* Split our list into two lists, where the second list starts with the node */
    /* that has the given value */
    Split(value)
    {
        /* Your Code Here */
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/

/* Creates our list */
let list=new List();
let list2=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([765,234,545,112]);
list2.PushBackN([65,567,433,656]);

list=list.Concat(list2);
list.Iterate();
/*
    Expected:765->234->545->112->65->567->433->656
*/
list.MinToFront();
list.Iterate();
/*
    Expected:65->765->234->545->112->567->433->656
*/
let split_list=list.Split(545);
list.Iterate();
split_list.Iterate();
/*
    Expected:65->765->234->
    Expected:545->112->567->433->656
*/

    // MinToFront(){
    // let runner = this.head; //start at the head
    //     if (runner == undefined) return; //Empty list
    //     let min = runner.value; //initialize min to the first value
    //     let minNode = runner; //initialize minNode to the first node
    //     while(runner.next){ //loop through the list
    //         if (runner.next.value < min){ //if the next value is smaller than the current min
    //             min = runner.next.value; //set the min to the next value
    //             minNode = runner.next; //set the minNode to the next node
    //         }
    //         runner = runner.next; //move to the next node
    //     }
    //     if (minNode == this.head){ //already at front
    //         return; //exit
    //     }
    //     runner = this.head; //reset runner to the head
    //     while(runner.next != minNode){ //loop through the list until the minNode is next
    //         runner = runner.next
    //     }
    //     runner.next = minNode.next; //remove the minNode from the list
    //     minNode.next = this.head; //add the minNode to the front of the list
    //     this.head = minNode; //set the head to the minNode

    // }