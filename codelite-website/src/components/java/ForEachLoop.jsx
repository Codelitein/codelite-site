import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaForEachLoop() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction</h2>
            <p>The for-each loop, introduced in Java 5, provides a simplified way to iterate over arrays and collections, similar to other looping techniques like the for loop, while loop, and do-while loop.</p>
        </section>
        
        <section>
            <h2>Syntax</h2>
            <p>The for-each loop begins with the <code>for</code> keyword, similar to a standard for-loop. However, instead of initializing a loop counter, you declare a variable of the same type as the array elements, followed by a colon and then the array name. In the loop body, you use the loop variable directly rather than an indexed array element.</p>
            <p><strong>Syntax:</strong></p>
            <pre><code>for (type var : array) &#123;
    statements using var;
&#125;</code></pre>
        </section>
        
        <section>
            <h2>Example Program</h2>
            <p>Here's a simple example of using the for-each loop:</p>
            <pre><code>import java.io.*;

class Loop &#123;
    public static void main(String[] args) &#123;
        // Array declaration
        int[] arr = &#123;10, 50, 60, 80, 90&#125;;
        for (int element : arr) &#123;
            System.out.print(element + " ");
        &#125;
    &#125;
&#125;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>10 50 60 80 90</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Equivalent Syntax</h2>
            <p>The for-each loop is functionally equivalent to the following traditional for-loop:</p>
            <pre><code>for (int i = 0; i &#60; arr.length; i++) &#123;
    type var = arr[i];
    statements using var;
&#125;</code></pre>
        </section>
        
        <section>
            <h2>Advanced Example</h2>
            <p>Below is an example that demonstrates finding the maximum value in an array using the for-each loop:</p>
            <pre><code>class ForEach &#123;
    public static void main(String[] args) &#123;
        int[] marks = &#123;125, 132, 95, 116, 110&#125;;
        int highestMarks = maximum(marks);
        System.out.println("The highest score is " + highestMarks);
    &#125;

    public static int maximum(int[] numbers) &#123;
        int maxSoFar = numbers[0];
        for (int num : numbers) &#123;
            if (num &#62; maxSoFar) &#123;
                maxSoFar = num;
            &#125;
        &#125;
        return maxSoFar;
    &#125;
&#125;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>The highest score is 132</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Limitations of For-each Loop</h2>
            <p>Despite its convenience, the for-each loop has several limitations:</p>
            <ul>
                <li><strong>Array Modification:</strong> For-each loops do not allow modification of the array elements. For instance, changes made to the loop variable do not affect the original array.</li>
                <li><strong>Index Tracking:</strong> For-each loops do not keep track of the index, making it impossible to obtain the index of the current element.</li>
                <li><strong>Direction of Iteration:</strong> For-each loops can only iterate in a forward direction, so reverse iteration is not possible.</li>
                <li><strong>Multiple Conditions:</strong> For-each loops do not easily support multiple decision-making statements at once.</li>
                <li><strong>Performance Overhead:</strong> There can be performance overhead compared to traditional iteration methods.</li>
            </ul>
        </section>
        
        <section>
            <h2>Performance Comparison</h2>
            <p>Here is a comparison of performance between for-each loops and other iteration methods:</p>
            <pre><code>import java.io.*;
import java.util.*;

public class Main &#123;
    public static void main(String[] args) &#123;
        List&#60;Integer&#62; list = new ArrayList&#60;&#62;();
        long startTime;
        long endTime;

        for (int i = 0; i &#60; 1000000; i++) &#123;
            list.add(i);
        &#125;

        // Type 1
        startTime = Calendar.getInstance().getTimeInMillis();
        for (int i : list) &#123;
            int a = i;
        &#125;
        endTime = Calendar.getInstance().getTimeInMillis();
        System.out.println("For each loop :: " + (endTime - startTime) + " ms");

        // Type 2
        startTime = Calendar.getInstance().getTimeInMillis();
        for (int j = 0; j &#60; list.size(); j++) &#123;
            int a = list.get(j);
        &#125;
        endTime = Calendar.getInstance().getTimeInMillis();
        System.out.println("Using collection.size() :: " + (endTime - startTime) + " ms");

        // Type 3
        startTime = Calendar.getInstance().getTimeInMillis();
        int size = list.size();
        for (int j = 0; j &#60; size; j++) &#123;
            int a = list.get(j);
        &#125;
        endTime = Calendar.getInstance().getTimeInMillis();
        System.out.println("By calculating collection.size() first :: " + (endTime - startTime) + " ms");

        // Type 4
        startTime = Calendar.getInstance().getTimeInMillis();
        for (int j = list.size() - 1; j &#62;= 0; j--) &#123;
            int a = list.get(j);
        &#125;
        endTime = Calendar.getInstance().getTimeInMillis();
        System.out.println("Using [int j = list.size(); j &#62; size; j--] :: " + (endTime - startTime) + " ms");
    &#125;
&#125;</code></pre>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>For each loop :: 48 ms
Using collection.size() :: 12 ms
By calculating collection.size() first :: 10 ms
Using [int j = list.size(); j &#62; size; j--] :: 16 ms</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}