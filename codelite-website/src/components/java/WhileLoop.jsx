import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaWhileLoop() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Overview</h2>
            <p>The <code>while</code> loop in Java is a control flow statement that enables code to execute repeatedly based on a Boolean condition. Think of it as a repeating <code>if</code> statement. Use the <code>while</code> loop when you need to perform a task repeatedly without a predetermined number of iterations.</p>
        </section>

        <section>
            <h2>Syntax</h2>
            <p>The syntax for a <code>while</code> loop in Java is as follows:</p>
            <pre><code>while (test_expression) &#123;
    // statements
    update_expression;
&#125;</code></pre>
            <p><strong>Note:</strong> If you omit curly braces <code>&#123;&#125;</code> after <code>while(condition)</code>, the loop will only consider the immediately following statement as part of its block.</p>
            <pre><code>while (test_expression)
    // single statement in while only</code></pre>
        </section>

        <section>
            <h2>Components of the While Loop</h2>
            <p>The <code>while</code> loop consists of the following parts:</p>
            <ol>
                <li><strong>Test Expression:</strong> This condition is evaluated to determine if the loop should continue executing. If the condition is <code>true</code>, the loop body executes, followed by the update expression. If <code>false</code>, the loop terminates.</li>
                <li><strong>Update Expression:</strong> This expression modifies the loop variable after each iteration, typically by incrementing or decrementing it.</li>
            </ol>
            <p><strong>Example:</strong></p>
            <pre><code>i &#60;= 10
i++;</code></pre>
        </section>

        <section>
            <h2>Execution Flow of a While Loop</h2>
            <p>The execution of a <code>while</code> loop follows these steps:</p>
            <ol>
                <li>Control enters the <code>while</code> loop.</li>
                <li>The condition is evaluated.</li>
                <li>If the condition is <code>true</code>, the loop body executes.</li>
                <li>If the condition is <code>false</code>, the loop terminates.</li>
                <li>After the loop body executes, the update expression is applied.</li>
                <li>Control returns to the condition evaluation step.</li>
                <li>The loop ends when the condition is <code>false</code>.</li>
            </ol>
        </section>

        <section>
            <h2>Flowchart for While Loop</h2>
            <p>Here is a flowchart illustrating the control flow of a <code>while</code> loop:</p>
        </section>

        <section>
            <h2>Examples</h2>
            <p>Below is a simple example demonstrating the use of a <code>while</code> loop to print "Hello World" five times:</p>
            <pre><code>class WhileLoopDemo &#123;
    public static void main(String[] args) &#123;
        // Initialization
        int i = 1;

        // Test expression
        while (i &#60; 6) &#123;
            System.out.println("Hello World");

            // Update expression
            i++;
        &#125;
    &#125;
&#125;</code></pre>
            <h3>Output</h3>
            <pre><code>Hello World
Hello World
Hello World
Hello World
Hello World</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}