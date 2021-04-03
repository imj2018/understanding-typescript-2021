let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never { // unlike void, no undefined will be returned, nothing will ever be returned and it will crash
    throw { message: message, errorCode: code };
    //while (true) {}
}

const result = generateError('An error occured!', 500);
console.log(result)