//Ex1 :  Write a function that takes an array of integers as input, iterates over the array, and returns a new array.
//The returned array should contain the result of raising 2 to the power of the original input element.
//For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
//Use for and forEach and then map to solve this question to see the difference between the three ways
function twoToThePower(intArray) { 
    let poweredArray = [];
    // // for loop
    // for (let i = 0; i < intArray.length; i++)
    //     poweredArray[i] = Math.pow(2,intArray[i]);

    // // foreach(1)
    // intArray.forEach(element => {
    //     poweredArray.push (Math.pow(2,element));
    // });
    // // foreach(2)
    // intArray.forEach((element,index) => {
    //     poweredArray[index] =  Math.pow(2,element);
    // });

    // //Map (1)
    poweredArray = intArray.map(num => Math.pow(2, num))
    // // OR
    // return intArray.map(num => Math.pow(2,num))
    return poweredArray;
}
let testArray = [1,2,3]
console.log(twoToThePower(testArray));

//Ex2:  Write a function that takes an array of numbers as input, 
//uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
//If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
//For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].

function oddOrEven(intArray) {
    let oddEvenArray = intArray.map(element =>
    {
        if (!isNaN(element))
            if (element % 2 === 0)
                return "even";
            else
                return "odd";
        else
            return "N/A";
    });
    return oddEvenArray;
}
testArray = [1, 2, 3, "Rawan"];
console.log(oddOrEven(testArray));

//Ex3: Use forEach to  Return all the names in the array  [“Rawan", "Wesam", "Hind", "Muhammad", "Esraa", “Dareen”] using loops.
namesArray = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
namesArray.forEach(name => console.log(name));

//EX4: Write a function named fizzbuzz that takes in an array of numbers.
//Iterate over the array using forEach or map to determine the output based on several rules:
//  - If a number is divisible by 3, add the word "Fizz" to the output array.
//  - If the number is divisible by 5, add the word "Buzz" to the output array.
//  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//  - Otherwise, add the number to the output array.
//Return the resulting output array.


function fizzbuzz(intArray) {
    return intArray.map(num =>
    // {
    //     if (num % 5 === 0 && num % 3 === 0)
    //         return "Fizz Buzz";
    //     else if (num % 5 === 0)
    //         return "Buzz";
    //     else if (num % 3 === 0)
    //         return "Fizz";
    //     else
    //         return num;
    // }
        num % 3 === 0 && num % 5 === 0 ? "Fizz Buzz" :
        num % 3 === 0 ? "Fizz" :
        num % 5 === 0 ? "Buzz" :
        num
    );
}
fizzbuzzTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,15];
console.log(fizzbuzz(fizzbuzzTest));