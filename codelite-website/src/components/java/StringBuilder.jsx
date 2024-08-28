import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";

export default function JavaStringBuilder() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>The <code>StringBuilder</code> class in Java represents a mutable sequence of characters. Unlike the <code>String</code> class, which creates an immutable sequence of characters, <code>StringBuilder</code> allows for modifications. It is similar to the <code>StringBuffer</code> class but differs in that it does not guarantee synchronization, making it faster and suitable for single-threaded scenarios.</p>
        </section>
        
        <section>
            <h2>Class Hierarchy</h2>
            <p>The hierarchy of the <code>StringBuilder</code> class is as follows:</p>
            <pre><code>java.lang.Object
 ↳ java.lang
    ↳ StringBuilder</code></pre>
        </section>
        
        <section>
            <h2>Syntax</h2>
            <p>The <code>StringBuilder</code> class is defined as follows:</p>
            <pre><code>public final class StringBuilder
    extends Object
    implements Serializable, CharSequence</code></pre>
        </section>
        
        <section>
            <h2>Constructors</h2>
            <p>The <code>StringBuilder</code> class includes several constructors:</p>
            <ul>
                <li><code>StringBuilder()</code>: Creates an empty <code>StringBuilder</code> with an initial capacity of 16 characters.</li>
                <li><code>StringBuilder(int capacity)</code>: Creates an empty <code>StringBuilder</code> with the specified initial capacity.</li>
                <li><code>StringBuilder(CharSequence seq)</code>: Initializes <code>StringBuilder</code> with the characters of the specified <code>CharSequence</code>.</li>
                <li><code>StringBuilder(String str)</code>: Initializes <code>StringBuilder</code> with the contents of the specified string.</li>
            </ul>
        </section>
        
        <section>
            <h2>Example Program</h2>
            <p>Here’s a sample program demonstrating the use of <code>StringBuilder</code>:</p>
            <pre><code>import java.util.*;
import java.util.concurrent.LinkedBlockingQueue;

public class Main &#123;
    public static void main(String[] argv) throws Exception &#123;
        // Create a StringBuilder object
        StringBuilder str = new StringBuilder();
        str.append("WORLD");

        // Print string
        System.out.println("String = " + str.toString());

        // Create a StringBuilder object with initial string
        StringBuilder str1 = new StringBuilder("AAAABBBCCCC");
        System.out.println("String1 = " + str1.toString());

        // Create a StringBuilder object with specified capacity
        StringBuilder str2 = new StringBuilder(10);
        System.out.println("String2 capacity = " + str2.capacity());

        // Create a StringBuilder object from another StringBuilder
        StringBuilder str3 = new StringBuilder(str1.toString());
        System.out.println("String3 = " + str3.toString());
    &#125;
&#125;</code></pre>
            <p><strong>Output:</strong></p>
            <pre class="output"><code>String = WORLD
String1 = AAAABBBCCCC
String2 capacity = 10
String3 = AAAABBBCCCC</code></pre>
        </section>
        
        <section>
            <h2>Methods</h2>
            <p>The <code>StringBuilder</code> class provides various methods:</p>
            <ul>
                <li><code>append(X x)</code>: Appends the string representation of the argument <code>x</code> to the sequence.</li>
                <li><code>appendCodePoint(int codePoint)</code>: Appends the string representation of the code point argument.</li>
                <li><code>capacity()</code>: Returns the current capacity.</li>
                <li><code>charAt(int index)</code>: Returns the character at the specified index.</li>
                <li><code>chars()</code>: Returns a stream of int values representing characters.</li>
                <li><code>codePointAt(int index)</code>: Returns the Unicode code point at the specified index.</li>
                <li><code>codePointBefore(int index)</code>: Returns the Unicode code point before the specified index.</li>
                <li><code>codePointCount(int beginIndex, int endIndex)</code>: Returns the number of Unicode code points in the specified range.</li>
                <li><code>codePoints()</code>: Returns a stream of code point values.</li>
                <li><code>delete(int start, int end)</code>: Removes characters in a substring from the sequence.</li>
                <li><code>deleteCharAt(int index)</code>: Removes the character at the specified index.</li>
                <li><code>ensureCapacity(int minimumCapacity)</code>: Ensures the capacity is at least the specified minimum.</li>
                <li><code>getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)</code>: Copies characters to the destination array.</li>
                <li><code>indexOf()</code>: Returns the index of the first occurrence of the specified substring.</li>
                <li><code>insert(int offset, boolean b)</code>: Inserts the string representation of the boolean argument.</li>
                <li><code>insert()</code>: Inserts the string representation of the char argument.</li>
                <li><code>lastIndexOf()</code>: Returns the index of the last occurrence of the specified substring.</li>
                <li><code>length()</code>: Returns the length (character count).</li>
                <li><code>offsetByCodePoints(int index, int codePointOffset)</code>: Returns the index offset by code points.</li>
                <li><code>replace(int start, int end, String str)</code>: Replaces characters in a substring with the specified string.</li>
                <li><code>reverse()</code>: Reverses the sequence of characters.</li>
                <li><code>setCharAt(int index, char ch)</code>: Sets the character at the specified index.</li>
                <li><code>setLength(int newLength)</code>: Sets the length of the sequence.</li>
                <li><code>subSequence(int start, int end)</code>: Returns a new character sequence that is a subsequence.</li>
                <li><code>substring()</code>: Returns a new string containing a subsequence of characters.</li>
                <li><code>toString()</code>: Returns a string representing the data in the sequence.</li>
                <li><code>trimToSize()</code>: Attempts to reduce storage used for the character sequence.</li>
            </ul>
        </section>
        
        <section>
            <h2>Example Usage</h2>
            <p>Here’s another example showcasing various methods of <code>StringBuilder</code>:</p>
            <pre><code>import java.util.*;
import java.util.concurrent.LinkedBlockingQueue;

public class Main &#123;
    public static void main(String[] argv) throws Exception &#123;
        // Create a StringBuilder object with a string
        StringBuilder str = new StringBuilder("AAAABBBCCCC");
        System.out.println("String = " + str.toString());

        // Reverse the string
        StringBuilder reverseStr = str.reverse();
        System.out.println("Reverse String = " + reverseStr.toString());

        // Append a comma (44) to the String
        str.appendCodePoint(44);
        System.out.println("Modified StringBuilder = " + str);

        // Get capacity
        int capacity = str.capacity();
        System.out.println("StringBuilder = " + str);
        System.out.println("Capacity of StringBuilder = " + capacity);
    &#125;
&#125;</code></pre>
            <p><strong>Output:</strong></p>
            <pre class="output"><code>String = AAAABBBCCCC
Reverse String = CCCCBBBAAAA
Modified StringBuilder = CCCCBBBAAAA,
StringBuilder = CCCCBBBAAAA,
Capacity of StringBuilder = 27</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}