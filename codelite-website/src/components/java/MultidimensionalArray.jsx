import React from "react";
import Footer from "../reuse/Footer";
import Header from "../reuse/Header";


export default function JavaMultiDimensionalArray() {

    return(
        <>
        <Header />
        <div class="container">
        <section>
            <h2>Introduction to Multidimensional Arrays</h2>
            <p>In Java, multidimensional arrays are essentially arrays of arrays. They store data in a tabular form, with rows and columns. The data is arranged in a row-major order.</p>
        </section>

        <section>
            <h2>Syntax</h2>
            <p>The syntax for declaring a multidimensional array is as follows:</p>
            <pre><code>data_type[1st dimension][2nd dimension][]... [Nth dimension] array_name = new data_type[size1][size2]...[sizeN];</code></pre>
            <p>Where:</p>
            <ul>
                <li><strong>data_type:</strong> Specifies the type of data stored in the array (e.g., <code>int</code>, <code>char</code>).</li>
                <li><strong>dimension:</strong> Indicates the number of dimensions (e.g., 1D, 2D).</li>
                <li><strong>array_name:</strong> The name assigned to the array.</li>
                <li><strong>size1, size2, ..., sizeN:</strong> The sizes of each dimension.</li>
            </ul>
        </section>

        <section>
            <h2>Examples</h2>
            <p><strong>Two-Dimensional Array:</strong></p>
            <pre><code>int[][] twoD_arr = new int[10][20];</code></pre>
            <p><strong>Three-Dimensional Array:</strong></p>
            <pre><code>int[][][] threeD_arr = new int[10][20][30];</code></pre>
            <p>The total number of elements in a multidimensional array can be calculated by multiplying the sizes of all dimensions. For example:</p>
            <ul>
                <li>An array <code>int[][] x = new int[10][20]</code> can store <code>10 * 20 = 200</code> elements.</li>
                <li>An array <code>int[][][] x = new int[5][10][20]</code> can store <code>5 * 10 * 20 = 1000</code> elements.</li>
            </ul>
        </section>

        <section>
            <h2>Applications of Multidimensional Arrays</h2>
            <ul>
                <li>Storing data in a tabular format, such as student roll numbers and marks.</li>
                <li>Storing images using 3D arrays.</li>
                <li>Dynamic programming problems often use multidimensional arrays to represent problem states.</li>
                <li>Common algorithmic problems, including matrix multiplication, adjacency matrix representation in graphs, and grid search problems.</li>
            </ul>
        </section>

        <section>
            <h2>Two-Dimensional Arrays (2D Arrays)</h2>
            <p>A two-dimensional array can be conceptualized as an array of one-dimensional arrays. It is the simplest form of multidimensional arrays.</p>
            <h3>Indirect Method of Declaration</h3>
            <p><strong>Declaration Syntax:</strong></p>
            <pre><code>data_type[][] array_name = new data_type[x][y];</code></pre>
            <p>Example:</p>
            <pre><code>int[][] arr = new int[10][20];</code></pre>
            <p><strong>Initialization Syntax:</strong></p>
            <pre><code>array_name[row_index][column_index] = value;</code></pre>
            <p>Example:</p>
            <pre><code>arr[0][0] = 1;</code></pre>
            <p><strong>Example 1:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int[][] arr = new int[10][20];
        arr[0][0] = 1;
        System.out.println("arr[0][0] = " + arr[0][0]);
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>arr[0][0] = 1</code></pre>
            </div>
            <p><strong>Example 2:</strong> Initializing a 4x4 matrix with default values:</p>
            <div class="example">
                <pre><code>public class TwoDimensArray &#123;
    public static void main(String[] args) &#123;
        int rows = 4;
        int columns = 4;
        int[][] array = new int[rows][columns];
        int value = 1;
        for (int i = 0; i &#60; rows; i++) &#123;
            for (int j = 0; j &#60; columns; j++) &#123;
                array[i][j] = value;
                value++;
            &#125;
        &#125;
        System.out.println("The 2D array is: ");
        for (int i = 0; i &#60; rows; i++) &#123;
            for (int j = 0; j &#60; columns; j++) &#123;
                System.out.print(array[i][j] + " ");
            &#125;
            System.out.println();
        &#125;
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>The 2D array is: 
1 2 3 4 
5 6 7 8 
9 10 11 12 
13 14 15 16</code></pre>
            </div>
            <p><strong>Explanation:</strong> The array dimensions are defined by the <code>rows</code> and <code>columns</code> variables. The array is created using the <code>new</code> operator and initialized with sequential values.</p>
        </section>

        <section>
            <h2>Direct Method of Declaration</h2>
            <p><strong>Syntax:</strong></p>
            <pre><code>data_type[][] array_name = &#123;
                             &#123;valueR1C1, valueR1C2, ....&#125;, 
                             &#123;valueR2C1, valueR2C2, ....&#125;
                           &#125;;</code></pre>
            <p>Example:</p>
            <pre><code>int[][] arr = &#123;&#123;1, 2&#125;, &#123;3, 4&#125;&#125;;</code></pre>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int[][] arr = &#123; &#123; 1, 2 &#125;, &#123; 3, 4 &#125; &#125;;
        for (int i = 0; i &#60; 2; i++)
            for (int j = 0; j &#60; 2; j++)
                System.out.println("arr[" + i + "][" + j + "] = " + arr[i][j]);
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>arr[0][0] = 1
arr[0][1] = 2
arr[1][0] = 3
arr[1][1] = 4</code></pre>
            </div>
        </section>

        <section>
            <h2>Accessing Elements of Two-Dimensional Arrays</h2>
            <p>Elements in a two-dimensional array are accessed using the syntax <code>x[row_index][column_index]</code>, where <code>i</code> represents the row number and <code>j</code> represents the column number.</p>
            <p><strong>Syntax:</strong></p>
            <pre><code>x[row_index][column_index]</code></pre>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int[][] arr = &#123; &#123; 1, 2 &#125;, &#123; 3, 4 &#125; &#125;;
        System.out.println("arr[0][0] = " + arr[0][0]);
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>arr[0][0] = 1</code></pre>
            </div>
        </section>

        <section>
            <h2>Representation of 2D Arrays in Tabular Format</h2>
            <p>A two-dimensional array can be visualized as a table with rows and columns. For instance, a 2D array with 3 rows and 3 columns is represented as follows:</p>
            <p><strong>2D Array:</strong></p>
            <pre><code>1 2 3
4 5 6
7 8 9</code></pre>
            <p>To display all elements of a two-dimensional array, nested for loops are used to iterate through rows and columns.</p>
            <p><strong>Example:</strong></p>
            <div class="example">
                <pre><code>public class Main &#123;
    public static void main(String[] args) &#123;
        int[][] arr = &#123; &#123; 1, 2 &#125;, &#123; 3, 4 &#125; &#125;;
        for (int i = 0; i &#60; 2; i++) &#123;
            for (int j = 0; j &#60; 2; j++) &#123;
                System.out.print(arr[i][j] + " ");
            &#125;
            System.out.println();
        &#125;
    &#125;
&#125;</code></pre>
            </div>
            <p><strong>Output:</strong></p>
            <div class="output">
                <pre><code>1 2
3 4</code></pre>
            </div>
        </section>
    </div>
    <Footer />
    </>
    );
}