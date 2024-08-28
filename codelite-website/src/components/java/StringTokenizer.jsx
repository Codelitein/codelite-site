import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaStringTokenizer() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Overview</h2>
            <p>The <code>StringTokenizer</code> class in Java is used to divide a string into individual tokens. It manages a current position within the string and moves past characters as they are processed. Tokens are substrings extracted from the original string, forming the first step in a parsing process often referred to as lexical analysis or scanning.</p>
        </section>
        
        <section>
            <h2>Java String Tokenization</h2>
            <p>The <code>StringTokenizer</code> class enables applications to break strings into tokens. It implements the <code>Enumeration</code> interface and is utilized for data parsing. To use it, specify an input string and a set of delimiters that separate the tokens. Delimiters can be any characters, with the default ones being whitespace characters such as spaces, new lines, and tabs.</p>
            <p><strong>Illustration:</strong></p>
            <pre><code>stringtokenizer</code></pre>
        </section>
        
        <section>
            <h2>Constructors of StringTokenizer</h2>
            <p>Consider 'str' as the string to be tokenized. There are three constructors available:</p>
            <table>
                <thead>
                    <tr>
                        <th>Constructor</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>StringTokenizer(String str)</code></td>
                        <td>Uses default delimiters like newline, space, tab, carriage return, and form feed.</td>
                    </tr>
                    <tr>
                        <td><code>StringTokenizer(String str, String delim)</code></td>
                        <td>Uses the specified <code>delim</code> as delimiters to tokenize the string.</td>
                    </tr>
                    <tr>
                        <td><code>StringTokenizer(String str, String delim, boolean flag)</code></td>
                        <td>The <code>flag</code> specifies whether delimiter characters should be considered tokens.</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section>
            <h2>Constructor Behavior</h2>
            <p>Here’s how the constructors behave based on the <code>flag</code> parameter:</p>
            <ul>
                <li><strong>When <code>flag</code> is false:</strong> Delimiters separate tokens. <br/>Example: If the string is "hello geeks" and the delimiter is " ", the tokens are "hello" and "geeks".</li>
                <li><strong>When <code>flag</code> is true:</strong> Delimiters are treated as tokens. <br/>Example: For the string "hello geeks" with delimiter " ", the tokens are "hello", " ", and "geeks".</li>
                <li><strong>Multiple delimiters:</strong> Can be used in a single string. <br/>Example: For the string "2+3-1*8/4" and delimiters "+*-/", the tokens are "2", "3", "1", "8", and "4".</li>
            </ul>
        </section>
        
        <section>
            <h2>Examples of StringTokenizer Constructors</h2>
            <p><strong>Constructor 1:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        StringTokenizer st1 = new StringTokenizer("Hello World How are you", " ");
        while (st1.hasMoreTokens()) &#123;
            System.out.println(st1.nextToken());
        &#125;
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>Hello
World
How
are
you</code></pre>
            </div>

            <p><strong>Constructor 2:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        StringTokenizer st2 = new StringTokenizer("JAVA : Code : String", " :");
        while (st2.hasMoreTokens()) &#123;
            System.out.println(st2.nextToken());
        &#125;
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>JAVA
Code
String</code></pre>
            </div>

            <p><strong>Constructor 3:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        StringTokenizer st3 = new StringTokenizer("JAVA : Code : String", " :", true);
        while (st3.hasMoreTokens()) &#123;
            System.out.println(st3.nextToken());
        &#125;
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>JAVA
 
:
 
Code
 
:
 
String</code></pre>
            </div>
        </section>
        
        <section>
            <h2>Methods of StringTokenizer Class</h2>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>countTokens()</code></td>
                        <td>Returns the total number of tokens.</td>
                    </tr>
                    <tr>
                        <td><code>hasMoreTokens()</code></td>
                        <td>Checks if there are more tokens available.</td>
                    </tr>
                    <tr>
                        <td><code>nextElement()</code></td>
                        <td>Returns the next token as an Object, rather than a String.</td>
                    </tr>
                    <tr>
                        <td><code>hasMoreElements()</code></td>
                        <td>Equivalent to <code>hasMoreTokens()</code>.</td>
                    </tr>
                    <tr>
                        <td><code>nextToken()</code></td>
                        <td>Returns the next token from the tokenizer.</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section>
            <h2>Example of Methods</h2>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        StringTokenizer str = new StringTokenizer("Welcome to Tutorials");
        StringTokenizer temp = new StringTokenizer("");

        int count = str.countTokens();
        System.out.println(count);
        System.out.println("Welcome to Tutorials: " + str.hasMoreTokens());
        System.out.println("(Empty String): " + temp.hasMoreTokens());

        System.out.println("\nTraversing the String:");
        while (str.hasMoreTokens()) &#123;
            System.out.println(str.nextElement());
        &#125;
    &#125;
&#125;
</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>3
Welcome to Tutorials: true
(Empty String): false

Traversing the String:
Welcome
to
Tutorials</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}