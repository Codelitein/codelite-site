import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaScannerClass() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>Understanding the Scanner Class in Java</h2>
        <p>The <code>Scanner</code> class in Java, part of the <code>java.util</code> package, is a convenient tool for capturing input of primitive data types like <code>int</code>, <code>double</code>, and more, as well as strings. While using the <code>Scanner</code> class is straightforward for obtaining input in Java programs, it's not the most efficient option in scenarios where timing is crucial, such as in competitive programming.</p>
    </section>

    <section>
        <h2>Types of Input with Java Scanner</h2>
        <p>The <code>Scanner</code> class facilitates input from the standard input stream in Java. Below are methods used to extract different types of data:</p>
        
        <table>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
            <tr>
                <td><code>nextBoolean()</code></td>
                <td>Retrieves a <code>boolean</code> value.</td>
            </tr>
            <tr>
                <td><code>nextByte()</code></td>
                <td>Retrieves a <code>byte</code> value.</td>
            </tr>
            <tr>
                <td><code>nextDouble()</code></td>
                <td>Retrieves a <code>double</code> value.</td>
            </tr>
            <tr>
                <td><code>nextFloat()</code></td>
                <td>Retrieves a <code>float</code> value.</td>
            </tr>
            <tr>
                <td><code>nextInt()</code></td>
                <td>Retrieves an <code>int</code> value.</td>
            </tr>
            <tr>
                <td><code>nextLine()</code></td>
                <td>Retrieves an entire line as a <code>String</code>.</td>
            </tr>
            <tr>
                <td><code>nextLong()</code></td>
                <td>Retrieves a <code>long</code> value.</td>
            </tr>
            <tr>
                <td><code>nextShort()</code></td>
                <td>Retrieves a <code>short</code> value.</td>
            </tr>
        </table>
    </section>

    <section>
        <h2>Examples of Using the Java Scanner Class</h2>
        <p>Below are code examples demonstrating how to read data of various types using the <code>Scanner</code> class:</p>
        
        <h3>Example 1</h3>
        <pre><code>
// Java program to read data of various types 
// using Scanner class.
import java.util.Scanner;

public class ScannerDemo1 &#125;
    public static void main(String[] args) &#125;
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        char gender = sc.next().charAt(0);
        int age = sc.nextInt();
        long mobileNo = sc.nextLong();
        double cgpa = sc.nextDouble();

        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
        System.out.println("Age: " + age);
        System.out.println("Mobile Number: " + mobileNo);
        System.out.println("CGPA: " + cgpa);
    &#125;
&#125;
        </code></pre>

        <h3>Input</h3>
        <p>User<br/>M<br/>30<br/>1234567890<br/>8.30</p>

        <h3>Output</h3>
        <p>Name: User<br/>Gender: M<br/>Age: 30<br/>Mobile Number: 1234567890<br/>CGPA: 8.30</p>
    </section>

    <section>
        <h2>Checking Input Type with hasNextXYZ() Methods</h2>
        <p>The <code>Scanner</code> class provides <code>hasNextXYZ()</code> methods to check if the next input is of a particular type. For instance, <code>hasNextInt()</code> checks if the next token is an <code>int</code>. Similar methods exist for other types.</p>

        <h3>Example 2</h3>
        <pre><code>
// Java program to read some values using Scanner
// class and print their mean.
import java.util.Scanner;

public class ScannerDemo2 &#125;
    public static void main(String[] args) &#125;
        Scanner sc = new Scanner(System.in);
        int sum = 0, count = 0;

        while (sc.hasNextInt()) &#125;
            int num = sc.nextInt();
            sum += num;
            count++;
        &#125;
        if (count &#62; 0) &#125;
            int mean = sum / count;
            System.out.println("Mean: " + mean);
        &#125; else &#125;
            System.out.println("No integers were input. Mean cannot be calculated.");
        &#125;
    &#125;
&#125;
        </code></pre>

        <h3>Input</h3>
        <p>1 2 3 4 5</p>

        <h3>Output</h3>
        <p>Mean: 3</p>
    </section>

    <section>
        <h2>Key Points About the Scanner Class</h2>
        <ul>
            <li>The <code>Scanner</code> class is often used with the <code>System.in</code> object, representing the standard input stream.</li>
            <li>Use the <code>nextXYZ()</code> methods to read specific data types like <code>nextInt()</code> for integers.</li>
            <li>To read strings, the <code>nextLine()</code> method is commonly used.</li>
            <li>For reading single characters, <code>next().charAt(0)</code> is utilized.</li>
            <li>The <code>Scanner</code> class splits input into tokens, which are smaller elements that are interpreted by Java.</li>
        </ul>
    </section>
</div>
<Footer />
</>
    );
}