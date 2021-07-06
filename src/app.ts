class Department {

    name: string; 

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) { // when executed should be of type Department
        console.log('Department: ' + this.name);
    }

    // describeArrowTest = () => {
    //     console.log();
    // }
}

const maybeThisWorks = (maybe: string | number) => {
    console.log(maybe);
}

maybeThisWorks("trash");


const accounting = new Department('Accounting');
console.log(accounting);

accounting.describe();


const accountingCopy = { 
    name: 'DUMMY', 
    describe: accounting.describe
 }; 

accountingCopy.describe(); // .this is referring to accountingCopy which has no name property. fix by adding a name property
