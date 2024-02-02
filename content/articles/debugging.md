---
title: Debugging
published: 2024-01-17
---

Debugging is the process of finding and fixing errors or bugs in the source code of any software. When software does not work as expected, computer programmers study the code to determine why any errors occurred. They use debugging tools to run the software in a controlled environment, check the code step by step, and analyze and fix the issue.

| Action               | Explanation                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Continue / Pause  F5 | Continue: Resume normal program/script execution (up to the next breakpoint).  Pause: Inspect code executing at the current line and debug line-by-line.            |
| Step Over  F10       | Execute the next method as a single command without inspecting or following its component steps.                                                                    |
| Step Into  F11       | Enter the next method to follow its execution line-by-line.                                                                                                         |
| Step Out  ⇧F11       | When inside a method or subroutine, return to the earlier execution context by completing remaining lines of the current method as though it were a single command. |
| Restart  ⇧⌘F5        | Terminate the current program execution and start debugging again using the current run configuration.                                                              |
| Stop  ⇧F5            | Terminate the current program execution.                                                                                                                            |



- https://code.visualstudio.com/docs/editor/debugging
- https://learn.microsoft.com/en-us/visualstudio/debugger/using-breakpoints?view=vs-2022

## Breakpoint

A breakpoint is an intentional stopping or pausing place in a program, put in place for debugging purposes. It is also sometimes simply referred to as a pause.

## Tracepoint

A tracepoint is a breakpoint that prints a message to the Output window. A tracepoint can act like a temporary trace statement in the programming language and does not pause the execution of code. You create a tracepoint by setting a special action in the Breakpoint Settings window.
