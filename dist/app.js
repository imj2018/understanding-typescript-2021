"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const maybeThisWorks = (maybe) => {
    console.log(maybe);
};
maybeThisWorks("trash");
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
const accountingCopy = {
    name: 'DUMMY',
    describe: accounting.describe
};
accountingCopy.describe(); // .this is referring to accountingCopy which has no name property. fix by adding a name property
//# sourceMappingURL=app.js.map