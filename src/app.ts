class Department {
    //name: string = 'DEFAULT';
    // public name: string; // public default
    private employees: string[] = []; // only accessible inside class/object

    constructor(private id: string, private name: string) { // shortcut for initialization, a property is created and the value stored
        // this.id = id;
        // this.name = n;
    }

    //describe()
    //describe(this) {
    describe(this: Department) { // when executed means it must refer to an object of type Department/ instance of Department
        //console.log('Department: ' + name); // name is referring to a global name property
        //console.log('Department: ' + this.name); // "this" refers to the concrete instance when created. this. will access all properties and methods
        console.log(`Department ${this.id}: ${this.name}`);
    }

    addEmployee(employee: string) {
        // validation etc.
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);

    }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Menu');

//accounting.employees[2] = 'Joe'; // should not be able to directly assign, colleuge may assign this way/addEmployeee may need validation etc.

accounting.describe();
accounting.printEmployeeInformation();
//console.log(accounting);

//const accountingCopy = { describe: accounting.describe };  // the object created is not based on the Departments class/any specific class
// this is pointing at the describe function of accounting object, so the function itself is passed not the executing so no value is passed
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }; // because a name property was added it will now point to a new object
// accountingCopy.describe();

