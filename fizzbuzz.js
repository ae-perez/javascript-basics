/*
Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
For numbers which are multiples of both three and five print FizzBuzz.
*/

function fizzbuzz(input) {
    let arr = [];
    for(let i = 1; i < input; i++) {
        if(i % 3 == 0) {
            arr.push(i + " fizz");
        }

        else if (i % 5 == 0) {
            arr.push (i + " buzz");
        } 

        else {
            arr.push (i);
        }

    }


    return console.log(arr); //change this
}

var input = 22;
console.log(fizzbuzz(input));

/*
Notes:
- starts at 1 
- ends at n
- multiples of 3 = fizz
- multiple of 5 = buzz
*/