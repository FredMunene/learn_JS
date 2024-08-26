# JavaScript

1. Creating a JS file:

    ` echo "console.log('Hello World')" > how-2-js.js`
2. Running the JS script in a browser by importing it into a HTML page:

    `echo '<script type="module" src="how-2-js.js"></script>' > index.html`
- The attribute *module*  specifies the script should be treated as an ES6 module.

3. Create a simple web server:

    `&>/dev/null python3 -m http.server &`
-  A python http server is started, serves files in the current directory. Stdin and Stderr are suppressed. The program runs in the background.

4. Opening a browser at a specified port:
    `xdg-open 'http://localhost:8000'`
- access the address http://localhost:8000, and open the browser console by pressing **Control+Shift+J**.

- Refresh page if you make changes to the JS file.

## Primitives and Operators

**Types**
+ String
+ Number
+ Boolean
+ Undefined
+ Null
+ Infinity

### **Variables**

+ A *variable* stores any value. It is assigned a indentifier.
    - Declare a variable
         ` let name`
    - Assign a value to variable
            ` name = 32`
+  Standard practice for naming Variables is by **camelCase**
+ Doing both declaration and assignment at the same time.
        `let name = 43`

    #### *Constant Variables*
    + Making a variable immutable
            `const name = 87`
## Data Structures

+ **Object**
    - like a map {key:value}
    - keys are always strings
        ```
        {country : 'Kenya',
        town: 'Kisumu',
        postalCode: '}
        ```
    - nesting objects
+ **Array**
    - Use numbers as keys, (starting from 0)
    - `[1,2,3,4]`

## Sets

+ We can assign a value to an object
+ We can create new objects from existing objects
+ Mutability of new objects.

## Data Structures