"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);
    }
}
Department.fiscalYear = 2020;
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log(Department.fiscalYear);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) { // return the instance that alreadt exists
            return this.instance; // "this" is related to the class not a created instance
        }
        this.instance = new AccountingDepartment('d2', []); // or create a new instance 
        return this.instance;
    }
    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error('No report found');
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass a valid value');
        }
        this.addReport('value');
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name); // if private cannot push/add to inherited classes
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Bob');
it.describe();
it.printEmployeeInformation();
console.log(it);
// const accounting = new AccountingDepartment();
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2); // there will only be one instance given the singleton pattern
accounting.mostRecentReport = 'You end report'; // set like a propert also using =
console.log(accounting.mostRecentReport); // is accessed like a property, behind the scenes is a function 
accounting.addReport('Something went wrong...');
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map