JavaScript Execution Context
Execution context is the environment in which JavaScript code is executed.
It contains information about variables, functions, and the current state of the program.
Every time JavaScript runs code, it creates an execution context.

Types of Execution Context
JavaScript has three main types of execution contexts.

Global Execution Context
Created when the JavaScript program starts running
There is only one global execution context
All global variables and functions are created inside it

Function Execution Context
Created whenever a function is invoked
Each function call creates a new execution context
These contexts are pushed onto the call stack

Eval Execution Context
Created when code is executed inside the eval() function
Rarely used in modern JavaScript

Execution Context Phases
Every execution context is created in two phases.

1. Memory Creation Phase
Memory is allocated for variables and functions
Variables are initialized with undefined
Function declarations are stored completely in memory

2. Execution Phase
JavaScript executes code line by line
Variables receive their assigned values
Functions are executed when called

Call Stack
The call stack is a data structure used by JavaScript to manage execution contexts.
Characteristics:
Follows Last In First Out (LIFO) principle
Tracks which function is currently executing
Pushes execution contexts when functions are called
Pops execution contexts when functions finish execution

Key Points
JavaScript executes code using execution contexts
The global execution context is created first
Each function call creates a new execution context
The call stack manages the order of execution
JavaScript is single-threaded, meaning it executes one task at a time

Conclusion
Execution context and call stack are core concepts that explain how JavaScript executes code internally. Understanding these concepts helps developers better understand hoisting, closures, asynchronous behavior, and debugging.