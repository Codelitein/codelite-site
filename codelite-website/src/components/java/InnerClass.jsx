import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaInnerClass() {

    return(
        <>
        <Header />
        <div class="container">
    <section>
        <h2>Introduction to Inner Classes</h2>
        <p>Inner classes in Java are classes defined within another class. They allow you to group classes that are only used in one place, which can enhance encapsulation and simplify code. This example demonstrates how to use an inner class to iterate over an array and print values at even indices.</p>
    </section>

    <section>
        <h2>Example: DataStructure with Inner Class</h2>
        <p>The following example showcases an outer class <code>DataStructure</code> and an inner class <code>EvenIterator</code>. The <code>DataStructure</code> class contains an array filled with integer values and a method to print values at even indices using the inner class iterator.</p>
        
        <pre><code>
public class DataStructure &#123;

    // Create an array
    private final static int SIZE = 15;
    private int[] arrayOfInts = new int[SIZE];

    public DataStructure() &#123;
        // Fill the array with ascending integer values
        for (int i = 0; i &#60; SIZE; i++) &#123;
            arrayOfInts[i] = i;
        &#125;
    &#125;

    public void printEven() &#123;
        // Print values at even indices of the array
        DataStructureIterator iterator = this.new EvenIterator();
        while (iterator.hasNext()) &#123;
            System.out.print(iterator.next() + " ");
        &#125;
        System.out.println();
    &#125;

    interface DataStructureIterator extends java.util.Iterator&#60;Integer&#62; &#123; &#125;

    // Inner class implementing DataStructureIterator interface
    private class EvenIterator implements DataStructureIterator &#123;

        private int nextIndex = 0;

        public boolean hasNext() &#123;
            return (nextIndex &#60;= SIZE - 1);
        &#125;

        public Integer next() &#123;
            Integer retValue = Integer.valueOf(arrayOfInts[nextIndex]);
            nextIndex += 2;
            return retValue;
        &#125;
    &#125;

    public static void main(String s[]) &#123;
        // Create DataStructure object and print even-index values
        DataStructure ds = new DataStructure();
        ds.printEven();
    &#125;
&#125;
        </code></pre>
        
        <p>Output:</p>
        <pre><code>
0 2 4 6 8 10 12 14
        </code></pre>
    </section>

    <section>
        <h2>Local and Anonymous Inner Classes</h2>
        <p>In addition to the standard inner classes, Java also supports local and anonymous inner classes:</p>
        <ul>
            <li><strong>Local Classes:</strong> Defined within a method, constructor, or block. These classes are useful for creating instances that are only needed within a specific method or block.</li>
            <li><strong>Anonymous Classes:</strong> Defined without a name and used for short-term use cases. These classes are often used for implementing interfaces or extending classes in a concise manner.</li>
        </ul>
    </section>

    <section>
        <h2>Modifiers for Inner Classes</h2>
        <p>Modifiers for inner classes can include access specifiers such as <code>private</code>, <code>protected</code>, and <code>public</code>, which control the visibility and accessibility of the inner class within the outer class. These modifiers function similarly to those used for other class members.</p>
    </section>
</div>
<Footer />
</>
    );
}