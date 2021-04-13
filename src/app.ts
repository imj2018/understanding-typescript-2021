/**
 * tsc --init for whole project -w for watch mode
 * let and const don't exist in es5, as seen in the generated js file e.g app.js
 * how does typescript know, what if it were a node.js application not in the browser. the lib library handles this
 * 
 * sourceMap": true, is usefull to see the typscript files. can go to inspect then Sources and set breakpoints
 * 
 * "noEmit": true, if there are compilation errors it won't compile
 */

const button = document.querySelector('button')!;

let appId = 'abc';

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}


function clickHander(message: string) {
    //let userName = "yippee";
    console.log("Clicked!", + message);
}

// button.addEventListener('click', () => { console.log('Clicked!') } // click event, anonymous function to log Clicked!
button.addEventListener('click', clickHander.bind(null, 'yes'));