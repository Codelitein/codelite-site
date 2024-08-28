import React from "react";
import Header from "../reuse/Header";
import Footer from "../reuse/Footer";


export default function JavaHandlingException() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Multi-Catching Exceptions</h2>
            <p>In Java SE 7 and later, you can catch multiple types of exceptions using a single catch block. This multi-catch feature reduces code duplication and helps avoid overly broad exception handling.</p>
            <p>In the catch clause, list the exception types separated by a vertical bar (|):</p>
            <pre><code>catch (IOException | SQLException ex) &#123;
    logger.log(ex);
    throw ex;
&#125;
</code></pre>
            <p><strong>Note:</strong> When a catch block handles multiple exception types, the catch parameter is implicitly final. Thus, in the above example, the parameter <code>ex</code> is final, and you cannot reassign it within the catch block.</p>
        </section>

        <section>
            <h2>The Finally Block</h2>
            <p>The <code>finally</code> block is executed after the <code>try</code> block exits, ensuring it runs regardless of whether an exception occurs. It is useful for executing cleanup code that should always run, even if an unexpected exception is thrown. Using a <code>finally</code> block helps avoid having cleanup code accidentally skipped due to a return, continue, or break statement.</p>
            <p><strong>Note:</strong> If the JVM exits while the <code>try</code> or <code>catch</code> code is executing, the <code>finally</code> block might not be executed.</p>
            <p>The <code>finally</code> block is ideal for resource cleanup. For instance, closing a <code>PrintWriter</code> in the <code>writeList()</code> method involves a <code>finally</code> block to ensure the stream is closed properly:</p>
            <pre><code>finally &#123;
    if (out != null) &#123;
        System.out.println("Closing PrintWriter");
        out.close();
    &#125; else &#123;
        System.out.println("PrintWriter not open");
    &#125;
&#125;
</code></pre>
            <p><strong>Important:</strong> The <code>finally</code> block is crucial for preventing resource leaks. Always use it to recover resources, such as closing files.</p>
        </section>

        <section>
            <h2>The Try-With-Resources Statement</h2>
            <p>The <code>try-with-resources</code> statement simplifies resource management by automatically closing resources when they are no longer needed. Any object implementing <code>java.lang.AutoCloseable</code>, including <code>java.io.Closeable</code> objects, can be used as a resource in this statement.</p>
            <p>Here’s an example that reads the first line from a file using a <code>BufferedReader</code>, a resource that must be closed:</p>
            <pre><code>static String readFirstLineFromFile(String path) throws IOException &#123;
    try (BufferedReader br = new BufferedReader(new FileReader(path))) &#123;
        return br.readLine();
    &#125;
&#125;
</code></pre>
            <p>In this example, the <code>BufferedReader</code> resource is declared in the <code>try-with-resources</code> statement. It will be closed automatically, whether the <code>try</code> block completes normally or throws an exception.</p>
            <p>Before Java SE 7, you would use a <code>finally</code> block to ensure a resource is closed:</p>
            <pre><code>static String readFirstLineFromFileWithFinallyBlock(String path) throws IOException &#123;
    BufferedReader br = new BufferedReader(new FileReader(path));
    try &#123;
        return br.readLine();
    &#125; finally &#123;
        br.close();
    &#125;
&#125;
</code></pre>
            <p>However, if both the <code>readLine()</code> and <code>close()</code> methods throw exceptions, only the exception from the <code>finally</code> block will be thrown. The try-with-resources statement in Java SE 7 and later handles this situation more gracefully by suppressing exceptions from the <code>try</code> block and allowing retrieval of suppressed exceptions.</p>
        </section>

        <section>
            <h2>Example: Writing to a File with Zip File Contents</h2>
            <p>The following example demonstrates using a <code>try-with-resources</code> statement to open a zip file and create an output file with the zip file's contents:</p>
            <pre><code>public static void writeToFileZipFileContents(String zipFileName, String outputFileName) throws java.io.IOException &#123;
    java.nio.charset.Charset charset = java.nio.charset.StandardCharsets.US_ASCII;
    java.nio.file.Path outputFilePath = java.nio.file.Paths.get(outputFileName);

    try (
        java.util.zip.ZipFile zf = new java.util.zip.ZipFile(zipFileName);
        java.io.BufferedWriter writer = java.nio.file.Files.newBufferedWriter(outputFilePath, charset)
    ) &#123;
        for (java.util.Enumeration entries = zf.entries(); entries.hasMoreElements();) &#123;
            String newLine = System.getProperty("line.separator");
            String zipEntryName = ((java.util.zip.ZipEntry)entries.nextElement()).getName() + newLine;
            writer.write(zipEntryName, 0, zipEntryName.length());
        &#125;
    &#125;
&#125;
</code></pre>
            <p>In this example, both <code>ZipFile</code> and <code>BufferedWriter</code> resources are declared in the <code>try-with-resources</code> statement. They are automatically closed in reverse order of their creation when the block exits.</p>
        </section>

        <section>
            <h2>Example: Using Try-With-Resources for JDBC Statement</h2>
            <p>Here’s an example of using a <code>try-with-resources</code> statement to automatically close a <code>java.sql.Statement</code> object:</p>
            <pre><code>public static void viewTable(Connection con) throws SQLException &#123;
    String query = "select COF_NAME, SUP_ID, PRICE, SALES, TOTAL from COFFEES";

    try (Statement stmt = con.createStatement()) &#123;
        ResultSet rs = stmt.executeQuery(query);

        while (rs.next()) &#123;
            String coffeeName = rs.getString("COF_NAME");
            int supplierID = rs.getInt("SUP_ID");
            float price = rs.getFloat("PRICE");
            int sales = rs.getInt("SALES");
            int total = rs.getInt("TOTAL");

            System.out.println(coffeeName + ", " + supplierID + ", " + price + ", " + sales + ", " + total);
        &#125;
    &#125; catch (SQLException e) &#123;
        JDBCTutorialUtilities.printSQLException(e);
    &#125;
&#125;
</code></pre>
            <p>In this example, the <code>java.sql.Statement</code> resource, which is part of JDBC 4.1 and later, is managed using the <code>try-with-resources</code> statement. It ensures that the <code>Statement</code> is closed properly even if an exception occurs.</p>
            <p><strong>Note:</strong> A <code>try-with-resources</code> statement can include <code>catch</code> and <code>finally</code> blocks, just like a regular <code>try</code> statement. Any <code>catch</code> or <code>finally</code> blocks will execute after the resources have been closed.</p>
        </section>
    </div>
    <Footer />
    </>
    );
}