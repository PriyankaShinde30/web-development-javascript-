JavaScript Functions

Functions are reusable blocks of code used to perform a specific task.

Why Functions Are Important

Help organize code

Reduce repetition

Improve readability

Make programs modular and reusable

Function Declaration

Defined using the function keyword

Has a function name

Can be called multiple times

Hoisted, meaning it can be used before its declaration

Commonly used for defining main program logic

Function Expression

A function stored inside a variable

The function can be named or anonymous

Not hoisted

Cannot be called before it is defined

Useful when functions need to be treated like values

Anonymous Functions

Functions without a name

Often used as callbacks

Common in asynchronous operations

Used inside methods like:

setTimeout

setInterval

Event handlers

Arrow Functions

Introduced in ES6

Provide a shorter syntax for writing functions

Commonly used in modern JavaScript

Often used for:

callbacks

functional programming

Do not have their own this binding

First-Class Functions

JavaScript treats functions as first-class citizens, which means:

Functions can be assigned to variables

Functions can be passed as arguments

Functions can be returned from other functions

This allows JavaScript to support functional programming patterns.

Higher Order Functions

A higher order function is a function that:

Takes another function as an argument, or

Returns another function

Benefits:

Makes code more reusable

Allows separation of logic

Used in many JavaScript methods like:

map()

filter()

reduce()

Immediately Invoked Function Expression (IIFE)

A function that runs immediately after it is defined

Used to create a private scope

Prevents variables from polluting the global scope

Commonly used in older JavaScript patterns

Key Takeaways

Functions are fundamental building blocks of JavaScript

JavaScript provides multiple ways to define functions

Functions can be passed around like values

Higher order functions enable powerful programming patterns

IIFE helps isolate variables and avoid global scope pollution