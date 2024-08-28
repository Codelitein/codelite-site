import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaSout() {

    return(
        <>
        <Header />
        <div class="container">
<section>
    <h2>Introduction to System.out.println</h2>
    <p>The <code>System.out.println()</code> method in Java is used to print arguments passed to it, providing a simple way to display output on the console.</p>
</section>

<section>
    <h2>Components of System.out.println()</h2>
    <p>The <code>System.out.println()</code> statement can be divided into three parts for better understanding:</p>
    <ul>
        <li><strong>System:</strong> A final class defined in the <code>java.lang</code> package.</li>
        <li><strong>out:</strong> An instance of the <code>PrintStream</code> type, which is a public and static member of the <code>System</code> class.</li>
        <li><strong>println():</strong> A public method of the <code>PrintStream</code> class. It prints the argument passed and adds a newline character to the output.</li>
    </ul>
</section>

<section>
    <h2>Syntax and Parameters</h2>
    <p>The syntax for <code>System.out.println()</code> is as follows:</p>
    <pre><code>System.out.println(parameter)</code></pre>
    <p>The parameter can be any data the user wants to display on the output screen.</p>
</section>

<section>
    <h2>Example 1: Simple Usage</h2>
    <p>Below is an example illustrating the basic usage of <code>System.out.println()</code>:</p>
    <pre><code>
public class Main &#123;
    public static void main(String[] args) &#123;
        System.out.println("Welcome");
        System.out.println("To");
        System.out.println("Tutorials");
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>Welcome
To
Tutorials</code></pre>
</section>

<section>
    <h2>Example 2: Printing Variable Values</h2>
    <p>In this example, we demonstrate how <code>System.out.println()</code> can be used to print variable values:</p>
    <pre><code>
public class Main &#123;
    public static void main(String[] args) &#123;
        int num1 = 10, num2 = 20;
        System.out.print("The sum of ");
        System.out.print(num1 + " and " + num2 + " is: ");
        System.out.println(num1 + num2);
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>The sum of 10 and 20 is: 30</code></pre>
</section>

<section>
    <h2>Additional Input-Output Streams in Java</h2>
    <p>Besides <code>System.out</code>, Java provides two other standard input-output streams:</p>
    <ul>
        <li><strong>System.in:</strong> The standard input stream used for reading input from the keyboard or another standard input device. Example: <code>InputStreamReader inp = new InputStreamReader(System.in);</code></li>
        <li><strong>System.err:</strong> The standard error stream used for displaying error messages. Example: <code>System.err.print("Error");</code></li>
    </ul>
</section>

<section>
    <h2>Overloaded Versions of println() Method</h2>
    <p>The <code>println()</code> method in Java is overloaded, meaning it can accept different types and numbers of parameters. Examples include:</p>
    <ul>
        <li><code>System.out.println()</code></li>
        <li><code>System.out.println(int)</code></li>
        <li><code>System.out.println(double)</code></li>
        <li><code>System.out.println(String)</code></li>
        <li><code>System.out.println(char)</code></li>
    </ul>
    <p>Here’s an example illustrating the overloads:</p>
    <pre><code>
class Println &#123;
    public static void main(String[] args) &#123;
        int num = 10;
        String str = "HelloWorld";
        double d = 10.2;
        float f = 13.5f;
        boolean bool = true;

        System.out.println();
        System.out.println(num);
        System.out.println(str);
        System.out.println(d);
        System.out.println(f);
        System.out.println(bool);
        System.out.println("Hello");
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>10
HelloWorld
10.2
13.5
true
Hello</code></pre>
</section>

<section>
    <h2>Comparing System.out.print() and System.out.println()</h2>
    <p>The key differences between <code>System.out.print()</code> and <code>System.out.println()</code>:</p>
    <ul>
        <li><strong>System.out.print():</strong> Prints text without moving the cursor to the next line. The next output appears on the same line.</li>
        <li><strong>System.out.println():</strong> Prints text and moves the cursor to the next line, so the next output appears on a new line.</li>
    </ul>
    <p>Example demonstrating the differences:</p>
    <pre><code>
public class DemoPrint &#123;
    public static void main(String[] args) &#123;
        System.out.println("Using print()");

        // using print() - all output is on the same line
        System.out.print("One ");
        System.out.print("One ");
        System.out.print("One ");

        System.out.println();
        System.out.println("Using println()");

        // using println() - each output is on a new line
        System.out.println("One ");
        System.out.println("Two ");
        System.out.println("Three ");
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong></p>
    <pre><code>Using print()
One One One

Using println()
One
Two
Three</code></pre>
</section>

<section>
    <h2>Performance Considerations of System.out.println()</h2>
    <p>The <code>println()</code> method is a straightforward way to display output on the console, but it may have performance impacts, especially when dealing with multiple threads due to its synchronized nature. It is generally slower than other I/O operations because it incurs overhead on the machine.</p>
    <p>For better performance, you can use classes like <code>PrintWriter</code> or <code>BufferedWriter</code>, which are faster than <code>println()</code>.</p>
</section>
</div>
<Footer />
</>
    );
}