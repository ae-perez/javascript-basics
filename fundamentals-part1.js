//problem one ********************
console.log(23 + 97);

//problem two ********************
console.log(15 + 22 + 13 + 27 + 25 + 16)

//problem three ********************
console.log((4+6+9)/77)
console.log(Math.round((4+6+9)/77)) //--same as above, using Math.round()

//problem four ********************
let a = 10;
console.log(a + ": this is variable a");
9 * a;
console.log(a + ": this is unchanged variable a"); //this is unchanged
a = 9 * a; // because of assignment, value of a, can change
console.log(a + ": this is changed variable a"); 
let b = 7 * a;
console.log(b + ": this is variable b");

//problem five ********************
let max = 57;
let actual = max - 13;
let percentage = actual / max;
//console.log(percentage);
console.log(Math.round(percentage * 100) + "%");


/* KT
- ways to declare:
    var (globally)
    let (locally)
    const (globally)

- NaN
    error value, you get when value cannot be computed (type conversion, undefined)


*/