class Department {
    static fiscalYear: number = 2020
    //name: string = 'DEFAULT';
    // public name: string; // public default
    // private employees: string[] = []; // only accessible inside class/object
    protected employees: string[] = []; // can now access from child classes


    constructor(private readonly id: string, private name: string) { // readonly is typescript not js, you can no longer write to this property
        // shortcut for initialization, a property is created and the value stored
        // this.id = id;
        // this.name = n;
        //console.log(Department.fiscalYear); // static cannot be access with "this" inside a class but by using the class name 
    }

    static createEmployee(name: string) { // static can be useful as a utility methods
        return { name: name };
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
        //this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);

    }
}

const employee1 = Department.createEmployee('Max'); // static stuff
console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department { // base constructor will be called
    //public admins[];
    constructor(id: string, public admins: string[]) {
        super(id, 'IT'); // base class constructor
        this.admins = admins; // has to be called after super
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() { // get so public now, cannot access directly but should contain more complex logic
        if (!this.lastReport) {
            throw new Error('No report found');
        }
        return this.lastReport;
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass a valid value');
        }
        this.addReport('value'); // calling the addReport from this class
    }

    constructor(id: string, public reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) { // overriding base function
        if (name === 'Max') {
            return;
        }
        this.employees.push(name); // if private cannot push/add to inherited classes
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

// const accounting = new Department('d1', 'Accounting');
//const accounting = new ITDepartment('d1', ['Max']);
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Bob');

//accounting.employees[2] = 'Joe'; // should not be able to directly assign, colleuge may assign this way/addEmployeee may need validation etc.

it.describe();
it.printEmployeeInformation();
console.log(it);
//console.log(accounting);

//const accountingCopy = { describe: accounting.describe };  // the object created is not based on the Departments class/any specific class
// this is pointing at the describe function of accounting object, so the function itself is passed not the executing so no value is passed
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }; // because a name property was added it will now point to a new object
// accountingCopy.describe();

const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'You end report'; // set like a propert also using =
console.log(accounting.mostRecentReport); // is accessed like a property, behind the scenes is a function 
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();

