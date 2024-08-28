import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";

export default function JavaBasics() {

    return(
        <>
        <Header />
        <div class="container">

    <section>
        <p>Java is an object-oriented programming language, meaning it is built upon the concept of objects. These objects interact with one another through method calls to work collaboratively. Below is an overview of some fundamental concepts in Java, including Classes, Objects, Methods, Instance Variables, as well as basic syntax and semantics.</p>
    </section>

    <section>
        <h2>Key Java Terminologies</h2>
        <h3>1. Class</h3>
        <p>A class serves as a blueprint or template for creating objects. It defines common properties and behaviors that the objects share.</p>
        <p><strong>Example:</strong></p>
        <ul>
            <li><strong>Class as Blueprint:</strong> The architectural design of a house is a class.</li>
            <li><strong>Real-World Example:</strong> Alice is an object of the "Human" class.</li>
        </ul>
    </section>

    <section>
        <h3>2. Object</h3>
        <p>An object is an instance of a class, representing an entity with specific behaviors and states.</p>
        <p><strong>Example:</strong></p>
        <ul>
            <li>Animals like Dogs, Cats, and Monkeys are objects of the "Animal" class.</li>
            <li>Behavior: Running along a road.</li>
        </ul>
    </section>

    <section>
        <h3>3. Method</h3>
        <p>Methods define the behavior of an object.</p>
        <p><strong>Example:</strong> The fuel indicator in a car shows the amount of fuel remaining.</p>
    </section>

    <section>
        <h3>4. Instance Variables</h3>
        <p>Every object possesses a unique set of instance variables that define its state, created by the values assigned to these variables.</p>
    </section>

    <section>
        <h3>5. Example: Compile and Run a Java Program</h3>
        <pre>

import java.util.*;
public class Main &#123;
    public static void main(String[] args)
    &#123;
        System.out.println("Hello, CodeLite user!");
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong> GeeksforGeeks!</p>
        <p><strong>Note:</strong> If a class is public, the file name must match the class name.</p>
        <p>To delve deeper into these concepts and their application in Java programming, explore more detailed resources or take a comprehensive Java course to solidify your understanding.</p>
    </section>

    <section>
        <h2>Java Syntax Overview</h2>
        <h3>1. Comments in Java</h3>
        <p>Java supports three types of comments:</p>
        <ul>
            <li><strong>Single-line Comment:</strong> <code>// This is a single-line comment.</code></li>
            <li><strong>Multi-line Comment:</strong></li>
            <pre>/*
   This is a multi-line comment.
   Another line of comment.
*/</pre>
            <li><strong>Documentation Comment:</strong> <code>/** Documentation comment */</code></li>
        </ul>
    </section>

    <section>
        <h3>2. Source File Name</h3>
        <p>The name of a Java source file must match the public class name with the extension <code>.java</code>. If there is no public class, the file name can differ.</p>
        <p><strong>Example:</strong></p>
        <ul>
            <li><code>Main.java</code> is valid.</li>
            <li><code>main.java</code> is invalid (case sensitivity).</li>
        </ul>
    </section>

    <section>
        <h3>3. Case Sensitivity</h3>
        <p>Java is case-sensitive. For instance, <code>System.out.println("Hello");</code> is correct, while <code>system.out.println("Hello");</code> is incorrect because Java distinguishes between upper and lower case.</p>
    </section>

    <section>
        <h3>4. Class Names</h3>
        <p>Class names should start with an uppercase letter. If the name consists of multiple words, each inner word's first letter should be capitalized.</p>
        <p><strong>Example:</strong></p>
        <ul>
            <li><code>class MyJavaProgram</code> is valid.</li>
            <li><code>class 1Program</code> is invalid (cannot start with a digit).</li>
        </ul>
    </section>

    <section>
        <h3>5. The <code>public static void main(String[] args)</code> Method</h3>
        <p>This method is the entry point of any Java application.</p>
    </section>
    
    <section>
        <h3>6. Method Names</h3>
        <p>Method names should begin with a lowercase letter. For multi-word names, capitalize the first letter of each subsequent word.</p>
        <p><strong>Example:</strong></p>
        <ul>
            <li><code>public void employeeRecords()</code> is valid.</li>
            <li><code>public void EmployeeRecords()</code> is valid but not recommended.</li>
        </ul>
    </section>

    <section>
        <h3>7. Identifiers in Java</h3>
        <p>Identifiers are names given to variables, methods, classes, packages, and more. They can start with a letter, currency symbol, or underscore and are case-sensitive.</p>
        <p><strong>Example:</strong></p>
        <ul>
            <li>Legal: <code>MinNumber</code>, <code>total</code>, <code>hello_world</code></li>
            <li>Illegal: <code>74ak</code>, <code>-amount</code></li>
        </ul>
    </section>

    <section>
        <h3>8. White Spaces in Java</h3>
        <p>A line containing only white spaces or comments is called a blank line, and the Java compiler ignores it.</p>
    </section>

    <section>
        <h3>9. Access Modifiers</h3>
        <p>These modifiers control the scope of a class and its members:</p>
        <ul>
            <li><strong>Access Modifiers:</strong> <code>default</code>, <code>public</code>, <code>protected</code>, <code>private</code>.</li>
            <li><strong>Non-access Modifiers:</strong> <code>final</code>, <code>abstract</code>, <code>static</code>, <code>transient</code>, <code>synchronized</code>, <code>volatile</code>, <code>native</code>.</li>
        </ul>
    </section>

    <section>
        <h3>10. Understanding Access Modifiers</h3>
        <p>Here's how access modifiers control visibility:</p>
        <table border="1" cellpadding="5">
            <thead>
                <tr>
                    <th>Access Modifier</th>
                    <th>Within Class</th>
                    <th>Within Package</th>
                    <th>Outside Package</th>
                    <th>Outside Package by Subclass</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>private</code></td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>default</code></td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td><code>protected</code></td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td><code>public</code></td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>
    </section>

</div>
<Footer />
</>
    );
}