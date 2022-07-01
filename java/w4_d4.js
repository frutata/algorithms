class Node
{
	constructor(value)
	{
		this.value=value;
		this.next=undefined;
		this.previous=undefined;
	}
};

class Queue
{
	constructor()
	{
		this.head=undefined;
		this.tail=undefined;
		this.length=0;
	}

	Enqueue(value)
	{
		if(!this.head)
		{
			this.head=new Node(value);
			this.tail=this.head;
			this.length++;
			return;
		}
		this.tail.next=new Node(value);
		this.tail.next.previous=this.tail;
		this.tail=this.tail.next;
		this.length++;
	}

	/******************************************************************************
	* Name: Queue.SumHalves()
	* Description: Whether the sum of the first half of the queue is equal to the sum of the second half.
	******************************************************************************/
	SumHalves()
	{
		let node=this.head;
		let sum1=0;
		let sum2=0;
		let i=0;
		while(node)
		{
			if(i<this.length/2)
			{
				sum1+=node.value;
			}
			else if(i>=this.length/2)
			{
				sum2+=node.value;
			}
			node=node.next;
			i++;
		}
		return sum1==sum2;
	}

	Log()
	{
		let str="";
		for(var node=this.head;node;node=node.next)
		{
			str+=node.value+"->";
		}
		console.log(str);
	}
};

class Stack
{
	constructor()
	{
		this.top=undefined;
	}

	Push(value)
	{
		if(!this.top)
		{
			this.top=new Node(value);
			return;
		}
		let top=this.top;
		this.top=new Node(value);
		this.top.next=top;
	}

	Pop()
	{
		if(!this.top) return;
		let value=this.top.value;
		this.top=this.top.next;
		return value;
	}
};

class TwoStackQueue
{
	constructor()
	{
		this.stack1=new Stack();
		this.stack2=new Stack();
	}
	Enqueue(value)
	{
		/* Your Code Here */
		this.stack1.Push(value);
	}
	Dequeue()
	{
		while(this.stack1.top)
		{
			let top=this.stack1.Pop(); /* 40, 30, 20, 10 */
			this.stack2.Push(top);
		}
		let value=this.stack2.Pop();


		while(this.stack2.top)
		{
			this.stack1.Push(this.stack2.Pop());
		}

		/* Your Code Here */
		return value;
	}
};

let items1=[10,20,30,10,30,20,123];
let twoStackQueue=new TwoStackQueue();

for(let i=0;i<items1.length;i++)
{
	twoStackQueue.Enqueue(items1[i]);
}

console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
twoStackQueue.Enqueue(123);
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());