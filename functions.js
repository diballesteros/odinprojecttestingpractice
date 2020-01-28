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

function caesarCipher(text) {
    var key = 3;
    var lower = /[a-z]/;
    var upper = /[A-Z]/;

    var ciphertext = '';
    for (i = 0; i < text.length; i++) {
        if (lower.test(text.charAt(i))) {
            ciphertext += String.fromCharCode((text.charCodeAt(i) - 97 + key) % 26 + 97);
        } else if (upper.test(text.charAt(i))) {
            ciphertext += String.fromCharCode((text.charCodeAt(i) - 65 + key) % 26 + 65);
        }
        else ciphertext += text.charAt(i);
    } 
    return ciphertext;
}

function arrayAnalysis(numbers) {
    var stats = {};

    stats.length = numbers.length;

    stats.min = Math.min.apply(null, numbers);

    stats.max = Math.max.apply(null, numbers);

    stats.average = numbers.reduce((total, currentValue) => {
        return total + currentValue;
    }) / numbers.length;

    return stats
}

module.exports = {
    calculator: calculator,
    capitalize: capitalize,
    reverseString: reverseString,
    caesarCipher: caesarCipher,
    arrayAnalysis: arrayAnalysis
};