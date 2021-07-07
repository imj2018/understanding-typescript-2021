abstract class Department { // can't be instantiated

    static fiscalYear = 2020;
    // private id: string;
    // private name: string; 
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) { // shortcut
        //this.id = id; 
        //this.name = n;
        //this.fiscalYear) // can't use .this as it refers to the instance
        console.log(Department.fiscalYear);
    }

    // describe(this: Department) { // when executed should be of type Department
    //     console.log(`Department ${this.id}: ${this.name}`);
    // }

    abstract describe(this: Department): void; 

    addEmployee(employee: string) {
        // validation etc. 
        //this.id = 1;
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployee(employeeName: string) {
        return { name: employeeName };
    }

}

class ITDepartment extends Department {
    //id: string;
    admins: string[];
    constructor(id: string, admins: string[]) { 

        super(id, 'IT'); // call constructor of base class
        this.admins = admins;
    
    }

    describe() {
        console.log('IT department - ID: ' + this.id)
    }
}

class Criminal extends Department {

    private lastRecord : string;
    private static instance: Criminal;

    get mostRecentRecord() {
        if (this.lastRecord) {
        return "the last record is " + this.lastRecord;
        }
        throw new Error('No record found.');
        //return console.log('no report found');
    }

    set mostRecentRecord(record: string) {
        if (!record) {
            throw new Error('Please add valid record. ');
        }
        this.addRecord(record);
    }

    private constructor(id: number, private records: string[]) { // can't get to private constructor without static methods

        super(id.toString(), 'Criminal');
        this.lastRecord = records[0];
    }

    static makeInstance() {
        if (Criminal.instance) {
            return this.instance;
        }
        this.instance = new Criminal(3, []);
        return this.instance;
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name); // protected
    }

    addRecord(record: string) {
        this.records.push(record);
        this.lastRecord = record;
    }

    showRecords() {
        console.log(this.records);
        //return this.records;
    }

    describe() {
        console.log('Criminal department - ID: ' + this.id)
    }


}

const employee1 = Department.createEmployee('Max');
const fiscalYear = Department.fiscalYear;
console.log(employee1, fiscalYear);

const it = new ITDepartment('d1', ['Max', 'Joe']);

it.addEmployee('Max');
it.addEmployee('Manu');

//accounting.employees[2] = 'joe';

it.describe();
it.printEmployeeInformation();

console.log(it);

// const criminal = new Criminal(1, ['triple homicide', 'contraband']);
//const criminal = new Criminal(2, []);
const criminal = Criminal.makeInstance();
const criminal2 = Criminal.makeInstance();

console.log(criminal, criminal2); // singleton (point to same object)

//console.log(criminal.mostRecentRecord); // no (), as a property

criminal.addRecord('20 to life');
criminal.addRecord('on probation');
criminal.addRecord('escaped probation');
criminal.addEmployee('trash guard');

//criminal.mostRecentRecord = ''; // does check for empty
criminal.mostRecentRecord = 'escaped probation'; // setter 

criminal.showRecords();

console.log(criminal.mostRecentRecord);  // getter
console.log(criminal);

criminal.describe();

const accountingCopy = {  
    name: 'DUMMY', 
    //describe: accounting.describe
 }; 

// accountingCopy.describe(); // .this is referring to accountingCopy which has no name property.
// fix by adding missing properties




// ... experiment
function maybeWorks(maybe: string | number ) : void {
    console.log(maybe);
}

const maybeThisWorks = (maybe: string | number) => {
    console.log(maybe);
}
maybeWorks("trash");
maybeThisWorks("trash");

// const javascriptShitObjects
// let javascriptShitObjects
var javascriptShitObjects = {
    firstName: 'ellis',
    lastName :'mcpickle',
    age: 10000000,
}
