# Unexpected State Value After setState in React

This example demonstrates a common mistake when using the `useState` hook in React.  The problem lies in the assumption that the state updates synchronously.  After calling `setCount(count + 1)`, the value of `count` is not immediately updated; it occurs later in the next render cycle.  This leads to unexpected values being used in subsequent operations within the same `useEffect` or event handler.

## Bug
The `bug.js` file shows how an attempt to use the updated value of `count` directly after calling `setCount` results in accessing the previous state value. The `console.log` output will be incorrect.

## Solution
The `bugSolution.js` file corrects this by avoiding the direct use of the updated state. We use a functional update instead to access the latest state value or wait for the next render cycle using `useEffect` to ensure the state is updated before logging it.