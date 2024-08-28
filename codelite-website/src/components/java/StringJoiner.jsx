import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaStringJoiner() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>The <code>StringJoiner</code> class, found in the <code>java.util</code> package, simplifies the creation of character sequences (strings) that are separated by a delimiter. It can also include an optional prefix and suffix. While the <code>StringBuilder</code> class can achieve similar results with more code, <code>StringJoiner</code> offers a more concise and straightforward approach.</p>
        </section>

        <section>
            <h2>Constructors of the <code>StringJoiner</code> Class</h2>
            <h3>1. <code>StringJoiner(CharSequence delimiter)</code></h3>
            <p>This constructor initializes a <code>StringJoiner</code> instance with no characters, prefix, or suffix, and uses the provided delimiter.</p>
            <p><strong>Syntax:</strong></p>
            <pre><code>public StringJoiner(CharSequence delimiter)</code></pre>
            <p><strong>Parameters:</strong> The delimiter to be used between elements.</p>
            <p><strong>Exception Thrown:</strong> <code>NullPointerException</code> if the delimiter is <code>null</code>.</p>

            <h3>2. <code>StringJoiner(CharSequence delimiter, CharSequence prefix, CharSequence suffix)</code></h3>
            <p>This constructor creates a <code>StringJoiner</code> with the specified delimiter, prefix, and suffix. If no elements are added, the result will be the concatenation of the prefix and suffix unless <code>setEmptyValue</code> has been called.</p>
            <p><strong>Syntax:</strong></p>
            <pre><code>public StringJoiner(CharSequence delimiter, CharSequence prefix, CharSequence suffix)</code></pre>
            <p><strong>Parameters:</strong></p>
            <ul>
                <li><code>delimiter</code>: Characters used between elements.</li>
                <li><code>prefix</code>: Characters to prepend.</li>
                <li><code>suffix</code>: Characters to append.</li>
            </ul>
            <p><strong>Exception Thrown:</strong> <code>NullPointerException</code> if any parameter is <code>null</code>.</p>
        </section>

        <section>
            <h2>Methods of the <code>StringJoiner</code> Class</h2>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>add()</code></td>
                        <td>Adds a <code>CharSequence</code> as the next element. If <code>null</code>, "null" is added.</td>
                    </tr>
                    <tr>
                        <td><code>length()</code></td>
                        <td>Returns the length of the string representation of the <code>StringJoiner</code>.</td>
                    </tr>
                    <tr>
                        <td><code>merge()</code></td>
                        <td>Adds the contents of another <code>StringJoiner</code> without its prefix and suffix. If the other <code>StringJoiner</code> is empty, this method has no effect. If the delimiters differ, elements are concatenated with the other delimiter and appended as a single element.</td>
                    </tr>
                    <tr>
                        <td><code>toString()</code></td>
                        <td>Returns the string representation of the <code>StringJoiner</code>.</td>
                    </tr>
                    <tr>
                        <td><code>setEmptyValue()</code></td>
                        <td>Sets the string to be used when the <code>StringJoiner</code> is empty and no elements have been added.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>Example</h2>
            <pre><code>// Java program to demonstrate methods of StringJoiner class

// Importing required classes
import java.util.ArrayList;
import java.util.StringJoiner;

// Main class
public class Main &#123;

    // Main driver method
    public static void main(String[] args) &#123;
        // Creating an empty ArrayList of string type
        ArrayList&#60;String&#62; al = new ArrayList&#60;&#62;();

        // Adding elements to the list
        al.add("Tom");
        al.add("John");
        al.add("Mike");
        al.add("Alice");

        // Creating a StringJoiner object
        StringJoiner sj1 = new StringJoiner(",");

        // Using setEmptyValue() method
        sj1.setEmptyValue("sj1 is empty");
        System.out.println(sj1);

        // Using add() method
        sj1.add(al.get(0)).add(al.get(1));
        System.out.println(sj1);

        StringJoiner sj2 = new StringJoiner(":");
        sj2.add(al.get(2)).add(al.get(3));

        // Using merge() method
        sj1.merge(sj2);

        // Using toString() method
        System.out.println(sj1.toString());
    &#125;
&#125;
            </code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>sj1 is empty
Tom,John
Tom,John,Mike:Alice
            </code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}