"use strict";
/**
 * tsc --init for whole project -w for watch mode
 * let and const don't exist in es5, as seen in the generated js file e.g app.js
 * how does typescript know, what if it were a node.js application not in the browser. the lib library handles this
 *
 */
const button = document.querySelector('button');
button.addEventListener('click', () => { console.log('Clicked!'); } // click event, anonymous function to log Clicked!
);
//# sourceMappingURL=app.js.map