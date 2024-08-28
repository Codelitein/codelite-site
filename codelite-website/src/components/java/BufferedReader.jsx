import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaBufferedReader() {
    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Overview</h2>
            <p>The <strong>BufferedReader</strong> class in Java is designed to read text from a character input stream while buffering characters to enable efficient reading of characters, arrays, and lines. You can specify the buffer size, or use the default size, which is typically sufficient for most cases. Generally, every read request made by a Reader prompts a corresponding read operation on the underlying character or byte stream. It is advisable to wrap a <strong>BufferedReader</strong> around any Reader where the read operations might be expensive, such as <strong>FileReader</strong> or <strong>InputStreamReader</strong>. Programs that currently use <strong>DataInputStream</strong> for text input can be adapted by replacing each <strong>DataInputStream</strong> with a suitable <strong>BufferedReader</strong>.</p>
        </section>
        
        <section>
            <h2>Constructors of BufferedReader Class</h2>
            <table>
                <thead>
                    <tr>
                        <th>Constructor</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>BufferedReader(Reader in)</code></td>
                        <td>Creates a buffered character-input stream using a default-sized buffer.</td>
                    </tr>
                    <tr>
                        <td><code>BufferedReader(Reader in, int sz)</code></td>
                        <td>Creates a buffered character-input stream with a buffer of the specified size.</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section>
            <h2>Methods of BufferedReader Class</h2>
            <table>
                <thead>
                    <tr>
                        <th>Method Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>close()</code></td>
                        <td>Closes the stream and releases any associated system resources. Further attempts to read, mark, reset, or skip will throw an <code>IOException</code>. Closing a stream multiple times has no additional effect.</td>
                    </tr>
                    <tr>
                        <td><code>mark(int)</code></td>
                        <td>Marks the current position in the stream. A subsequent call to <code>reset()</code> will reposition the stream to this marked point.</td>
                    </tr>
                    <tr>
                        <td><code>markSupported()</code></td>
                        <td>Indicates whether the stream supports the <code>mark()</code> operation, which it does.</td>
                    </tr>
                    <tr>
                        <td><code>read()</code></td>
                        <td>Reads a single character from the stream.</td>
                    </tr>
                    <tr>
                        <td><code>read(char[] cbuf, int off, int len)</code></td>
                        <td>Reads characters into a segment of an array. This method attempts to read as many characters as possible by repeatedly calling the underlying stream's <code>read</code> method.</td>
                    </tr>
                    <tr>
                        <td><code>readLine()</code></td>
                        <td>Reads a line of text, recognizing line terminators such as newline (<code>\n</code>), carriage return (<code>\r</code>), or a combination of both.</td>
                    </tr>
                    <tr>
                        <td><code>ready()</code></td>
                        <td>Checks if the stream is ready for reading.</td>
                    </tr>
                    <tr>
                        <td><code>reset()</code></td>
                        <td>Resets the stream to the most recent mark.</td>
                    </tr>
                    <tr>
                        <td><code>skip(long n)</code></td>
                        <td>Skips the specified number of characters in the stream.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
    <Footer />
    </>
    );
}