//Q1
var a = 2;
var b = ++a * 2;
console.log(b); 
// b=6
 
//Q2
var x = 5;
var y = x-- + 2;
console.log(y);
// y=7

//Q3 
var x = 3;
var y = ++x + x++ + ++x;
console.log(y);
// y=14

//Q4 
var m = 2;
var n = ++m * m++ * --m;
console.log(n);
// n=27

//Q5
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log(result)
// result=8

//Q6
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log(p);
// m=2,n=4,p=10

//Q7
var a = 5;
var b = 3;
var c = 2;
var d = 7;

var result = ++a * (b-- + c) / --d;
console.log(result)

// a=5, b=3, c=2, d=7 ,result=8

//Q8
var m = 2;
var n = 3;
var o = 4;
var result = m++ * (--n + m) / (o-- - n);
console.log(result)
// m=2, o=4, n=3, result=5
 //complete Assignment 11 and all the Quetiion Solve


