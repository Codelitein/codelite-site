import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";
import NextPageButton from "../reuse/NextPageButton";
import PreviousPageButton from "../reuse/PreviousPageButton";


export default function JavaWrapperClass() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
    <h2>Introduction to Wrapper Classes</h2>
    <p>Wrapper classes in Java are used to encapsulate primitive data types within an object. These classes provide a way to treat primitive data as objects. When an object of a wrapper class is created, it contains a field where the primitive data type is stored. In essence, wrapper classes allow primitive values to be wrapped inside an object.</p>
</section>

<section>
    <h2>The Need for Wrapper Classes</h2>
    <p>Wrapper classes in Java serve several essential purposes:</p>
    <ul>
        <li>They allow primitive types to be treated as objects, which is necessary when modifying arguments passed to methods (since primitive types are passed by value).</li>
        <li>Wrapper classes are required by many classes in the <code>java.util</code> package, which handle only objects.</li>
        <li>Data structures in the Collection framework, such as <code>ArrayList</code> and <code>Vector</code>, can store only objects, not primitive types.</li>
        <li>Synchronization in multithreading environments requires objects, making wrapper classes essential.</li>
    </ul>
</section>

<section>
    <h2>Benefits of Wrapper Classes</h2>
    <p>Wrapper classes provide several advantages:</p>
    <ul>
        <li>They allow collections to store only object data.</li>
        <li>Multiple methods, such as <code>compareTo()</code>, <code>equals()</code>, and <code>toString()</code>, can be called on object data.</li>
        <li>Objects can be cloned, while primitive data cannot.</li>
        <li>Object data can hold <code>null</code> values.</li>
        <li>Serialization is possible only with object data.</li>
    </ul>
</section>

<section>
    <h2>Primitive Data Types and Their Corresponding Wrapper Classes</h2>
    <table>
        <tr>
            <th>Primitive Data Type</th>
            <th>Wrapper Class</th>
        </tr>
        <tr>
            <td>char</td>
            <td>Character</td>
        </tr>
        <tr>
            <td>byte</td>
            <td>Byte</td>
        </tr>
        <tr>
            <td>short</td>
            <td>Short</td>
        </tr>
        <tr>
            <td>int</td>
            <td>Integer</td>
        </tr>
        <tr>
            <td>long</td>
            <td>Long</td>
        </tr>
        <tr>
            <td>float</td>
            <td>Float</td>
        </tr>
        <tr>
            <td>double</td>
            <td>Double</td>
        </tr>
        <tr>
            <td>boolean</td>
            <td>Boolean</td>
        </tr>
    </table>
</section>

<section>
    <h2>Autoboxing and Unboxing</h2>
    <h3>1. Autoboxing</h3>
    <p>Autoboxing refers to the automatic conversion of primitive types into their corresponding wrapper class objects. For instance, converting an <code>int</code> to an <code>Integer</code>, or a <code>double</code> to a <code>Double</code>.</p>
    <pre><code>
// Java program to demonstrate Autoboxing
import java.util.ArrayList;
class Autoboxing &#123;
    public static void main(String[] args) &#123;
        char ch = 'a';
        // Autoboxing- primitive to Character object conversion
        Character a = ch;

        ArrayList&lt;Integer&gt; arrayList = new ArrayList&lt;&gt;();
        // Autoboxing because ArrayList stores only objects
        arrayList.add(25);

        // Printing the value from object
        System.out.println(arrayList.get(0));
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong> 25</p>

    <h3>2. Unboxing</h3>
    <p>Unboxing is the reverse process of autoboxing, where a wrapper class object is automatically converted to its corresponding primitive type. For example, converting an <code>Integer</code> to <code>int</code>, or a <code>Double</code> to <code>double</code>.</p>
    <pre><code>
// Java program to demonstrate Unboxing
import java.util.ArrayList;
class Unboxing &#123;
    public static void main(String[] args) &#123;
        Character ch = 'a';
        // Unboxing - Character object to primitive conversion
        char a = ch;

        ArrayList&lt;Integer&gt; arrayList = new ArrayList&lt;&gt;();
        arrayList.add(24);

        // Unboxing because get method returns an Integer object
        int num = arrayList.get(0);

        // Printing the value from primitive data types
        System.out.println(num);
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong> 24</p>
</section>

<section>
    <h2>Java Wrapper Classes Example</h2>
    <pre><code>
public class Main &#123;
    public static void main(String[] args) &#123;
        // byte data type
        byte a = 1;
        // Wrapping around Byte object
        Byte byteobj = new Byte(a);

        // int data type
        int b = 10;
        // Wrapping around Integer object
        Integer intobj = new Integer(b);

        // float data type
        float c = 18.6f;
        // Wrapping around Float object
        Float floatobj = new Float(c);

        // double data type
        double d = 250.5;
        // Wrapping around Double object
        Double doubleobj = new Double(d);

        // char data type
        char e = 'a';
        // Wrapping around Character object
        Character charobj = e;

        // Printing the values from objects
        System.out.println("Values of Wrapper objects (printing as objects)");
        System.out.println("\nByte object byteobj: " + byteobj);
        System.out.println("\nInteger object intobj: " + intobj);
        System.out.println("\nFloat object floatobj: " + floatobj);
        System.out.println("\nDouble object doubleobj: " + doubleobj);
        System.out.println("\nCharacter object charobj: " + charobj);

        // Unwrapping objects to primitive data types
        byte bv = byteobj;
        int iv = intobj;
        float fv = floatobj;
        double dv = doubleobj;
        char cv = charobj;

        // Printing the values from data types
        System.out.println("\nUnwrapped values (printing as data types)");
        System.out.println("\nbyte value, bv: " + bv);
        System.out.println("\nint value, iv: " + iv);
        System.out.println("\nfloat value, fv: " + fv);
        System.out.println("\ndouble value, dv: " + dv);
        System.out.println("\nchar value, cv: " + cv);
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong></p>
    <ul>
        <li>Byte object byteobj: 1</li>
        <li>Integer object intobj: 10</li>
        <li>Float object floatobj: 18.6</li>
        <li>Double object doubleobj: 250.5</li>
        <li>Character object charobj: a</li>
        <li>byte value, bv: 1</li>
        <li>int value, iv: 10</li>
        <li>float value, fv: 18.6</li>
        <li>double value, dv: 250.5</li>
        <li>char value, cv: a</li>
    </ul>
</section>

<section>
    <h2>Creating Custom Wrapper Classes in Java</h2>
    <p>Java wrapper classes allow you to wrap primitive data types. You can also create custom wrapper classes in Java, which can be useful for creating structures like queues, stacks, etc.</p>
    <pre><code>
// Java Program to implement a Custom Wrapper Class
import java.io.*;
class Maximum &#123;
    private int maxi = 0;
    private int size = 0;

    public void insert(int x) &#123;
        this.size++;
        if (x &#60;= this.maxi)
            return;
        this.maxi = x;
    &#125;

    public int top() &#123; return this.maxi; &#125;

    public int elementNumber() &#123; return this.size; &#125;
&#125;;

class Main &#123;
    public static void main(String[] args) &#123;
        Maximum x = new Maximum();
        x.insert(12);
        x.insert(3);
        x.insert(23);

        System.out.println("Maximum element: " + x.top());
        System.out.println("Number of elements inserted: " + x.elementNumber());
    &#125;
&#125;
    </code></pre>
    <p><strong>Output:</strong> Maximum element: 23</p>
    <p>Number of elements inserted: 3</p>
</section>
</div>
<PreviousPageButton path={"/java/introduction"} />
<NextPageButton path={"/java/introduction"} />
<Footer />
</>
    );
}