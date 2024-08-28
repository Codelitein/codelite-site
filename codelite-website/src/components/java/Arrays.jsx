import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaArrays() {
    return(
        <>
       <Header /> 
        <div class="container">
        <section>
            <h2>Introduction to Java Arrays</h2>
            <p>In Java, arrays are dynamically allocated data structures. They may be stored in contiguous memory locations. Unlike C/C++, where array size is determined using the <code>sizeof</code> operator, in Java, the length of an array can be accessed via its <code>length</code> property. Arrays can be declared with brackets <code>[]</code> after the data type and are indexed starting from 0.</p>
            <p>Arrays in Java can be utilized as static fields, local variables, or method parameters. They can hold both primitive data types (such as <code>int</code> and <code>char</code>) and references to objects. While primitive values might be stored in contiguous memory locations (though the JVM does not guarantee this), object references are stored in the heap segment.</p>
        </section>
        
        <section>
            <h2>Creating and Initializing Arrays</h2>
            <h3>One-Dimensional Arrays</h3>
            <p>The syntax for declaring a one-dimensional array is:</p>
            <pre><code>type varName[];
type[] varName;</code></pre>
            <p>Here, <code>type</code> specifies the data type of the array elements, and <code>varName</code> is the name of the array. Arrays can be of various primitive data types (e.g., <code>int</code>, <code>char</code>) or user-defined data types (e.g., objects of a class).</p>
            <p><strong>Examples:</strong></p>
            <pre><code>// Valid declarations
int intArray[];
int[] intArray;

// Array of references to objects of class MyClass
MyClass myClassArray[];

// Array of Object
Object[] obj;

// Array of Collection of unknown type
Collection[] col;</code></pre>
            <p>Note that declaring an array does not allocate memory; it only defines the variable. To allocate memory for the array, use <code>new</code>:</p>
            <pre><code>// Declaring an array
int intArray[];

// Allocating memory to the array
intArray = new int[5];

// Combined declaration and allocation
int[] intArray = new int[5];</code></pre>
            <p>The array elements are initialized to default values: 0 for numeric types, <code>false</code> for boolean, and <code>null</code> for reference types.</p>
        </section>
        
        <section>
            <h2>Array Literals</h2>
            <p>If the size and initial values of the array are known, you can use array literals:</p>
            <pre><code>// Array literal declaration
int[] intArray = new int[]&#123; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 &#123;;</code></pre>
            <p>In recent Java versions, you can omit the <code>new int[]</code> part:</p>
            <pre><code>// Array literal with simplified syntax
int[] intArray = &#123; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 &#123;;</code></pre>
        </section>
        
        <section>
            <h2>Accessing Array Elements</h2>
            <p>Array elements are accessed using their index, starting from 0. You can use a <code>for</code> loop to iterate through the array:</p>
            <pre><code>// Accessing array elements using a for loop
for (int i = 0; i &#60; arr.length; i++)
    System.out.println("Element at index " + i + " : " + arr[i]);</code></pre>
            <p><strong>Example:</strong></p>
            <pre><code>// Java program to illustrate array operations
class GFG &#123;
    public static void main(String[] args) &#123;
        // Declare an array of integers
        int[] arr = new int[5];

        // Initialize array elements
        arr[0] = 20;
        arr[1] = 50;
        arr[2] = 10;
        arr[3] = 40;
        arr[4] = 30;

        // Print array elements
        for (int i = 0; i &#60; arr.length; i++)
            System.out.println("Element at index " + i + " : " + arr[i]);
    &#123;
&#123;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Element at index 0 : 20
Element at index 1 : 50
Element at index 2 : 10
Element at index 3 : 40
Element at index 4 : 30</code></pre>
            </div>
            <p>Time Complexity: O(n), Auxiliary Space: O(1)</p>
        </section>
        
        <section>
            <h2>Arrays of Objects</h2>
            <p>Arrays of objects are declared similarly to arrays of primitive data types:</p>
            <pre><code>Student[] arr = new Student[5]; // Student is a user-defined class</code></pre>
            <p>Each element of this array can hold a reference to an object of the <code>Student</code> class.</p>
            <p><strong>Example 1:</strong></p>
            <pre><code>import java.io.*;

class Main &#123;
    public static void main (String[] args) &#123;
        int[] arr = new int[4];
        System.out.println("Array Size: " + arr.length);
    &#123;
&#123;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Array Size: 4</code></pre>
            </div>
            <p><strong>Example 2:</strong></p>
            <pre><code>class Student &#123;
    public int roll_no;
    public String name;
    Student(String name, int roll_no) &#123;
        this.name = name;
        this.roll_no = roll_no;
    &#123;
&#123;

public class GFG &#123;
    public static void main(String[] args) &#123;
        // Declare an array of Student
        Student[] arr = new Student[5];

        // Initialize array elements
        arr[0] = new Student("Tom", 100);
        arr[1] = new Student("John", 105);
        arr[2] = new Student("Michael", 104);
        arr[3] = new Student("Joy", 108);
        arr[4] = new Student("Mike", 110);

        // Print array elements
        for (int i = 0; i &#60; arr.length; i++)
            System.out.println("Element at " + i + " : " + arr[i].name + " " + arr[i].roll_no);
    &#123;
&#123;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Element at 0 : Tom 100
Element at 1 : John 105
Element at 2 : Michael 104
Element at 3 : Joy 108
Element at 4 : Mike 110</code></pre>
            <p><strong>Example 3:</strong></p>
            <pre><code>class Student &#123;
    public String name;
    Student(String name) &#123;
        this.name = name;
    &#123;
    @Override
    public String toString() &#123;
        return name;
    &#123;
&#123;

public class Main &#123;
    public static void main (String[] args) &#123;
        Student[] myStudents = new Student[]&#123;new Student("Nike"), new Student("Adidas"), new Student("Opera"), new Student("Leo")&#123;;
        for (Student m : myStudents) &#123;
            System.out.println(m);
        &#123;
    &#123;
&#123;</code></pre>
</div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Nike
Adidas
Opera
Leo</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Handling ArrayIndexOutOfBoundsException</h2>
            <p>Accessing elements outside the array bounds will throw an <code>ArrayIndexOutOfBoundsException</code>:</p>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int[] arr = new int[3];
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;

        System.out.println("Trying to access element outside the size of array");
        System.out.println(arr[4]);
    &#123;
&#123;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Trying to access element outside the size of array
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 3
at Main.main(Main.java:12)</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Iterating Over Arrays</h2>
            <p>You can also use a <code>for</code> loop to iterate through array elements:</p>
            <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int[] arr = new int[2];
        arr[0] = 10;
        arr[1] = 20;

        for (int i = 0; i &#60; arr.length; i++)
            System.out.println(arr[i]);
    &#123;
&#123;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>10
20</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}