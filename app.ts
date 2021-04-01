
/**
 * unknown should be used over any
 * if the type is know in advanced e.g string | number use the type or union
 * 
 */

let userInput: unknown; // unknown what user input will be
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') { // unknown needs a check
    userName = userInput; // not the any type, cannot assign string to type unknown
}