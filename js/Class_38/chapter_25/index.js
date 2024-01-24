// But JavaScript provides a more straightforward way still, the replace method.

// let newText = text.replace("World War II", "the second world War");

// The first string inside the parentheses is the segment to be replaced. The second string is
// the segment to be inserted. In the above code, the segment "World War II" is replaced by the
// segment "the Second World War" in the string represented by the variable text, and the
// revised string is assigned to the new variable newText.

// In the examples above, only the first instance of a string is replaced. If you want to
// replace all instances, you must let JavaScript know that you want a global replace.

// let newText = text.replace(/World War II/g, "the second world War");