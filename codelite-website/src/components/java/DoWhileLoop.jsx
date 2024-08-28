import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaDoWhileLoop() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, loops are used to execute a block of statements repeatedly. The Java `do-while` loop is known as an exit-controlled loop, meaning that it evaluates its condition after executing the statements within the loop body. This ensures that the loop body is executed at least once regardless of the condition.</p>
        </section>
        
        <section>
            <h2>Syntax</h2>
            <p>The syntax of a `do-while` loop in Java is as follows:</p>
            <pre><code>do &#123;
    // Loop Body
    Update_expression
&#125; while (test_expression);</code></pre>
            <p><strong>Note:</strong> The <code>test_expression</code> must return a boolean value. Otherwise, a compile-time error will occur.</p>
        </section>
        
        <section>
            <h2>Applications</h2>
            <p>The `do-while` loop is particularly useful when you need to ensure that a block of code is executed at least once. For instance, it is commonly used for displaying a menu to users where the menu should be shown at least once before any user input is processed.</p>
            <p><strong>Example Application:</strong> In a game, you might display a menu with options for the user to select (e.g., press 1 to do this, press 2 to do that, or press 'Q' to quit). You want to show this menu at least once, which makes the `do-while` loop an appropriate choice.</p>
        </section>
        
        <section>
            <h2>Illustration</h2>
            <p>Here’s a Java program demonstrating the use of the `do-while` loop to ensure that the loop body executes at least once:</p>
            <div class="example">
                <pre><code>// Java Program to Illustrate One-Time Iteration
// Inside do-while Loop

public class Main &#123;
    public static void main(String[] args) &#123;
        int i = 0;
        do &#123;
            System.out.println("Print statement");
            i++;
        &#125; while (i &#60; 0);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Print statement</code></pre>
            </div>
            <p><strong>Explanation:</strong> In this example, the loop body executes at least once before the condition is evaluated. This ensures that the message "Print statement" is printed to the console, even though the condition <code>i &#60; 0</code> is false.</p>
        </section>
        
        <section>
            <h2>Components of a do-while Loop</h2>
            <ul>
                <li><strong>Test Expression:</strong> This expression determines whether the loop will continue executing. If the expression evaluates to <code>true</code>, the loop body executes. If it evaluates to <code>false</code>, the loop exits. For example: <code>i &#60;= 10</code>.</li>
                <li><strong>Update Expression:</strong> After each iteration, this expression updates the loop variable. For instance: <code>i++</code>.</li>
            </ul>
        </section>
        
        <section>
            <h2>Execution Flow</h2>
            <p>The execution of a `do-while` loop follows these steps:</p>
            <ol>
                <li>The control enters the `do-while` loop.</li>
                <li>The statements inside the loop body are executed.</li>
                <li>The update expression is processed.</li>
                <li>The loop condition is evaluated.</li>
                <li>If the condition is <code>true</code>, the loop continues from step 2. If <code>false</code>, the loop exits.</li>
            </ol>
        </section>
        
        <section>
            <h2>Example Program</h2>
            <p>Below is an example of a `do-while` loop that prints "Hello World" five times:</p>
            <div class="example">
                <pre><code>// Java Program to Illustrate Do-while Loop

public class Main &#123;
    public static void main(String args[]) &#123;
        int i = 1;
        do &#123;
            System.out.println("Hello World");
            i++;
        &#125; while (i &#60; 6);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Hello World
Hello World
Hello World
Hello World
Hello World</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}