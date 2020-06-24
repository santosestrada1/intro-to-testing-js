// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    if (input === 5) {
        return true
    } else if (input === "5") {
        return true;
    } else if (input === true) {
        return false;
    } else if (input === false) {
        return false;
    }
}