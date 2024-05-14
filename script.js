//1.1
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    } else {
        return a / b;
    }
}
console.log(add(1,6));
console.log(subtract(6,1));
console.log(multiply(1,6));
console.log(divide(6,1));

//1.2
function printInfo(firstName, location, hobby) {
    console.log("Hi, my name is " + firstName + ". I live in " + location + " and enjoy " + hobby + ".");
}
printInfo("Pond", "BKK", "Sleep");
