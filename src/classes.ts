// abstract class Department { // abstract, so can no longer be instantiated/concrete
//     static fiscalYear: number = 2020

//     protected employees: string[] = [];


//     constructor(protected readonly id: string, public name: string) {
//     }

//     static createEmployee(name: string) {
//         return { name: name };
//     }

//     abstract describe(this: Department): void; // abstract should be used to force the concrete implementation to be used when a child of the base class, a general function/method may no be viable

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees);
//         console.log(this.employees.length);

//     }
// }

// const employee1 = Department.createEmployee('Max');
// console.log(employee1, Department.fiscalYear);

// class ITDepartment extends Department {
//     constructor(id: string, public admins: string[]) {
//         super(id, 'IT');
//         this.admins = admins;
//     }

//     describe() {
//         console.log(Department.fiscalYear);
//     }
// }

// class AccountingDepartment extends Department {
//     private lastReport: string;
//     private static instance: AccountingDepartment;

//     private constructor(id: string, public reports: string[]) { // private constructor (can no longer call new) for the singleton pattern, static methods/properties can't be used, only one instance can exist (not multiple objects of the class)
//         super(id, 'Accounting');
//         this.lastReport = reports[0];
//     }

//     static getInstance() {
//         if (AccountingDepartment.instance) { // return the instance that alreadt exists
//             return this.instance // "this" is related to the class not a created instance
//         }
//         this.instance = new AccountingDepartment('d2', []); // or create a new instance 
//         return this.instance;

//     }

//     get mostRecentReport() {
//         if (!this.lastReport) {
//             throw new Error('No report found');
//         }
//         return this.lastReport;
//     }

//     set mostRecentReport(value: string) {
//         if (!value) {
//             throw new Error('Please pass a valid value');
//         }
//         this.addReport('value');
//     }

//     describe() {
//         console.log('Accounting Department - ID: ' + this.id);
//     }

//     addEmployee(name: string) { // overriding base function
//         if (name === 'Max') {
//             return;
//         }
//         this.employees.push(name); // if private cannot push/add to inherited classes
//     }

//     addReport(text: string) {
//         this.reports.push(text);
//         this.lastReport = text;
//     }

//     printReports() {
//         console.log(this.reports)
//     }
// }


// const it = new ITDepartment('d1', ['Max']);

// it.addEmployee('Max');
// it.addEmployee('Bob');
// it.describe();
// it.printEmployeeInformation();
// console.log(it);

// // const accounting = new AccountingDepartment();
// const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting, accounting2); // there will only be one instance given the singleton pattern

// accounting.mostRecentReport = 'You end report'; // set like a propert also using =
// console.log(accounting.mostRecentReport); // is accessed like a property, behind the scenes is a function 
// accounting.addReport('Something went wrong...');
// accounting.describe();
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();

