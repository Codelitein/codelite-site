import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaIfElseIf() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>Decision-making in Java allows you to execute specific code blocks based on given conditions. The Java <code>if-else-if</code> ladder helps in choosing among multiple options. This structure evaluates conditions sequentially, and as soon as a condition evaluates to true, its corresponding block of code executes, skipping the remaining conditions. If none of the conditions are true, the final <code>else</code> block executes.</p>
        </section>

        <section>
            <h2>Syntax</h2>
            <pre><code>if (condition) 
    statement1;
else if (condition) 
    statement2;
...
else 
    statement;</code></pre>
        </section>

        <section>
            <h2>Working of the If-Else-If Ladder</h2>
            <ol>
                <li>Control enters the <code>if</code> block.</li>
                <li>The flow moves to Condition 1.</li>
                <li>The condition is tested:</li>
                <ul>
                    <li>If the condition is true, proceed to execute the associated block and then exit the ladder.</li>
                    <li>If false, move to Condition 2.</li>
                </ul>
                <li>Repeat the process for subsequent conditions.</li>
                <li>If none of the conditions are true, execute the <code>else</code> block.</li>
                <li>Exit the if-else-if ladder.</li>
            </ol>
            <p>Refer to the flowchart below for a visual representation.</p>
        </section>

        <section>
            <h2>Example 1</h2>
            <pre><code>// Java program to illustrate if-else-if ladder

public class Main &#123;
    public static void main(String[] args) &#123;
        int i = 20;

        if (i == 10)
            System.out.println("i is 10\n");
        else if (i == 15)
            System.out.println("i is 15\n");
        else if (i == 20)
            System.out.println("i is 20\n");
        else
            System.out.println("i is not present\n");

        System.out.println("Outside if-else-if");
    &#125;
&#125;</code></pre>
            <div class="example-output">
                <p>Output:</p>
                <pre><code>i is 20
Outside if-else-if</code></pre>
            </div>
            <h3>Dry Running</h3>
            <ol>
                <li>The program begins execution.</li>
                <li><code>i</code> is set to 20.</li>
                <li>Condition 1 (20 == 10) is false.</li>
                <li>Condition 2 (20 == 15) is false.</li>
                <li>Condition 3 (20 == 20) is true, so "i is 20" is printed.</li>
                <li>"Outside if-else-if" is printed.</li>
                <li>Program ends.</li>
            </ol>
        </section>

        <section>
            <h2>Example 2</h2>
            <pre><code>// Java program to illustrate if-else-if ladder

public class Main &#123;
    public static void main(String[] args) &#123;
        int i = 20;

        if (i &#60; 10)
            System.out.println("i is less than 10\n");
        else if (i &#60; 15)
            System.out.println("i is less than 15\n");
        else if (i &#60; 20)
            System.out.println("i is less than 20\n");
        else
            System.out.println("i is greater than or equal to 20\n");

        System.out.println("Outside if-else-if");
    &#125;
&#125;</code></pre>
            <div class="example-output">
                <p>Output:</p>
                <pre><code>i is greater than or equal to 20
Outside if-else-if</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}