import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaCatchingException(){

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>This section explains how to utilize the three main components of exception handling in Java: the <code>try</code>, <code>catch</code>, and <code>finally</code> blocks. It also introduces the <code>try-with-resources</code> statement, a feature introduced in Java SE 7 that is particularly useful for managing resources that need to be closed, such as streams. Lastly, the section provides an example to illustrate how exceptions are managed and analyzed in various scenarios.</p>
        </section>

        <section>
            <h2>Example: ListOfNumbers Class</h2>
            <p>The following example demonstrates the <code>ListOfNumbers</code> class, which initializes an <code>ArrayList</code> with 10 integers ranging from 0 to 9. It also includes a <code>writeList()</code> method that writes the list's contents to a file named <code>OutFile.txt</code>. The example makes use of classes from <code>java.io</code>, which are covered in the Basic I/O section.</p>
            <pre><code>import java.io.*;
import java.util.List;
import java.util.ArrayList;

public class ListOfNumbers &#123;

    private List&lt;Integer&gt; list;
    private static final int SIZE = 10;

    public ListOfNumbers() &#123;
        list = new ArrayList&lt;&gt;(SIZE);
        for (int i = 0; i &lt; SIZE; i++) &#123;
            list.add(i);
        &#125;
    &#125;

    public void writeList() &#123;
        // The FileWriter constructor throws IOException, which must be caught.
        PrintWriter out = new PrintWriter(new FileWriter("OutFile.txt"));

        for (int i = 0; i &lt; SIZE; i++) &#123;
            // The get(int) method throws IndexOutOfBoundsException, which must be caught.
            out.println("Value at: " + i + " = " + list.get(i));
        &#125;
        out.close();
    &#125;
&#125;</code></pre>
            <p>The <strong>FileWriter</strong> constructor in the code initializes an output stream to a file, potentially throwing an <code>IOException</code> if the file cannot be opened. Additionally, the <strong>get(int)</strong> method of the <code>ArrayList</code> can throw an <code>IndexOutOfBoundsException</code> if the index is out of bounds.</p>
        </section>

        <section>
            <h2>The Try Block</h2>
            <p>The first step in handling exceptions is to place the code that might throw an exception inside a <code>try</code> block. The structure of a <code>try</code> block is as follows:</p>
            <pre><code>try &#123;
    // Code that might throw an exception
&#125; catch (ExceptionType e) &#123;
    // Handle exception
&#125; finally &#123;
    // Cleanup code (optional)
&#125;</code></pre>
            <p>In the <code>writeList()</code> method of the <code>ListOfNumbers</code> class, you can enclose the statements that might throw exceptions within a <code>try</code> block. This example uses a single <code>try</code> block for simplicity.</p>
            <pre><code>private List&lt;Integer&gt; list;
private static final int SIZE = 10;

public void writeList() &#123;
    PrintWriter out = null;
    try &#123;
        System.out.println("Entered try statement");
        out = new PrintWriter(new FileWriter("OutFile.txt"));
        for (int i = 0; i &lt; SIZE; i++) &#123;
            out.println("Value at: " + i + " = " + list.get(i));
        &#125;
    &#125; catch (Exception e) &#123;
        // Handle exception
    &#125; finally &#123;
        if (out != null) &#123;
            out.close();
        &#125;
    &#125;
&#125;</code></pre>
        </section>

        <section>
            <h2>The Catch Blocks</h2>
            <p>To handle exceptions, you use <code>catch</code> blocks after the <code>try</code> block. Each <code>catch</code> block is responsible for handling a specific type of exception:</p>
            <pre><code>try &#123;
    // Code that might throw an exception
&#125; catch (IndexOutOfBoundsException e) &#123;
    System.err.println("IndexOutOfBoundsException: " + e.getMessage());
&#125; catch (IOException e) &#123;
    System.err.println("Caught IOException: " + e.getMessage());
&#125;</code></pre>
            <p>Each <code>catch</code> block handles the type of exception specified in its argument. For example, the <code>IndexOutOfBoundsException</code> handler prints an error message when an <code>IndexOutOfBoundsException</code> is thrown, and similarly for <code>IOException</code>.</p>
            <p>Exception handlers can perform more actions than just printing messages. They can include error recovery processes, user prompts, or propagate the error to higher-level handlers using chained exceptions.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}