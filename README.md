A code becomes asynchronous with the help of the browser or whatever system the Javascript Engine is embedded in (NodeJS). In the 'Execution Stack', the Javascript Engine sets aside the function and the browser works on the task. Once the task is finish, the browser notifies the JavaScript Engine that the task is finished via 'Queue' and the function or callback is executed.

Promise
- A standardized approach that deals with asynchronous events and callbacks.
- Represents a value that comes back after the task is completed.
- Promise Object does not do any of the work, it just waits for the task to complete and figures out what to do after the task is completed.

Source: https://www.youtube.com/watch?v=fyGSyqEX2dw
