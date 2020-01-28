const myFunctions = require('./functions');

test('capitalize first letter', () => {
    expect(myFunctions.capitalize('string')).toBe('String');
});

test('Reverse a string', () => {
    expect(myFunctions.reverseString('string')).toBe('gnirts');
});

test('calculator addition', () => {
    expect(myFunctions.calculator.sum(1, 2)).toBe(3);
});

test('calculator subtraction', () => {
    expect(myFunctions.calculator.subtract(2, 1)).toBe(1);
});

test('calculator division', () => {
    expect(myFunctions.calculator.divide(10, 5)).toBe(2);
});

test('calculator multiplication', () => {
    expect(myFunctions.calculator.multiply(2, 2)).toBe(4);
});

test('Caesar Cipher encryption', () => {
    expect(myFunctions.caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('defghijklmnopqrstuvwxyzabc');
});

test('Caser Cipher punctuation', () => {
    expect(myFunctions.caesarCipher(',.')).toBe(',.');
});

test('Caser Cipher case sensitive', () => {
    expect(myFunctions.caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
});

test('Array analysis', () => {
    expect(myFunctions.arrayAnalysis([1,1,2,4])).toEqual({average: 2, min: 1, max: 4, length: 4});
});
