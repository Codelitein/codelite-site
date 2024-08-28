import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaLoops() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Loops in Java</h2>
            <p>Loops are a fundamental feature in programming, allowing you to execute a set of instructions repeatedly as long as a specified condition remains true. In Java, there are three primary types of loops, each with its own syntax and condition-checking mechanisms. While they serve a similar purpose, their syntax and functionality differ.</p>
        </section>

        <section>
            <h2>While Loop</h2>
            <p>The <code>while</code> loop is a control flow statement that executes code repeatedly based on a boolean condition. It is similar to a repeating <code>if</code> statement.</p>
            <h3>Syntax</h3>
            <pre><code>while (boolean condition) &#123;
    // loop statements
&#125;</code></pre>
            <h3>Example</h3>
            <pre><code>public class Main &#123;
    public static void main (String[] args) &#123;
        int i = 0;
        while (i &#60;= 10) &#123;
            System.out.println(i);
            i++;
        &#125;
    &#125;
&#125;
</code></pre>
            <h3>Output</h3>
            <pre><code>0
1
2
3
4
5
6
7
8
9
10
</code></pre>
            <p>The <code>while</code> loop starts by evaluating the boolean condition. If true, it executes the loop body; otherwise, it moves to the statement following the loop. This loop type is known as an entry-control loop, as it checks the condition before executing the loop body.</p>
        </section>

        <section>
            <h2>For Loop</h2>
            <p>The <code>for</code> loop offers a compact syntax for looping by combining initialization, condition checking, and iteration in a single line. This loop provides a more concise structure compared to the <code>while</code> loop.</p>
            <h3>Syntax</h3>
            <pre><code>for (initialization; condition; increment/decrement) &#123;
    // statements
&#125;</code></pre>
            <h3>Example</h3>
            <pre><code>public class Main &#123;
    public static void main (String[] args) &#123;
        for (int i = 0; i &#60;= 10; i++) &#123;
            System.out.println(i);
        &#125;
    &#125;
&#125;
</code></pre>
            <h3>Output</h3>
            <pre><code>0
1
2
3
4
5
6
7
8
9
10
</code></pre>
            <p>The <code>for</code> loop includes initialization, a boolean condition for loop execution, and increment/decrement operations. It is also an entry-control loop, evaluating the condition before executing the statements inside the loop.</p>
        </section>

        <section>
            <h2>Do-While Loop</h2>
            <p>The <code>do-while</code> loop is similar to the <code>while</code> loop but checks the condition after executing the statements. This makes it an exit-control loop.</p>
            <h3>Syntax</h3>
            <pre><code>do &#123;
    // statements
&#125; while (condition);</code></pre>
            <h3>Example</h3>
            <pre><code>public class Main &#123;
    public static void main (String[] args) &#123;
        int i = 0;
        do &#123;
            System.out.println(i);
            i++;
        &#125; while (i &#60;= 10);
    &#125;
&#125;
</code></pre>
            <h3>Output</h3>
            <pre><code>0
1
2
3
4
5
6
7
8
9
10
</code></pre>
            <p>The <code>do-while</code> loop executes the statements first and then checks the condition. It guarantees that the loop body will execute at least once, making it an example of an exit-control loop.</p>
        </section>

        <section>
            <h2>Common Pitfalls of Loops</h2>
            <p>Loops can sometimes lead to issues if not handled correctly. Common pitfalls include:</p>
            <ul>
                <li><strong>Infinite Loops:</strong> A loop that never terminates can occur due to incorrect conditions or missing updates. For example:</li>
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        for (;;) &#123;
            // Infinite loop
        &#125;
    &#125;
&#125;
</code></pre>
                <pre><code>public class Main &#123;
    public static void main (String[] args) &#123;
        while (true) &#123;
            // Infinite loop
        &#125;
    &#125;
&#125;
</code></pre>
                <li><strong>Memory Issues:</strong> Adding elements to a collection in an infinite loop can lead to memory exhaustion. Example:</li>
                <pre><code>import java.util.ArrayList;

public class Integer1 &#123;
    public static void main(String[] args) &#123;
        ArrayList&#60;Integer&#62; ar = new ArrayList&#60;&#62;();
        for (int i = 0; i &#60; Integer.MAX_VALUE; i++) &#123;
            ar.add(i);
        &#125;
    &#125;
&#125;
</code></pre>
                <p>This code may throw an <code>OutOfMemoryError</code> as it attempts to add an excessive number of elements to the list.</p>
            </ul>
        </section>

        <section>
            <h2>Nested Loops</h2>
            <p>Nested loops involve placing one loop inside another. Java supports different combinations of nested loops:</p>
            <h3>Example 1: Nested For Loop</h3>
            <pre><code>public class Main &#123;
    public static void main (String[] args) &#123;
        for (int i = 0; i &#60; 3; i++) &#123;
            for (int j = 0; j &#60; 2; j++) &#123;
                System.out.println(i);
            &#125;
            System.out.println();
        &#125;
    &#125;
&#125;
</code></pre>
            <h3>Output</h3>
            <pre><code>0
0

1
1

2
2
</code></pre>
</section>
            <h3>Example 2: Nested While Loop</h3>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int i = 1, j = 1;
        while (i &#60;= 3) &#123;
            while (j &#60;= 3) &#123;
                System.out.print(j);
                j++;
            &#125;
            i++;
            System.out.println("");
            j = 1;
        &#125;
    &#125;
&#125;
</code></pre>
            <h3>Output</h3>
            <pre><code>123
123
123</code></pre>
</div>
<Footer />
</>
    );
}