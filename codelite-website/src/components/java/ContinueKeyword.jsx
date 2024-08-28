import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaContinueKeyword() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Continue Statement in Java</h2>
            <p>The <code>continue</code> statement in Java allows you to skip the current iteration of a loop and proceed with the next iteration. This is useful when you want to bypass certain conditions within a loop without terminating the entire loop.</p>
        </section>

        <section>
            <h2>Real-Life Example</h2>
            <p>Imagine someone climbing a staircase with 11 steps but skipping steps 1, 2, and 10 to reach the top. Similarly, in programming, the <code>continue</code> statement allows you to skip certain steps of execution within a loop based on specified conditions.</p>
        </section>

        <section>
            <h2>Syntax</h2>
            <p>The syntax of the <code>continue</code> statement is straightforward:</p>
            <pre><code>continue;</code></pre>
        </section>

        <section>
            <h2>Flow Chart</h2>
            <p>The flowchart for the <code>continue</code> statement helps visualize how control is transferred to the next iteration of the loop:</p>
        </section>

        <section>
            <h2>Examples of Using Continue Statement</h2>

            <h3>1. Inside a For Loop</h3>
            <p>This example demonstrates how the <code>continue</code> statement is used within a <code>for</code> loop. When <code>i</code> is 10 or 12, the loop skips the execution for these values:</p>
            <pre><code>import java.util.*;

public class Main &#123;
    public static void main(String args[]) &#123;
        for (int i = 0; i &#60;= 10; i++) &#123;
            if (i == 7) &#123;
                continue;
            &#125;
            System.out.print(i + " ");
        &#125;
    &#125;
&#125;
            </code></pre>
            <div class="output">
                <p>Output:</p>
                <p>0 1 2 3 4 5 6 8 9 10</p>
            </div>

            <h3>2. Inside a While Loop</h3>
            <p>This example shows the use of the <code>continue</code> statement in a <code>while</code> loop. It skips execution when <code>count</code> is 7 or 15:</p>
            <pre><code>public class Main &#123;
    public static void main(String args[]) &#123;
        int count = 10;
        while (count &#62;= 0) &#123;
            if (count == 4 || count == 8) &#123;
                count--;
                continue;
            &#125;
            System.out.print(count + " ");
            count--;
        &#125;
    &#125;
&#125;
            </code></pre>
            <div class="output">
                <p>Output:</p>
                <p>10 9 7 6 5 3 2 1 0</p>
            </div>

            <h3>3. Inside a Do-While Loop</h3>
            <p>In this example, the <code>continue</code> statement is used within a <code>do-while</code> loop to skip execution when <code>i</code> is 4 or 18:</p>
            <pre><code>import java.util.*;

public class Main &#123;
    public static void main(String[] args) &#123;
        int i = 0;
        do &#123;
            if (i == 4 || i == 18) &#123;
                i += 2;
                continue;
            &#125;
            System.out.println(i);
            i += 2;
        &#125; while (i &#60;= 35);
    &#125;
&#125;
            </code></pre>
            <div class="output">
                <p>Output:</p>
                <p>0 2 6 8 10 12 14 16 20 22 24 26 28 30 32 34</p>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}