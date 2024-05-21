// In the last chapter you learned to open a new window without parameters—a full-size window.
// You also learned to open a window with a single parameter—a URL.
// A second parameter that you can include is a window name.

// var monkeyWindow = window.open("http://www.youtube.com", "win1")

// You can specify a URLparameter without a name parameter, but you can't specify a name
// parameter without a URL parameter. But it is okay to specify an empty URL parameter, like this.

// var monkeyWindow = window.open("", "win1")

// Often, you'll want to specify a window size.

// var monkeyWindow = window.open("", "", "width=420,height=100");

// Things to know:
// Both parameters, width and height, are enclosed by a single set of quotation marks.

// The absence of spaces within the quotation marks isn't a mere style preference but a
// requirement. Any spaces here will break JavaScript.

// The numbers refer to pixels. In the example above, the window will be 420 pixels wide
// and 380 pixels high.

// Width and height must be a minimum of 100.

// Unlike the URL and name parameters, the order doesn't matter. Width can come before
// height, height can come before width. But the width-and-height set must come third, after
// URL and name.

// In order to specify these parameters, you must specify a URL and name, even if you
// specify empty strings.

// A window that's smaller than the screen will display in the upper-left corner of the
// screen. But you can optionally tell the browser where to place the window.


var w = window.open("", "", "width=420,height=380,left=200,top=100");

// Things to know:
// Again, the numbers are pixels—number of pixels from the left edge of the screen and
// number of pixels from the top of the screen.

// The positioning parameters are included within the same set of quotation marks as the
// size parameters, and, like the size parameters, are separated by a comma and no space.

// The parameter order within the quotation marks doesn't matter.

// You can specify window size without specifying window position, but if you specify
// window position without size, it will be ignored since it will be a full-size window that
// fills the whole screen.
