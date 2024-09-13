// CHAPTER 4
// Declare 3 variables in one statement
var a = 1, b = 2, c = 3;

// 5 legal variables
var include = 1;
var _include = 1;
var Include = 1;
var $include = 1;
var include123 = 1;

// 5 illegal variables
// var (include = 1;
// var 12include = 1;
// var in clude = 1;
// var any js keyword = 1;
// var + = 1;


var firstLine = "Variables names can only contain, numbers, $ and _. For example: $my_1stVariable.";
var secondLine = "Variables must begin with a letter, $ or _. For example: $name, _name or name.";
var thirdLine = "Variables names are case sensitive";
var fourthLine = "Variables names should not be JS keywords";

document.write(firstLine + "<br>");
document.write(secondLine + "<br>");
document.write(thirdLine + "<br>");
document.write(fourthLine + "<br>");

// CHAPTER 4 END