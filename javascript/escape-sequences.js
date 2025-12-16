/*
CODE        OUTPUT
\'          single quote
\"          double quote
\\          backslash
\n          new line
\r          carriage return
\t          tab
\b          backspace
\f          form feed
\uXXXX      unicode character with hexadecimal code XXXX
*/

var singleQuote = 'It\'s a beautiful day!';
var doubleQuote = "He said, \"Hello!\"";
var backslash = "This is a backslash: \\";
var newLine = "First line.\nSecond line.";
var carriageReturn = "Hello\rWorld";
var tab = "Column1\tColumn2";
var backspace = "Mistake\bCorrected";
var formFeed = "Page1\fPage2";
var unicodeChar = "\u00A9";

console.log(singleQuote);
console.log(doubleQuote);
console.log(backslash);
console.log(newLine);
console.log(carriageReturn);
console.log(tab);
console.log(backspace);
console.log(formFeed);
console.log(unicodeChar);
