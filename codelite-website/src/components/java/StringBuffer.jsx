import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaStringBuffer() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>The <code>StringBuffer</code> class in Java provides a mutable sequence of characters, offering an alternative to the immutable <code>String</code> class. This allows modifications to the string content without creating a new object each time.</p>
        </section>

        <section>
            <h2>Features of StringBuffer</h2>
            <ul>
                <li><strong>Mutability:</strong> Unlike <code>String</code>, <code>StringBuffer</code> objects can be changed without creating a new instance.</li>
                <li><strong>Initial Capacity:</strong> The capacity of a <code>StringBuffer</code> can be specified upon creation or adjusted later using the <code>ensureCapacity()</code> method.</li>
                <li><strong>Append:</strong> Use the <code>append()</code> method to add characters, strings, or other objects to the end of the buffer.</li>
                <li><strong>Insert:</strong> The <code>insert()</code> method allows you to place characters, strings, or other objects at a specific position in the buffer.</li>
                <li><strong>Delete:</strong> Remove characters from the buffer using the <code>delete()</code> method.</li>
                <li><strong>Reverse:</strong> Reverse the order of characters in the buffer with the <code>reverse()</code> method.</li>
            </ul>
        </section>

        <section>
            <h2>Example Usage</h2>
            <p>Below is an example demonstrating how to use <code>StringBuffer</code> for string concatenation:</p>
            <div class="example">
                <pre><code>public class StringBufferExample &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer();
        sb.append("Hello");
        sb.append(" ");
        sb.append("world");
        String message = sb.toString();
        System.out.println(message);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Hello world</code></pre>
            </div>
        </section>

        <section>
            <h2>Advantages of StringBuffer</h2>
            <ul>
                <li><strong>Mutability:</strong> <code>StringBuffer</code> objects are mutable, allowing for modifications after creation, unlike <code>String</code> objects, which are immutable.</li>
                <li><strong>Efficiency:</strong> Modifying a <code>StringBuffer</code> is more efficient than creating new <code>String</code> objects for each change, especially with frequent modifications.</li>
            </ul>
            <p><strong>Note:</strong> Both <code>String</code> and <code>StringBuffer</code> are thread-safe. <code>StringBuffer</code> is synchronized, ensuring thread safety but may face performance issues with concurrent access. Immutable objects like <code>String</code> are inherently thread-safe as their state cannot be altered once created.</p>
        </section>

        <section>
            <h2>StringBuffer vs. String</h2>
            <p><code>StringBuffer</code> is a counterpart to <code>String</code>, offering functionality for mutable strings. While <code>String</code> represents fixed-length, immutable character sequences, <code>StringBuffer</code> represents expandable and writable sequences. It automatically grows to accommodate new characters or substrings.</p>
        </section>

        <section>
            <h2>Important Constructors</h2>
            <ul>
                <li><code>StringBuffer()</code>: Creates an empty <code>StringBuffer</code> with an initial capacity of 16.</li>
                <li><code>StringBuffer(String str)</code>: Initializes a <code>StringBuffer</code> with the specified string.</li>
                <li><code>StringBuffer(int capacity)</code>: Creates an empty <code>StringBuffer</code> with the specified capacity.</li>
            </ul>
        </section>

        <section>
            <h2>StringBuffer Methods</h2>
            <h3>1. <code>append()</code> Method</h3>
            <p>Concatenates the given argument to the end of the current buffer:</p>
            <div class="example">
                <pre><code>import java.io.*;

class A &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer("Hello ");
        sb.append("Java");
        System.out.println(sb);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Hello Java</code></pre>
            </div>

            <h3>2. <code>insert()</code> Method</h3>
            <p>Inserts the given string at the specified position:</p>
            <div class="example">
                <pre><code>import java.io.*;

class A &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer("Hello ");
        sb.insert(1, "Java");
        System.out.println(sb);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>HJavaello</code></pre>
            </div>

            <h3>3. <code>replace()</code> Method</h3>
            <p>Replaces the substring between the specified indices with a new string:</p>
            <div class="example">
                <pre><code>import java.io.*;

class A &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer("Hello");
        sb.replace(1, 3, "Java");
        System.out.println(sb);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>HJavalo</code></pre>
            </div>

            <h3>4. <code>delete()</code> Method</h3>
            <p>Deletes the characters between the specified indices:</p>
            <div class="example">
                <pre><code>import java.io.*;

class A &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer("Hello");
        sb.delete(1, 3);
        System.out.println(sb);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Hlo</code></pre>
            </div>

            <h3>5. <code>reverse()</code> Method</h3>
            <p>Reverses the characters in the buffer:</p>
            <div class="example">
                <pre><code>import java.io.*;

class A &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer("Hello");
        sb.reverse();
        System.out.println(sb);
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>olleH</code></pre>
            </div>

            <h3>6. <code>capacity()</code> Method</h3>
            <p>Returns the current capacity of the buffer. The default capacity is 16, and it increases as needed:</p>
            <div class="example">
                <pre><code>import java.io.*;

class A &#123;
    public static void main(String[] args) &#123;
        StringBuffer sb = new StringBuffer();
        System.out.println(sb.capacity()); // default 16
        sb.append("Hello");
        System.out.println(sb.capacity()); // still 16
        sb.append("java is my favourite language");
        System.out.println(sb.capacity()); // now (16*2)+2=34
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>16
16
34</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}