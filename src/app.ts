class Department {

    // private id: string;
    // private name: string; 
    private employees: string[] = [];

    constructor(private id: string, public name: string) { // shortcut
        //this.id = id; 
        //this.name = n;
    }

    describe(this: Department) { // when executed should be of type Department
        console.log(`Department ${this.id}: ${this.name}`);
    }

    // describeArrowTest = () => {
    //     console.log();
    // }

    addEmployee(employee: string) {
        // validation etc. 
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

const maybeThisWorks = (maybe: string | number) => {
    console.log(maybe);
}

maybeThisWorks("trash");

// const javascriptShitObjects
// let javascriptShitObjects
var javascriptShitObjects = {
    firstName: 'ellis',
    lastName :'mcpickle',
    age: 10000000,
}


const accounting = new Department('Accounting');
console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'joe';

accounting.describe();
accounting.printEmployeeInformation();


const accountingCopy = {  
    name: 'DUMMY', 
    describe: accounting.describe
 }; 

// accountingCopy.describe(); // .this is referring to accountingCopy which has no name property.
// fix by adding missing properties
