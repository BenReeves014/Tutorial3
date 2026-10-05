// TASK 1: CALLBACK FUNCTIONS

// value can be null, undefined, a number (NaN too) or a numeric string like "4"
let even_predicate = function (value) {
    // Number(null) turns into 0, which would count as even, so catch it first
    if (value === null) {
        return false;
    }
    let numericValue = Number(value);
    // undefined, NaN and things like 1.1 aren't integers, so they fail here
    return Number.isInteger(numericValue) && numericValue % 2 === 0;
};

// takes the same kinds of values as even_predicate
let odd_predicate = function (value) {
    if (value === null) {
        return false;
    }
    let numericValue = Number(value);
    // negative odd numbers give -1 for % 2, hence the Math.abs
    return Number.isInteger(numericValue) && Math.abs(numericValue % 2) === 1;
};

// value can be anything
let undefined_predicate = function (value) {
    return value === undefined;
};

// value can be anything
let null_predicate = function (value) {
    return value === null;
};

// predicate is any function that takes one value and returns true or false
let check = function (predicate, value) {
    return predicate(value);
};


// TASK 2: FUNCTIONS AS RETURN VALUES

// lang is "E", "English", "F" or "French", in any capitalization
let getDictionary = function (lang) {

    // number is a number, only 1 to 3 are in the dictionary
    let englishDictionary = function (number) {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };

    // same as above but in French
    let frenchDictionary = function (number) {
        switch (number) {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };

    let lowerCaseLang = lang.toLowerCase();

    if (lowerCaseLang === "e" || lowerCaseLang === "english") {
        return englishDictionary;
    } else if (lowerCaseLang === "f" || lowerCaseLang === "french") {
        return frenchDictionary;
    }
};


// TESTS FOR getDictionary

let englishLookup = getDictionary("English");
console.log(englishLookup(1)); // one
console.log(englishLookup(2)); // two
console.log(englishLookup(99)); // not included in dictionary

let frenchLookup = getDictionary("F");
console.log(frenchLookup(1)); // un
console.log(frenchLookup(2)); // deux
console.log(frenchLookup(99)); // not included in dictionary