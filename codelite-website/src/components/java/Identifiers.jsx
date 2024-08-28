import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaIdentifiers() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Java Identifiers</h2>
            <p>In Java, identifiers are used to name various elements such as classes, methods, variables, and labels. They help in identifying and referring to these elements within your Java code.</p>
        </section>

        <section>
            <h2>Example of Java Identifiers</h2>
            <p>Consider the following Java code snippet:</p>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int a = 20;
    &#125;
&#125;
            </code></pre>
            <p>In this example, the following identifiers are present:</p>
            <ul>
                <li><code>Main</code>: The class name</li>
                <li><code>main</code>: The method name</li>
                <li><code>String</code>: A predefined class name</li>
                <li><code>args</code>: A variable name</li>
                <li><code>a</code>: A variable name</li>
            </ul>
        </section>

        <section>
            <h2>Rules for Defining Java Identifiers</h2>
            <p>To ensure your identifiers are valid, follow these rules:</p>
            <ul>
                <li>Identifiers may only include alphanumeric characters (<code>[A-Z], [a-z], [0-9]</code>), <code>$</code> (dollar sign), and <code>_</code> (underscore). Special characters like <code>@</code> are not allowed.</li>
                <li>Identifiers must not start with digits (<code>[0-9]</code>).</li>
                <li>Java identifiers are case-sensitive.</li>
                <li>While there is no strict limit on length, it is recommended to use identifiers that are between 4 and 15 characters long.</li>
                <li>Reserved words cannot be used as identifiers. For example, <code>int while = 20;</code> is invalid because <code>while</code> is a reserved keyword.</li>
            </ul>
        </section>

        <section>
            <h2>Examples of Valid Identifiers</h2>
            <p>Here are some examples of valid Java identifiers:</p>
            <ul>
                <li><code>MyVariable</code></li>
                <li><code>MYVARIABLE</code></li>
                <li><code>myvariable</code></li>
                <li><code>x</code></li>
                <li><code>i</code></li>
                <li><code>x1</code></li>
                <li><code>i1</code></li>
                <li><code>_myvariable</code></li>
                <li><code>$myvariable</code></li>
                <li><code>sum_of_array</code></li>
                <li><code>geeks123</code></li>
            </ul>
        </section>

        <section>
            <h2>Examples of Invalid Identifiers</h2>
            <p>The following are examples of invalid Java identifiers:</p>
            <ul>
                <li><code>My Variable</code> // Contains a space</li>
                <li><code>123geeks</code> // Starts with a digit</li>
                <li><code>a+c</code> // Plus sign is not allowed</li>
                <li><code>variable-2</code> // Hyphen is not allowed</li>
                <li><code>sum_&_difference</code> // Ampersand is not allowed</li>
            </ul>
        </section>

        <section>
            <h2>Reserved Words in Java</h2>
            <p>Reserved words in Java are special terms that have predefined meanings within the language. They cannot be used as identifiers. Java has 53 reserved words, which can be categorized into two groups: keywords and literals.</p>
            <ul>
                <li><code>abstract</code></li>
                <li><code>assert</code></li>
                <li><code>boolean</code></li>
                <li><code>break</code></li>
                <li><code>byte</code></li>
                <li><code>case</code></li>
                <li><code>catch</code></li>
                <li><code>char</code></li>
                <li><code>class</code></li>
                <li><code>const</code>(*deprecated)</li>
                <li><code>continue</code></li>
                <li><code>default</code></li>
                <li><code>do</code></li>
                <li><code>double</code></li>
                <li><code>else</code></li>
                <li><code>enum</code></li>
                <li><code>extends</code></li>
                <li><code>final</code></li>
                <li><code>finally</code></li>
                <li><code>float</code></li>
                <li><code>for</code></li>
                <li><code>goto</code>(*deprecated)</li>
                <li><code>if</code></li>
                <li><code>implements</code></li>
                <li><code>import</code></li>
                <li><code>interface</code></li>
                <li><code>instanceof</code></li>
                <li><code>int</code></li>
                <li><code>long</code></li>
                <li><code>native</code></li>
                <li><code>package</code></li>
                <li><code>private</code></li>
                <li><code>protected</code></li>
                <li><code>public</code></li>
                <li><code>return</code></li>
                <li><code>short</code></li>
                <li><code>static</code></li>
                <li><code>strictfp</code></li>
                <li><code>super</code></li>
                <li><code>switch</code></li>
                <li><code>synchronized</code></li>
                <li><code>this</code></li>
                <li><code>throw</code></li>
                <li><code>throws</code></li>
                <li><code>transient</code></li>
                <li><code>try</code></li>
                <li><code>void</code></li>
                <li><code>volatile</code></li>
                <li><code>while</code></li>
                
            </ul>
        </section>
    </div>
    <Footer />
    </>
    );
}