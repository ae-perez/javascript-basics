//assoiciated with fundamentals part 3: section --> functions

//problem one ********************
function add7 (num) {
    return num + 7;
}

//problem two ********************
function multiply () {
    return num1 * num2;
}

//problem three ********************
var str = "HELLO";
function capitalize(str) {
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.substring(1);
    //remember strings have some features of arrays which is why the str[0] works above
    // also substring() .. why it was used --> it is a method that retusn the part of the string between the start/end of indexes
        // so we told the computer return the rest of the string starting from string 1

    return str;
}
console.log(capitalize(str));

//problem four ********************
var str = "abcd";

function lastLetter(str) {
    let len = str.length;

    return str[len-1];

}
console.log(lastLetter(str));