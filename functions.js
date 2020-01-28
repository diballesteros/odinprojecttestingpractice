

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

function reverseString(text) {
    return text.split("").reverse().join("");
}

var calculator = {
    sum: function sum(a, b) {
        return a + b;
    },
    subtract: function subtract(a, b) {
        return a-b;
    },
    divide: function divide(a,b) {
        return a/b;
    },
    multiply: function multiply(a,b) {
        return a*b;
    }
}

module.exports = {
    calculator: calculator,
    capitalize: capitalize,
    reverseString: reverseString
};