// You can make the browser go back one URL in the browser history, as if the user has
// pressed the Backspace key or clicked the browser's back button.

// history.back();

// To make the browser go forward in the history, as if the user has pressed alt-right-arrow
// or clicked the browser's forward button...

// history.forward();

// You can tell the browser how many steps in the history you want to take, using negative
// numbers to go back and positive numbers to go forward. The following statement is the
// equivalent of pressing the Backspace key three times.

// history.go(-3);

// The following statement sends the browser forward two URLs.

// history.go(2);

// If a negative number inside the parentheses is greater than the number of previous URLs
// in the history, the browser will do nothing. If a positive number inside the parentheses is
// greater than the number of forward URLs in the history, the browser will do nothing.
// When you want to go forward or backward just one step, you can choose either method..

history.back();

// ...is the same as...

history.go(-1);

// And...

history.forward();

// ...is the same as...

history.go(1);


// If the user clicked a link to get to the current page, you can get the URL of the page where the link was clicked.

let whereUserCameFrom = document.referrer;