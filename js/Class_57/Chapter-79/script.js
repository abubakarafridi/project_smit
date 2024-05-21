// This chapter and the next one teach you the code that creates the window.
// This is the basic, barebones statement.

// var monkeyWindow = window.open();

// There are three ways to fill a new window with content, You can use the write method to
// put HTML content on the screen...

// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);

// Here's the line-by-line breakdown:
// 1. Opens a new window and assigns it the handle monkeyWindow
// 2. Assigns text to the variable windowContent
// 3. Fills the window with the text

// The second way to fill the window with content is to assign a document to it, as you
// learned to do in previous chapters.

// monkeyWindow.location.assign("http://www.animals.com");

// ...or...

// monkeyWindow.location.href = "http://www.animals.com/capuchin.html";

// The third and most common way to fill the window with content is to include the
// document assignment in the statement that opens the window.

// var monkeyWindow = window.open("http://www.animals.com/capuchin.html");
// monkeyWindow.close();