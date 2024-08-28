import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaIfStatement() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Understanding Java if Statement with Examples</h2>
            <p>Decision-making in Java allows you to write conditional code that executes a specific block of code based on certain conditions. The Java <code>if</code> statement is the simplest form of decision-making in Java. It helps determine whether a specific block of statements should be executed or not based on a given condition.</p>
        </section>

        <section>
            <h2>Syntax</h2>
            <pre>
if(condition) 
&#123;
    // Statements to execute if
    // condition is true
&#125;
            </pre>
        </section>

        <section>
            <h2>How the if Statement Works</h2>
            <ul>
                <li>The control enters the <code>if</code> block.</li>
                <li>The flow moves to the condition.</li>
                <li>The condition is evaluated.</li>
                <li>If the condition is true, the code inside the <code>if</code> block is executed.</li>
                <li>If the condition is false, the code inside the <code>if</code> block is skipped.</li>
                <li>The control exits the <code>if</code> block.</li>
            </ul>
        </section>

        <section>
            <h2>Operation of if Statement</h2>
            <p>The condition in the <code>if</code> statement is evaluated as either true or false. The <code>if</code> statement in Java accepts boolean values. If the condition is true, the block of code within the <code>if</code> statement is executed.</p>
            <p><strong>Note:</strong> If curly braces <code>&#123;&#125;</code> are not provided, the <code>if</code> statement will consider only the immediate statement to be inside its block.</p>
        </section>

        <section>
            <h2>Example 1: Simple If Statement</h2>
            <pre>
// Java program to demonstrate If statement

class IfDemo &#123;
    public static void main(String args[]) &#123;
        int i = 10;

        if (i &#60; 15)
            System.out.println("10 is less than 15");

        System.out.println("Outside if-block");
        // Both statements will be printed
    &#125;
&#125;
            </pre>
            <p><strong>Output:</strong></p>
            <pre>
10 is less than 15
Outside if-block
            </pre>
        </section>

        <section>
            <h2>Example 2: If Statement with String and Integer</h2>
            <pre>
// Java program to illustrate If statement

class IfDemo &#123;
    public static void main(String args[]) &#123;
        String str = "Welcomebros";
        int i = 4;

        // if block
        if (i == 4) &#123;
            i++;
            System.out.println(str);
        &#125;

        // Executed by default
        System.out.println("i = " + i);
    &#125;
&#125;
            </pre>
            <p><strong>Output:</strong></p>
            <pre>
GeeksforGeeks
i = 5
            </pre>
        </section>

        <section>
            <h2>Example 3: Using if-else with Boolean Values</h2>
            <pre>
// Java program to illustrate If-else statement

public class IfElseExample &#123;
    public static void main(String[] args) &#123;
        boolean a = true;
        boolean b = false;
         
        if (a) &#123;
            System.out.println("a is true");
        &#125; else &#123;
            System.out.println("a is false");
        &#125;
         
        if (b) &#123;
            System.out.println("b is true");
        &#125; else &#123;
            System.out.println("b is false");
        &#125;
    &#125;
&#125;
            </pre>
            <p><strong>Output:</strong></p>
            <pre>
a is true
b is false
            </pre>
            <p>This example demonstrates the use of the <code>if-else</code> statement in Java with boolean values, allowing for conditional execution of code blocks.</p>
        </section>

        <section>
            <h2>Advantages of if-else Statement</h2>
            <ul>
                <li><strong>Conditional Execution:</strong> Allows code to be executed based on the result of a boolean expression.</li>
                <li><strong>Readability:</strong> Makes code more understandable by clearly indicating when a block of code should be executed.</li>
                <li><strong>Reusability:</strong> Code can be reused in different parts of the program, enhancing efficiency.</li>
                <li><strong>Debugging:</strong> Simplifies the debugging process by making it easier to trace issues in the code.</li>
                <li><strong>Flexibility:</strong> Provides a dynamic way to control the flow of a program based on varying conditions.</li>
            </ul>
        </section>
    </div>
    <Footer />
    </>
    );
}