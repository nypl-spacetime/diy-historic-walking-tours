##  Step 1 - Project Setup  
Our walking tour will be a static website.  This means we do not need to setup a server or database for a backend.  We'll just be using HTML, CSS, and JavaScript.  

Open a text editor of your choice.  Some popular choices are [Sublime](https://www.sublimetext.com/), [Atom](https://atom.io/), [Notepad++](https://notepad-plus-plus.org/).  

In the `public` directory, we have three files to start:  
-  `index.html`  
-  `style.css`  
-  `map.js`  

In your text editor, open `public/index.html`.  

### index.html  
>HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage. Other technologies besides HTML are generally used to describe a webpage's appearance/presentation (CSS) or functionality (JavaScript).  
[Mozilla's MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)  

We are starting with a basic html structure with `<head>` and `<body>` elements:
```html
<!-- public/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata that tells web browsers about our website -->
    <meta charset="utf-8">
    <title>NYPL DIY Historic Walking Tour</title>

  </head>
  <body>

  </body>
</html>
```  

**Add our map.js and style.css**  
When our html gets loaded in a web browser, we need the browser to know that we are relying on JavaScript and CSS that is held in external files.  We need to add a `<link>` element for CSS and a `<script>` element for JS.  

Above the closing `</head>` tag, add the following:
```html
<!-- public/index.html -->
...
  <!-- Load our style -->
  <link rel="stylesheet" href="./style.css">
</head>
...
```  

For our `map.js`, add the following above the closing `</body>` tag:  
```html
<!-- public/index.html -->
...
  <!-- Load our JavaScript -->
  <script src="./map.js" charset="utf-8"></script>
</body>
...
```

To see what your html should look like at this point, look at the branch named `1-setup-project-SOLUTION` on Github.

With our project structure in place, we're ready to get started with our map.
