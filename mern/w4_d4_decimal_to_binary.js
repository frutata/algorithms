//https://www.rapidtables.com/convert/number/decimal-to-binary.html

//create a function that will accept a number and output the binary version of that number

const NumberToBinary = (num, x = 0) => {
    temp = num % 2
    num = Math.floor(num/2)
    if (num == 0 && temp == 0){
        x = x.toString().split('').reverse().join('')
        return x
    }
    else{
        if (x == 0){
            return NumberToBinary(num, temp)
        }
        else{
            //concat
            x = x.toString() + temp.toString()
            x = parseInt(x)
            return NumberToBinary(num, x)
        }
    }
}