import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaOperators() {

    return(
        <>
        <Header />
        <div class="container">

    <section>
        <h2>Introduction to Java Operators</h2>
        <p>In Java, operators are symbols used to perform specific operations. These operators simplify tasks such as addition and multiplication, which, despite their simplicity in usage, have complex implementations.</p>
    </section>

    <section>
        <h2>Types of Operators in Java</h2>
        <p>Java includes several types of operators, categorized based on their functionality:</p>

        <h3>1. Arithmetic Operators</h3>
        <p>Arithmetic operators perform basic mathematical operations on primitive data types:</p>
        <ul>
            <li><code>*</code> : Multiplication</li>
            <li><code>/</code> : Division</li>
            <li><code>%</code> : Modulo</li>
            <li><code>+</code> : Addition</li>
            <li><code>-</code> : Subtraction</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        int a = 10;
        int b = 3;
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
a + b = 13
a - b = 7
a * b = 30
a / b = 3
a % b = 1
        </pre>

        <h3>2. Unary Operators</h3>
        <p>Unary operators operate on a single operand to increment, decrement, or negate a value:</p>
        <ul>
            <li><code>-</code> : Unary minus, negates a value</li>
            <li><code>+</code> : Unary plus, indicates a positive value</li>
            <li><code>++</code> : Increment operator</li>
            <li><code>--</code> : Decrement operator</li>
            <li><code>!</code> : Logical NOT operator, inverts a boolean value</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        int a = 5;
        int b = 5;
        System.out.println("Postincrement : " + (a++));
        System.out.println("Preincrement : " + (++a));
        System.out.println("Postdecrement : " + (b--));
        System.out.println("Predecrement : " + (--b));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
Postincrement : 5
Preincrement : 7
Postdecrement : 5
Predecrement : 3
        </pre>

        <h3>3. Assignment Operators</h3>
        <p>Assignment operators assign a value to a variable. They can also be combined with other operators for shorthand operations:</p>
        <ul>
            <li><code>=</code> : Basic assignment</li>
            <li><code>+=</code> : Addition assignment</li>
            <li><code>-=</code> : Subtraction assignment</li>
            <li><code>*=</code> : Multiplication assignment</li>
            <li><code>/=</code> : Division assignment</li>
            <li><code>%=</code> : Modulo assignment</li>
            <li><code>&=</code> : Bitwise AND assignment</li>
            <li><code>|=</code> : Bitwise OR assignment</li>
            <li><code>^=</code> : Bitwise XOR assignment</li>
            <li><code>&#60;&#60; =</code> : Left shift assignment</li>
            <li><code>&#62;=</code> : Right shift assignment</li>
            <li><code>&#62;&#62;=</code> : Unsigned right shift assignment</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        int f = 7;
        System.out.println("f += 3: " + (f += 3));
        System.out.println("f -= 2: " + (f -= 2));
        System.out.println("f *= 4: " + (f *= 4));
        System.out.println("f /= 3: " + (f /= 3));
        System.out.println("f %= 2: " + (f %= 2));
        System.out.println("f &= 0b1010: " + (f &= 0b1010));
        System.out.println("f |= 0b1100: " + (f |= 0b1100));
        System.out.println("f ^= 0b1010: " + (f ^= 0b1010));
        System.out.println("f &#60;&#60;= 2: " + (f &#60;&#60;= 2));
        System.out.println("f &#62;&#62;= 1: " + (f &#62;&#62;= 1));
        System.out.println("f &#62;&#62;&#62;= 1: " + (f &#62;&#62;&#62;= 1));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
f += 3: 10
f -= 2: 8
f *= 4: 32
f /= 3: 10
f %= 2: 0
f &= 0b1010: 0
f |= 0b1100: 12
f ^= 0b1010: 6
f &#60;&#60;= 2: 24
f &#62;&#62;= 1: 12
f &#62;&#62;&#62;= 1: 6
        </pre>

        <h3>4. Relational Operators</h3>
        <p>Relational operators are used to compare two values and return a boolean result:</p>
        <ul>
            <li><code>==</code> : Equal to</li>
            <li><code>!=</code> : Not equal to</li>
            <li><code>&lt;</code> : Less than</li>
            <li><code>&lt;=</code> : Less than or equal to</li>
            <li><code>&gt;</code> : Greater than</li>
            <li><code>&gt;=</code> : Greater than or equal to</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        int a = 10;
        int b = 3;
        int c = 5;
        System.out.println("a &#62; b: " + (a &#62; b));
        System.out.println("a &#60; b: " + (a &#60; b));
        System.out.println("a &#62;= b: " + (a &#62;= b));
        System.out.println("a &#60;= b: " + (a &#60;= b));
        System.out.println("a == c: " + (a == c));
        System.out.println("a != c: " + (a != c));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
a &#62; b: true
a &#60; b: false
a &#62;= b: true
a &#60;= b: false
a == c: false
a != c: true
        </pre>

        <h3>5. Logical Operators</h3>
        <p>Logical operators are used to combine multiple boolean expressions:</p>
        <ul>
            <li><code>&&</code> : Logical AND</li>
            <li><code>||</code> : Logical OR</li>
            <li><code>!</code> : Logical NOT</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        boolean a = true;
        boolean b = false;
        System.out.println("a && b: " + (a && b));
        System.out.println("a || b: " + (a || b));
        System.out.println("!a: " + (!a));
        System.out.println("!b: " + (!b));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
a && b: false
a || b: true
!a: false
!b: true
        </pre>

        <h3>6. Bitwise Operators</h3>
        <p>Bitwise operators operate on the binary representations of numbers:</p>
        <ul>
            <li><code>&amp;</code> : Bitwise AND</li>
            <li><code>|</code> : Bitwise OR</li>
            <li><code>^</code> : Bitwise XOR</li>
            <li><code>&lt;&lt;</code> : Left shift</li>
            <li><code>&gt;&gt;</code> : Right shift</li>
            <li><code>&gt;&gt;&gt;</code> : Unsigned right shift</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        int a = 5; // 0101 in binary
        int b = 3; // 0011 in binary
        System.out.println("a & b: " + (a & b));
        System.out.println("a | b: " + (a | b));
        System.out.println("a ^ b: " + (a ^ b));
        System.out.println("a &#60;&#60; 1: " + (a &#60;&#60; 1));
        System.out.println("a &#62;&#62; 1: " + (a &#62;&#62; 1));
        System.out.println("a &#62;&#62;&#62; 1: " + (a &#62;&#62;&#62; 1));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
a & b: 1
a | b: 7
a ^ b: 6
a &#60;&#60; 1: 10
a &#62;&#62; 1: 2
a &#62;&#62;&#62; 1: 2
        </pre>

        <h3>7. Conditional (Ternary) Operator</h3>
        <p>The conditional operator evaluates a boolean expression and returns one of two values based on the result:</p>
        <ul>
            <li><code>?:</code> : Conditional operator</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        int a = 10;
        int b = 20;
        int max = (a &#62; b) ? a : b;
        System.out.println("The maximum value is: " + max);
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
The maximum value is: 20
        </pre>

        <h3>8. Instanceof Operator</h3>
        <p>The <code>instanceof</code> operator checks if an object is an instance of a specific class or subclass:</p>
        <ul>
            <li><code>instanceof</code> : Type check</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre>
public class Main &#123;
    public static void main(String[] args) &#123;
        String str = "Hello, World!";
        System.out.println("str instanceof String: " + (str instanceof String));
    &#125;
&#125;
        </pre>
        <p><strong>Output:</strong></p>
        <pre>
str instanceof String: true
        </pre>
    </section>

</div>
<Footer />
</>
    );
}