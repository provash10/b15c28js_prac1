let marks;
marks = 79;

marks = 102 || 0;  // invalid


if(marks > 100 || marks < 0){
    console.log('Invalid Marks');
}

else if(marks >= 80){
    console.log('The Grade is A+');
}

else if(marks >= 70){
    console.log('The Grade is A');
}

else if(marks >= 60){
    console.log('The Grade is A-');
}

else if(marks >= 50){
    console.log('The Grade is B');
}

else if(marks >= 40){
    console.log('The Grade is C');
}
else if(marks >= 33){
    console.log('The Grade is D');
}

else {
    console.log('Failed');
}

// =======================================

// Get the even or odd number..........
// number = 79
// number = 3457865    n/2= 0 hole even, 0 na hole odd.

let number = 3457865;
if(number % 2 == 0){
    console.log('Even');
}

else{
    console.log('Odd');
}

let number2 = 34574;
if(number2 % 2 == 0){
    console.log('Even');
}

else{
    console.log('Odd');
}

// 1. write a js program to find maximum between two numbers.

// number1 = 30;
// number2 = 40;

let number3 = 30;
let number4 = 40;

if(number3 > number4){
    console.log('Number3 is the largest');
}

else{
    console.log('Number4 is the largest');
}

// ===================================
// 2. write a js program to check whether a number is negative, positive or zero.
// -3 0 3
let numbers;
numbers = 40;

if(numbers > 0){
    console.log('Positive');
}

else if(numbers < 0){
    console.log('Negative');
}

else{
    console.log('Zero');
}
// ========================================
// 3. write a js program to check whether a number is divisible by 5 and 11 or not.

let nums1 =30;
if(nums1 % 5 == 0 && nums1 % 11 == 0){
    console.log('The number is divisilbe by 5 and 11');
}
else{
    console.log('The number is not divisilbe by 5 and 11');
}


// ===========================================

// 4. write a js program to check whether a year is leap year or not. years = 2033

let years;
years = 2033;

if(years % 4 == 0){
    console.log('Leap Year.');
}
else{
    console.log('Not Leap Year.');
}


