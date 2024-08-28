import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaForLoop() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, loops are used to execute a block of statements repeatedly. The <code>for</code> loop in Java offers a compact way to write loop structures, integrating initialization, condition, and increment/decrement operations into a single line. This provides a concise and easily debuggable loop structure. Let's delve into the Java <code>for</code> loop with some examples.</p>
        </section>

        <section>
            <h2>Syntax of the For Loop</h2>
            <pre><code>for (initialization; condition; update) &#123;
    // body of the loop
    // statements to execute
&#125;
</code></pre>
        </section>

        <section>
            <h2>Components of a For Loop</h2>
            <p>The Java <code>for</code> loop comprises three key components:</p>
            <h3>1. Initialization</h3>
            <p>This step initializes the loop counter to a starting value.</p>
            <pre><code>int i = 1;</code></pre>
            
            <h3>2. Condition</h3>
            <p>The condition is evaluated before each iteration. If it evaluates to true, the loop body executes; otherwise, the loop terminates.</p>
            <pre><code>i &lt;= 10</code></pre>
            
            <h3>3. Update</h3>
            <p>After executing the loop body, this step updates the loop counter.</p>
            <pre><code>i++;</code></pre>
        </section>

        <section>
            <h2>How the For Loop Works</h2>
            <ol>
                <li>Control enters the <code>for</code> loop.</li>
                <li>Initialization is performed.</li>
                <li>The condition is checked.</li>
                <li>If the condition is true, the body of the loop executes.</li>
                <li>If the condition is false, the loop exits.</li>
                <li>The loop body statements execute.</li>
                <li>The update expression is performed.</li>
                <li>Control returns to step 3.</li>
                <li>The loop terminates when the condition is false.</li>
            </ol>
        </section>

        <section>
            <h2>Flowchart for the For Loop</h2>
        </section>

        <section>
            <h2>Examples of the For Loop</h2>
            <h3>Example 1: Printing Numbers from 1 to 10</h3>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        for (int i = 1; i &lt;= 10; i++) &#123;
            System.out.println(i);
        &#125;
    &#125;
&#125;
</code></pre>
            <div class="output">
                <p>Output:</p>
                <pre><code>1
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
            </div>

            <h3>Example 2: Printing "Hello World" Five Times</h3>
            <pre><code>class ForLoop &#123;
    public static void main(String[] args) &#123;
        for (int i = 1; i &lt;= 5; i++) &#123;
            System.out.println("Hello World");
        &#125;
    &#125;
&#125;
</code></pre>
            <div class="output">
                <p>Output:</p>
                <pre><code>Hello World
Hello World
Hello World
Hello World
Hello World
</code></pre>
            </div>

            <h3>Example 3: Summing Numbers from 1 to 20</h3>
            <pre><code>class ForLoop &#123;
    public static void main(String[] args) &#123;
        int sum = 0;
        for (int x = 1; x &lt;= 20; x++) &#123;
            sum += x;
        &#125;
        System.out.println("Sum: " + sum);
    &#125;
&#125;
</code></pre>
            <div class="output">
                <p>Output:</p>
                <pre><code>Sum: 210
</code></pre>
            </div>
        </section>

        <section>
            <h2>Nested For Loops</h2>
            <p>A nested for loop is a loop inside another for loop, similar to nested if-else statements. Here’s an example:</p>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        for (int i = 1; i &lt;= 5; i++) &#123;
            for (int j = 1; j &lt;= 5; j++) &#123;
                System.out.print(j + " ");
            &#125;
            System.out.println();
        &#125;
    &#125;
&#125;
</code></pre>
            <div class="output">
                <p>Output:</p>
                <pre><code>1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
</code></pre>
            </div>
            <p>For more information on nested loops, refer to <a href="nested_loops_in_java.html">Nested Loops in Java</a>.</p>
        </section>

        <section>
            <h2>Enhanced For Loop (For-Each Loop)</h2>
            <p>The enhanced for loop, introduced in Java 5, simplifies iteration through elements of a collection or array. It’s used when you need to traverse elements in a sequential manner without accessing their indices. Note that the enhanced for loop treats elements as immutable, meaning the values in the array cannot be modified during iteration.</p>
            <pre><code>for (T element : Collection/array) &#123;
    // loop body
    // statements
&#125;
</code></pre>
            <p>Here’s an example:</p>
            <pre><code>public class EnhancedForLoop &#123;
    public static void main(String[] args) &#123;
        String[] array = &#123; "Rohit", "Tommy", "Walter" &#125;;
        for (String x : array) &#123;
            System.out.println(x);
        &#125;
    &#125;
&#125;
</code></pre>
            <div class="output">
                <p>Output:</p>
                <pre><code>Rohit
Tommy
Walter
</code></pre>
            </div>
            <p>It is recommended to use the enhanced for loop over the traditional form where possible (as per the Java documentation).</p>
        </section>

        <section>
            <h2>Infinite For Loop</h2>
            <p>An infinite for loop occurs when the loop’s condition always evaluates to true, causing it to run indefinitely. Here’s an example:</p>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        for (int i = 1; i &gt;= 1; i++) &#123;
            System.out.println("Infinite Loop " + i);
        &#125;
    &#125;
&#125;
</code></pre>
            <div class="output">
                <p>Output:</p>
                <pre><code>Infinite Loop 1
Infinite Loop 2
...
</code></pre>
            </div>
            <p>Another way to create an infinite loop is by using two semicolons:</p>
            <pre><code>for (;;) &#123;
    // code to execute
&#125;
</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}