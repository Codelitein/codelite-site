import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaExceptions() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>What is an Exception?</h2>
            <p>An exception refers to an "exceptional event" that disrupts the normal flow of program execution. Specifically, an exception is an event that arises during the execution of a program and interrupts its usual sequence of instructions.</p>
            <p>When an error occurs in a method, it generates an object, known as an exception object, which is handed off to the runtime system. This object holds details about the error, such as its type and the state of the program when the error occurred. This process of creating and passing an exception object is termed "throwing an exception."</p>
            <p>After a method throws an exception, the runtime system tries to find a suitable handler by examining the call stack—a list of methods called to reach the method where the error occurred. The runtime system searches through the call stack in reverse order, starting from the method where the error happened.</p>
            <div class="figure">
                <p>The call stack</p>
            </div>
            <p>The runtime system looks for a method with an exception handler—a block of code that can manage the exception. If an appropriate handler is found, the exception is passed to it. If no suitable handler is found, the thread encountering the error terminates. If this thread is the main thread, the program ends as well.</p>
            <div class="figure">
                <p>Searching the call stack for the exception handler</p>
            </div>
            <p>Utilizing exceptions to manage errors has several advantages compared to traditional error-handling methods. More details can be found in the section on <a href="#advantages">Advantages of Exceptions</a>.</p>
        </section>

        <section id="catch-or-specify-requirement">
            <h2>The Catch or Specify Requirement</h2>
            <p>In Java, code that may throw certain exceptions must adhere to the "Catch or Specify Requirement." This requires that such code be enclosed within:</p>
            <ul>
                <li><strong>A try statement:</strong> The try block should catch the exception and provide a handler for it, as detailed in <a href="#catching-handling">Catching and Handling Exceptions</a>.</li>
                <li><strong>A method declaration:</strong> The method must include a <code>throws</code> clause listing the exception it might throw, as discussed in <a href="#specifying-exceptions">Specifying the Exceptions Thrown by a Method</a>.</li>
            </ul>
            <p>Code that does not comply with this requirement will not compile.</p>
            <p>However, not all exceptions are subject to this requirement. To understand why, we need to explore the three primary categories of exceptions, each with different requirements.</p>
        </section>

        <section id="types-of-exceptions">
            <h2>The Three Types of Exceptions</h2>
            <p>Exceptions in Java can be categorized into three types:</p>
            <ol>
                <li><a href="#checked-exceptions">Checked Exceptions</a></li>
                <li><a href="#errors">Errors</a></li>
                <li><a href="#runtime-exceptions">Runtime Exceptions</a></li>
            </ol>
        </section>

        <section id="checked-exceptions">
            <h3>Checked Exceptions</h3>
            <p>Checked exceptions are conditions that a well-designed application should anticipate and handle. For example, if an application prompts a user to input a file name and then tries to open that file using <code>java.io.FileReader</code>, the constructor might throw a <code>java.io.FileNotFoundException</code> if the file does not exist. A robust application will catch this exception and alert the user, potentially asking for a new file name.</p>
            <p>Checked exceptions are subject to the Catch or Specify Requirement. All exceptions are checked exceptions, except for those indicated by <code>Error</code>, <code>RuntimeException</code>, and their subclasses.</p>
        </section>

        <section id="errors">
            <h3>Errors</h3>
            <p>Errors represent issues external to the application that it usually cannot anticipate or handle. For example, if an application successfully opens a file but encounters a hardware or system failure while reading it, a <code>java.io.IOError</code> might be thrown. While the application may catch this exception to notify the user, it may also be appropriate to print a stack trace and exit.</p>
            <p>Errors are not subject to the Catch or Specify Requirement and include exceptions indicated by <code>Error</code> and its subclasses.</p>
        </section>

        <section id="runtime-exceptions">
            <h3>Runtime Exceptions</h3>
            <p>Runtime exceptions are internal issues that an application typically cannot foresee or recover from, often indicating programming errors. For instance, if an application passes a null value to the constructor for <code>FileReader</code>, a <code>NullPointerException</code> will be thrown. While catching such exceptions is possible, it is usually better to correct the underlying bug.</p>
            <p>Runtime exceptions are not subject to the Catch or Specify Requirement and include exceptions indicated by <code>RuntimeException</code> and its subclasses.</p>
            <p>Errors and runtime exceptions collectively fall under the category of unchecked exceptions.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}