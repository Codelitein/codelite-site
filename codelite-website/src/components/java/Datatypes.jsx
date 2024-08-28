import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaDatatypes(){

    return(
        <>
        <Header />
        <div class="container">
<section>
    <h2>Overview of Java Data Types</h2>
    <p>Java is both a statically and strongly typed programming language. In Java, every type of data such as integers, characters, hexadecimal numbers, and more is predefined as part of the language. All constants or variables must be declared using one of the Java data types.</p>
</section>

<section>
    <h2>Categories of Data Types in Java</h2>
    <p>Data types in Java vary in size and the values they can store. These data types are categorized into two main groups:</p>
    <ul>
        <li><strong>Primitive Data Types</strong>: Includes Boolean, char, int, short, byte, long, float, and double.</li>
        <li><strong>Non-Primitive Data Types</strong>: Also known as Object Data Types, includes String, Array, and more.</li>
    </ul>
    <p>Understanding and effectively utilizing these data types is essential for writing efficient and error-free Java code.</p>
</section>

<section>
    <h2>Primitive Data Types in Java</h2>
    <p>Primitive data types represent single values and lack special capabilities. Java provides eight primitive data types as listed in the table below:</p>
    <table border="1" cellpadding="5">
        <thead>
            <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
                <th>Size</th>
                <th>Example Literals</th>
                <th>Range of Values</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>boolean</td>
                <td>True or false values</td>
                <td>false</td>
                <td>8 bits</td>
                <td>true, false</td>
                <td>true, false</td>
            </tr>
            <tr>
                <td>byte</td>
                <td>Two's complement integer</td>
                <td>0</td>
                <td>8 bits</td>
                <td>(none)</td>
                <td>-128 to 127</td>
            </tr>
            <tr>
                <td>char</td>
                <td>Unicode character</td>
                <td>\u0000</td>
                <td>16 bits</td>
                <td>'a', '\u0041', '\101', '\\', '\n', 'β'</td>
                <td>0 to 255</td>
            </tr>
            <tr>
                <td>short</td>
                <td>Two's complement integer</td>
                <td>0</td>
                <td>16 bits</td>
                <td>(none)</td>
                <td>-32,768 to 32,767</td>
            </tr>
            <tr>
                <td>int</td>
                <td>Two's complement integer</td>
                <td>0</td>
                <td>32 bits</td>
                <td>-2,-1,0,1,2</td>
                <td>-2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td>long</td>
                <td>Two's complement integer</td>
                <td>0</td>
                <td>64 bits</td>
                <td>-2L,-1L,0L,1L,2L</td>
                <td>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
            </tr>
            <tr>
                <td>float</td>
                <td>IEEE 754 floating-point</td>
                <td>0.0</td>
                <td>32 bits</td>
                <td>1.23e100f, -1.23e-100f, .3f, 3.14F</td>
                <td>Up to 7 decimal digits</td>
            </tr>
            <tr>
                <td>double</td>
                <td>IEEE 754 floating-point</td>
                <td>0.0</td>
                <td>64 bits</td>
                <td>1.23456e300d, -123456e-300d, 1e1d</td>
                <td>Up to 16 decimal digits</td>
            </tr>
        </tbody>
    </table>
</section>

<section>
    <h2>Detailed Explanation of Primitive Data Types</h2>

    <h3>1. Boolean Data Type</h3>
    <p>The Boolean data type represents a logical value, either <code>true</code> or <code>false</code>. Although conceptually it represents a single bit, its actual size is typically one byte (eight bits), depending on the virtual machine. Boolean values are not implicitly or explicitly convertible to any other type.</p>
    <p><strong>Syntax:</strong> <code>boolean booleanVar;</code></p>

    <h3>2. Byte Data Type</h3>
    <p>The byte data type is an 8-bit signed two’s complement integer. It is useful for saving memory in large arrays where memory conservation is crucial.</p>
    <p><strong>Syntax:</strong> <code>byte byteVar;</code></p>

    <h3>3. Short Data Type</h3>
    <p>The short data type is a 16-bit signed two’s complement integer. It is similar to byte and is useful in situations where memory savings matter, especially in large arrays.</p>
    <p><strong>Syntax:</strong> <code>short shortVar;</code></p>

    <h3>4. Integer Data Type</h3>
    <p>The int data type is a 32-bit signed two’s complement integer. In Java SE 8 and later, it can represent an unsigned 32-bit integer, which ranges from 0 to 2<sup>32</sup>-1.</p>
    <p><strong>Syntax:</strong> <code>int intVar;</code></p>

    <h3>5. Long Data Type</h3>
    <p>The long data type is a 64-bit signed two’s complement integer. It is suitable for cases where int is insufficient to hold the desired value. In Java SE 8 and later, the long data type can also represent an unsigned 64-bit long integer.</p>
    <p><strong>Syntax:</strong> <code>long longVar;</code></p>

    <h3>6. Float Data Type</h3>
    <p>The float data type is a single-precision 32-bit IEEE 754 floating-point number. It is recommended to use float instead of double when memory is constrained, especially in large arrays of floating-point numbers.</p>
    <p><strong>Syntax:</strong> <code>float floatVar;</code></p>

    <h3>7. Double Data Type</h3>
    <p>The double data type is a double-precision 64-bit IEEE 754 floating-point number. It is generally the default choice for decimal values. However, for precision-sensitive calculations, the BigDecimal class is recommended over double.</p>
    <p><strong>Syntax:</strong> <code>double doubleVar;</code></p>

    <h3>8. Char Data Type</h3>
    <p>The char data type is a single 16-bit Unicode character. Java uses the Unicode system, which requires 2 bytes to represent characters, unlike C/C++, which uses ASCII characters requiring only 1 byte.</p>
    <p><strong>Syntax:</strong> <code>char charVar;</code></p>
</section>

<section>
    <h2>Non-Primitive Data Types (Reference Data Types)</h2>
    <p>Reference Data Types store memory addresses of variable values rather than the data itself. These include Strings, Objects, Arrays, and more.</p>

    <h3>1. Strings</h3>
    <p>Strings are sequences of characters. Unlike C/C++, Java strings are not null-terminated. Instead, they are represented as objects.</p>
    <p><strong>Syntax:</strong> <code>String s = "ExampleString";</code></p>
    <p><strong>Example:</strong></p>
    <pre>
String s = "hellouser";
String s1 = new String("hellouser");
    </pre>

    <h3>2. Class</h3>
    <p>A class is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods common to all objects of one type.</p>

    <h3>3. Object</h3>
    <p>An Object is a fundamental unit in Object-Oriented Programming, representing real-life entities. It consists of state, behavior, and identity.</p>

    <h3>4. Interface</h3>
    <p>An interface defines a set of methods that a class must implement. It is similar to a class but focuses on the capabilities of classes that implement it.</p>

    <h3>5. Array</h3>
    <p>An Array is a collection of like-typed variables that are accessed using a common name. Java arrays are dynamically allocated and can be used as static fields, local variables, or method parameters.</p>
</section>
</div>
<Footer />
</>
    );
}