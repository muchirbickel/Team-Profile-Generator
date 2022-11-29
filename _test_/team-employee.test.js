const Employee = require("../lib/Employee");

describe("Employee suite", () => {
    describe("Initialization", () => {
        it("should have a employee constructor", () => {
            const emp = new Employee();
            expect(emp instanceof Employee).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should return name", () => {
            const employee = new Employee("saad", 1, "saad@fake.com");
            expect(employee.getName()).toEqual("saad");
        });
    });

    describe("getId", () => {
        it("shoud return id", () => {
            const employee = new Employee("saad", 1, "saad@fake.com");
            expect(employee.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("shoud return email", () => {
            const employee = new Employee("saad", 1, "saad@fake.com");
            expect(employee.getEmail()).toEqual("saad@fake.com");
        });
    });

    describe("getRole", () => {
        it("shoud return role", () => {
            const employee = new Employee("saad", 1, "saad@fake.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });


})
