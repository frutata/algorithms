class MinHeap {
    constructor() {
        this.data = [null, 10, 40, 20, 60, 50, 30, 70];
    }

    /* Description: Extracts the min number in the heap and reorders it */
    /* so the next min is ready for extraction */
    /* Time: O(log n) */
    /* Space: O(1) */
    /*
        Instructions:
        1. Save the min.
        2. Pop last num and set it as the first index.
        3. Iteratively swap the old last node that is now at idx1 with it's
        smallest child IF the smallest child is smaller than it.
    */
    Extract() {
        let min = this.data[1]
        let last = this.data.pop();
        this.data[1] = last;
        let parentIdx = 1;
        while (parentIdx < this.data.length - 1) {
            let childA = 2 * parentIdx;
            let childB = (2 * parentIdx) + 1;
            let smaller = childA;
            if (childA >= this.data.length) {
                break;
            }
            if (childB < this.data.length) {
                if (this.data[childB] < this.data[childA]) {
                    smaller = childB;
                }
            }
            if (this.data[smaller] < this.data[parentIdx]) {
                let temp = this.data[smaller];
                this.data[smaller] = this.data[parentIdx];
                this.data[parentIdx] = temp;
                parentIdx = smaller;
            } else {
                break;
            }
        }
        return min;
    }

    Log() {
        let fmt = "";
        for (let i = 1; i < this.data.length; i++) {
            fmt += this.data[i] + ",";
        }
        fmt = fmt.substring(0, fmt.length - 1);
        console.log(fmt);
    }
};

let heap = new MinHeap();
console.log(heap.Extract()) /* Expected: 10 */
heap.Log(); /* Expected: 20,40,70,60,50,30 */