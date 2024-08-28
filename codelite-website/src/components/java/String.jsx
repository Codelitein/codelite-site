import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaString() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>In Java, a single object is created when you use string literals. If the JVM does not find a string object with the value "Welcome" in the string constant pool, it will create a new object. If the string already exists in the pool, it will return a reference to the existing instance. This article explores Java strings in more detail.</p>
        </section>
        
        <section>
            <h2>What Are Strings in Java?</h2>
            <p>Strings in Java are objects that hold character data. Each character in a Java string is stored as a 16-bit value using UTF-16 encoding. A string in Java behaves similarly to a character array.</p>
            <p><strong>Example:</strong></p>
            <pre><code>String name = "Bro";</code></pre>
        </section>
        
        <section>
            <h2>Example of String in Java</h2>
            <p>Here is an example of how strings are used in Java:</p>
            <div class="example">
                <pre><code>// Java Program to demonstrate String
public class StringExample &#123;

    // Main function
    public static void main(String[] args) &#123;
        String str = new String("example");
        // Creating a Java string using the new keyword
        // This creates two objects: one in the heap and one in the String constant pool.

        System.out.println(str);
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>example</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Ways to Create a String</h2>
            <p>Strings in Java can be created in two ways:</p>
            <ol>
                <li><strong>String Literal:</strong> This approach makes Java more memory efficient as no new objects are created if a string already exists in the string constant pool.</li>
                <li><strong>Using the New Keyword:</strong> This creates a new string object in the heap, with the literal placed in the string constant pool.</li>
            </ol>
            <p><strong>Syntax:</strong></p>
            <pre><code>&lt;String_Type&gt; &lt;string_variable&gt; = "&lt;sequence_of_string&gt;";</code></pre>
            <p><strong>String Literal Example:</strong></p>
            <pre><code>String demoString = "HelloWorld";</code></pre>
            <p><strong>Using New Keyword Example:</strong></p>
            <pre><code>String demoString = new String("HelloWorld");</code></pre>
        </section>
        
        <section>
            <h2>Interfaces and Classes Related to Strings</h2>
            <p>Java provides several classes and interfaces to work with strings:</p>
            <ul>
                <li><strong>CharBuffer:</strong> Implements the CharSequence interface and allows character buffers to be used in place of CharSequences, such as in regular expressions.</li>
                <li><strong>String:</strong> A sequence of characters that is immutable; once created, it cannot be changed. Operations like converting to uppercase or lowercase return new strings rather than modifying the original.</li>
                <li><strong>CharSequence Interface:</strong> Represents a sequence of characters. Classes that implement this interface include:</li>
                <ul>
                    <li><strong>String:</strong> Immutable and thread-safe.</li>
                    <li><strong>StringBuffer:</strong> Mutable and thread-safe, ideal for multi-threaded environments.</li>
                    <li><strong>StringBuilder:</strong> Mutable but not thread-safe, used for single-threaded scenarios.</li>
                </ul>
            </ul>
        </section>
        
        <section>
            <h2>Examples of String Usage</h2>
            <p><strong>StringBuffer Example:</strong></p>
            <div class="example">
                <pre><code>StringBuffer demoString = new StringBuffer("Hello");</code></pre>
            </div>
            <p><strong>StringBuilder Example:</strong></p>
            <div class="example">
                <pre><code>StringBuilder demoString = new StringBuilder();
demoString.append("Hello");</code></pre>
            </div>
        </section>
        
        <section>
            <h2>StringTokenizer and StringJoiner</h2>
            <p>The <code>StringTokenizer</code> class is used to break a string into tokens.</p>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>// Example of StringTokenizer
StringTokenizer tokenizer = new StringTokenizer("Welcome To Hello World", " ");
while (tokenizer.hasMoreTokens()) &#123;
    System.out.println(tokenizer.nextToken());
&#125;</code></pre>
            </div>
            <p>The <code>StringJoiner</code> class constructs sequences of characters separated by a delimiter, with optional prefix and suffix.</p>
            <p><strong>Syntax:</strong></p>
            <pre><code>public StringJoiner(CharSequence delimiter)</code></pre>
        </section>
        
        <section>
            <h2>String Immutability</h2>
            <p>Strings in Java are immutable, meaning once a string is created, it cannot be changed. Instead, operations on strings create new string objects.</p>
            <p><strong>Example of Immutability:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        String s = "Sachin";
        s.concat(" Tendulkar");
        System.out.println(s);
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Sachin</code></pre>
            </div>
            <p>Even though the <code>concat()</code> method creates a new string, the original string remains unchanged.</p>
            <p><strong>Explicitly Assigned Strings Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        String name = "Sachin";
        name = name.concat(" Tendulkar");
        System.out.println(name);
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Sachin Tendulkar</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Memory Allocation for Strings</h2>
            <p>String literals are stored in the string constant pool for memory optimization. Strings created using the <code>new</code> keyword are stored in the heap.</p>
            <p><strong>Example of String Literals:</strong></p>
            <pre><code>String demoString = "Hello";</code></pre>
            <p><strong>Example of Dynamically Allocated String:</strong></p>
            <pre><code>String demoString = new String("Hello");</code></pre>
            <p>To store a dynamically allocated string in the constant pool, you must use the <code>intern()</code> method:</p>
            <pre><code>String internedString = demoString.intern();</code></pre>
        </section>
        
        <section>
            <h2>Examples of String Construction</h2>
            <p><strong>Example 1:</strong></p>
            <div class="example">
                <pre><code>// Construct String from a subset of a char array
byte ascii[] = &#123; 65, 66, 67 &#125;;

String firstString = new String(ascii);
System.out.println(firstString);

String secondString = new String(ascii, 1, 2);
System.out.println(secondString);</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>ABC
BC</code></pre>
            </div>
            <p><strong>Example 2:</strong></p>
            <div class="example">
                <pre><code>// Construct one string from another
char characters[] = &#123; 'a', 'B', 'c' &#125;;

String firstString = new String(characters);
String secondString = new String(firstString);

System.out.println(firstString);
System.out.println(secondString);</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>aBc
aBc
                </code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}