import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaBreakKeyword() {
    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>Introduction to the Break Statement</h2>
        <p>The <code>break</code> statement in Java is a loop control mechanism used to exit from a loop prematurely. When the <code>break</code> statement is encountered, it immediately terminates the loop and transfers control to the statement following the loop.</p>
        <p>Syntax:</p>
        <pre><code>break;</code></pre>
        <p>Typically, <code>break</code> is used when the exact number of iterations is uncertain or when a specific condition requires the loop to be terminated early.</p>
    </section>

    <section>
        <h2>Using Break in Switch Statements</h2>
        <p>The <code>break</code> statement is also commonly used to exit a <code>switch</code> statement. Without it, the execution would continue into the subsequent cases, potentially leading to unintended results.</p>
        <pre><code>import java.io.*;

// Use of break statement in switch
public class Main &#123;
    public static void main (String[] args) &#123;
        int n = 2;
        switch(n)&#123;
            case 1: 
                System.out.println("First case");
                break;
            case 2:
                System.out.println("Second case");
                break;
            default:
                System.out.println("default case");
        &#125;
    &#125;
&#125;</code></pre>
        <p>Output:</p>
        <pre><code>Second case</code></pre>
    </section>

    <section>
        <h2>Breaking Out of a Loop</h2>
        <p>The <code>break</code> statement can be used to terminate a loop immediately, skipping the loop's conditional expression and any remaining code in the loop's body. It is important to note that if <code>break</code> is used within nested loops, only the innermost loop is exited.</p>
        <pre><code>class BreakLoopDemo &#123;
    public static void main(String args[]) &#123;
        for (int i = 0; i &#60; 10; i++) &#123;
            if (i == 5)
                break;
            System.out.println("i: " + i);
        &#125;
        System.out.println("Loop complete.");
    &#125;
&#125;</code></pre>
        <p>Output:</p>
        <pre><code>i: 0
i: 1
i: 2
i: 3
i: 4
Loop complete.</code></pre>
    </section>

    <section>
        <h2>Using Break as a Form of Goto</h2>
        <p>Java lacks a <code>goto</code> statement due to its potential for creating unstructured code. Instead, Java provides labeled blocks and the <code>break</code> statement can be used to exit from these labeled blocks. However, the <code>break</code> statement can only be used to break out of blocks that have been properly labeled.</p>
        <p>Syntax for labeled blocks:</p>
        <pre><code>label:
&#123;
    statement1;
    statement2;
    statement3;
    ...
&#125;</code></pre>
        <p>Syntax for breaking out of a labeled block:</p>
        <pre><code>break label;</code></pre>
        <p>Example:</p>
        <pre><code>class BreakLabelDemo &#123;
    public static void main(String args[]) &#123;
        boolean t = true;

        first : &#123;
            second : &#123;
                third : &#123;
                    System.out.println("Before the break statement");
                    if (t)
                        break second;
                    System.out.println("This won't execute.");
                &#125;
                System.out.println("This won't execute.");
            &#125;
            System.out.println("This is after second block.");
        &#125;
    &#125;
&#125;</code></pre>
        <p>Output:</p>
        <pre><code>Before the break statement
This is after second block.</code></pre>
    </section>
</div>
<Footer />
</>
    );
}