import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaGenerics() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Generic Types</h2>
            <p>A generic type in Java refers to a class or interface that is parameterized with respect to types. For instance, the <code>Box</code> class can be modified to illustrate how generics work.</p>
        </section>
        
        <section>
            <h2>A Simple Box Class</h2>
            <p>The original <code>Box</code> class, which is non-generic, looks like this:</p>
            <pre><code>public class Box &#123;
    private Object object;

    public void set(Object object) &#123; this.object = object; &#125;
    public Object get() &#123; return object; &#125;
&#125;
</code></pre>
            <p>In this version, the methods accept and return an <code>Object</code>. This allows any type of object to be used, but it lacks type safety, as there's no compile-time check on the type of object being used. This can lead to runtime errors if an object of an unexpected type is retrieved from the box.</p>
        </section>
        
        <section>
            <h2>Introducing Generics to the Box Class</h2>
            <p>To enhance the <code>Box</code> class with generics, we define it as follows:</p>
            <pre><code>/**
 * Generic version of the Box class.
 * @param &#60;T&#62; the type of the value being boxed
 */
public class Box&lt;T&gt; &#123;
    // T stands for "Type"
    private T t;

    public void set(T t) &#123; this.t = t; &#125;
    public T get() &#123; return t; &#125;
&#125;
</code></pre>
            <p>Here, <code>T</code> represents a type parameter that can be used within the class. This change ensures that the <code>Box</code> class can only be used with a specific type, providing compile-time type safety.</p>
        </section>
        
        <section>
            <h2>Type Parameter Naming Conventions</h2>
            <p>Java uses single, uppercase letters for type parameters. This is different from variable naming conventions. The most common type parameter names include:</p>
            <ul>
                <li><strong>E</strong> - Element (often used in the Java Collections Framework)</li>
                <li><strong>K</strong> - Key</li>
                <li><strong>N</strong> - Number</li>
                <li><strong>T</strong> - Type</li>
                <li><strong>V</strong> - Value</li>
                <li><strong>S, U, V</strong> - Additional type parameters</li>
            </ul>
            <p>These conventions help distinguish between type parameters and ordinary class or interface names.</p>
        </section>
        
        <section>
            <h2>Instantiating a Generic Type</h2>
            <p>To create a reference to a generic class, you specify the concrete type as follows:</p>
            <pre><code>Box&lt;Integer&gt; integerBox;
</code></pre>
            <p>This syntax indicates that <code>integerBox</code> will refer to a <code>Box</code> that holds <code>Integer</code> objects. To actually create an instance, use the <code>new</code> keyword:</p>
            <pre><code>Box&lt;Integer&gt; integerBox = new Box&lt;Integer&gt;();
</code></pre>
            <p>In Java SE 7 and later, you can simplify this with the diamond operator:</p>
            <pre><code>Box&lt;Integer&gt; integerBox = new Box&lt;&gt;();
</code></pre>
            <p>This allows the compiler to infer the type parameters, reducing redundancy.</p>
        </section>
        
        <section>
            <h2>Multiple Type Parameters</h2>
            <p>A generic class can have more than one type parameter. For example, consider the <code>OrderedPair</code> class that implements the <code>Pair</code> interface:</p>
            <pre><code>public interface Pair&lt;K, V&gt; &#123;
    public K getKey();
    public V getValue();
&#125;

public class OrderedPair&lt;K, V&gt; implements Pair&lt;K, V&gt; &#123;

    private K key;
    private V value;

    public OrderedPair(K key, V value) &#123;
        this.key = key;
        this.value = value;
    &#125;

    public K getKey()    &#123; return key; &#125;
    public V getValue() &#123; return value; &#125;
&#125';
</code></pre>
            <p>Creating instances of <code>OrderedPair</code> with different type parameters can be done as follows:</p>
            <pre><code>Pair&lt;String, Integer&gt; p1 = new OrderedPair&lt;String, Integer&gt;("Even", 8);
Pair&lt;String, String&gt;  p2 = new OrderedPair&lt;String, String&gt;("hello", "world");
</code></pre>
            <p>Using diamond notation simplifies this further:</p>
            <pre><code>OrderedPair&lt;String, Integer&gt; p1 = new OrderedPair&lt;&gt;("Even", 8);
OrderedPair&lt;String, String&gt;  p2 = new OrderedPair&lt;&gt;("hello", "world");
</code></pre>
        </section>
        
        <section>
            <h2>Parameterized Types</h2>
            <p>Generic types can also use parameterized types. For example, you can create an <code>OrderedPair</code> where one type parameter is a parameterized type like <code>List&lt;String&gt;</code>:</p>
            <pre><code>OrderedPair&lt;String, Box&lt;Integer&gt;&gt; p = new OrderedPair&lt;&gt;("primes", new Box&lt;Integer&gt;(...));
</code></pre>
        </section>
    </div>
    <Footer />
    </>
    );
}