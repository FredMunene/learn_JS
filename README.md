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