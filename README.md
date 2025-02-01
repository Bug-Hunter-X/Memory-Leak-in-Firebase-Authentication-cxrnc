# Firebase Authentication Unsubscribe Issue

This repository demonstrates a common error in Firebase Authentication: forgetting to unsubscribe from the `onAuthStateChanged` listener.

Failing to unsubscribe leads to a memory leak, as the listener continues to run even after the component or function it's used in is unmounted or no longer needed. This can cause performance degradation and other issues.

The `authBug.js` file shows the incorrect code, while `authSolution.js` provides the corrected version.

## How to Reproduce

1. Clone this repository.
2. Run `authBug.js` (you'll need to set up a Firebase project and configure authentication).
3. Observe that resources are not released properly.
4. Replace with `authSolution.js`. The solution properly unsubscribes from the listener.

## Solution

Always unsubscribe from Firebase listeners using the returned unsubscribe function when the listener is no longer needed.