import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaIfElse() {

    return(
        <>
        <Header />
        <div class="container">
<section>
    <h2>Introduction to if-else in Java</h2>
    <p>Decision-making is a crucial aspect of Java programming, allowing you to execute code based on specific conditions. The <code>if</code> statement alone checks if a condition is true and executes a block of code accordingly. When combined with <code>else</code>, it provides an alternative set of instructions if the condition is false. In this guide, we’ll explore how the if-else structure works in Java.</p>
</section>

<section>
    <h2>If-Else in Java</h2>
    <p>The <code>if-else</code> structure is a fundamental component of Java's conditional statements, which operate based on whether a given condition evaluates to true or false.</p>
</section>

<section>
    <h2>Syntax of if-else Statement</h2>
    <pre>
<code>
if (condition) &#123;
    // Executes this block if the condition is true
&#125; else &#123;
    // Executes this block if the condition is false
&#125;
</code>
    </pre>
</section>

<section>
    <h2>Java if-else Flowchart</h2>
    <p>The flowchart below illustrates how the <code>if-else</code> statement works in Java, helping to visualize the decision-making process.</p>
</section>

<section>
    <h2>Example: if-else Program in Java</h2>
    <h3>Dry Run of the if-else Statements</h3>
    <ol>
        <li>The program begins execution.</li>
        <li>The variable <code>i</code> is initialized to 20.</li>
        <li>The <code>if</code> condition <code>20 &lt; 15</code> is evaluated and found to be false.</li>
        <li>The flow moves to the <code>else</code> block.</li>
        <li>The message "<code>i is greater than 15</code>" is printed.</li>
        <li>Finally, "<code>Outside if-else block</code>" is printed.</li>
    </ol>

    <h3>Java Implementation</h3>
    <pre>
<code>
// Java program demonstrating if-else statement
class IfElseDemo &#123;
    public static void main(String[] args) &#123;
        int i = 20;

        if (i &#60; 15) &#123;
            System.out.println("i is smaller than 15");
        &#125; else &#123;
            System.out.println("i is greater than 15");
        &#125;

        System.out.println("Outside if-else block");
    &#125;
&#125;
</code>
    </pre>

    <h3>Output</h3>
    <pre>
<code>
i is greater than 15
Outside if-else block
</code>
    </pre>
</section>

<section>
    <h2>Nested if Statements in Java</h2>
    <p>In Java, you can nest <code>if</code> statements to create more complex decision-making structures. This involves placing one <code>if</code> statement inside another.</p>

    <h3>Syntax of Nested if Statements</h3>
    <pre>
<code>
if (condition1) &#123;
    // code block 1
    if (condition2) &#123;
        // code block 2
    &#125;
&#125;
</code>
    </pre>

    <h3>Example: Nested if Statements in Java</h3>
    <pre>
<code>
// Java Program demonstrating nested if statements
public class AgeWeightExample &#123;
    public static void main(String[] args) &#123;
        int age = 25;
        double weight = 65.5;

        if (age &#62;= 18) &#123;
            if (weight &#62;= 50.0) &#123;
                System.out.println("You are eligible to donate blood.");
            &#125; else &#123;
                System.out.println("You must weigh at least 50 kilograms to donate blood.");
            &#125;
        &#125; else &#123;
            System.out.println("You must be at least 18 years old to donate blood.");
        &#125;
    &#125;
&#125;
</code>
    </pre>

    <h3>Output</h3>
    <pre>
<code>
You are eligible to donate blood.
</code>
    </pre>
    <p><strong>Note:</strong> An <code>else</code> statement must always be paired with an <code>if</code> statement; it cannot stand alone.</p>
</section>
</div>
<Footer />
</>
    );
}