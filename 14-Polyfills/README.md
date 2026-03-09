JavaScript Polyfills
Polyfills are custom implementations of JavaScript features that replicate the behavior of built-in methods. They are commonly used to provide support for features that may not be available in older JavaScript environments or browsers.
Implementing polyfills helps developers understand how core JavaScript methods work internally and how language features can be recreated using fundamental JavaScript concepts.
This section includes polyfills for:
    Function methods (call, apply, bind)
    Array methods (map, filter, reduce, forEach, find)
    Promise utilities
    Event Emitter pattern
    Retry mechanism
    Custom setInterval implementation

Function Method Polyfills
JavaScript provides built-in methods that allow functions to control their execution context.

call()
Invokes a function with a specified this context.
Arguments are passed individually.
Executes the function immediately.

apply()
Similar to call().
Arguments are passed as an array.
Executes the function immediately with a specified context.

bind()
Returns a new function with a permanently bound this context.
Does not execute immediately.
Useful for creating reusable bound functions.
Array Method Polyfills
Array methods provide powerful ways to iterate and transform data.

map()
Creates a new array by applying a callback function to each element.
Returns a transformed array.
Does not modify the original array.

filter()
Creates a new array containing elements that satisfy a condition.
Executes a callback for each element.
Returns only elements that pass the test.

reduce()
Reduces an array to a single value.
Uses an accumulator to combine values.
Executes a reducer function on each element.

forEach()
Executes a callback function for each array element.
Used for iteration.
Does not return a new array.

find()
Returns the first element that satisfies a given condition.
Stops searching once a match is found.
Returns undefined if no element matches.

Promise Polyfills
Promise utilities manage multiple asynchronous operations.
Custom implementations demonstrate how the following behaviors work internally:
Promise.all()
Promise.any()
Promise.allSettled()
Promise.race()
These utilities coordinate multiple promises and resolve results based on different conditions.

Promise.finally()
The finally() method executes logic after a promise settles.
Characteristics:
Runs after a promise is either resolved or rejected.
Does not change the resolved value or rejection reason.
Useful for cleanup tasks such as closing resources or stopping loaders.

Event Emitter
The Event Emitter pattern allows applications to implement event-driven communication.
Characteristics:
Enables components to emit and listen for events.
Allows multiple listeners for the same event.
Widely used in systems such as Node.js.
Event emitters help decouple different parts of an application.

Retry Function
Retry logic allows a function to be executed multiple times until it succeeds or the retry limit is reached.
Characteristics:
Useful for unstable operations like network requests.
Improves reliability of asynchronous tasks.
Stops retrying after a specified number of attempts.

setInterval Polyfill
A custom implementation of setInterval() demonstrates how repeated execution can be simulated using setTimeout().
Characteristics:
Repeatedly schedules a function to run after a specified delay.
Mimics the behavior of the native setInterval function.
Helps understand how timers work internally.

Why Polyfills Are Important
Polyfills help developers:
Understand how built-in JavaScript methods work internally
Support older environments that lack modern features
Strengthen problem-solving and debugging skills
Gain deeper knowledge of JavaScript behavior

Key Takeaways
Polyfills recreate built-in JavaScript functionality manually.
Function polyfills control execution context.
Array method polyfills demonstrate iteration and transformation.
Promise polyfills explain asynchronous coordination.
Event emitters enable event-driven architecture.
Retry logic and timer polyfills demonstrate practical utility patterns.

Conclusion
Implementing polyfills provides deeper insight into how JavaScript features are built internally. By recreating core methods manually, developers gain a stronger understanding of the language and improve their ability to design efficient and reliable JavaScript applications.