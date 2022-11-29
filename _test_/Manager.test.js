const Manager = require('../lib/Manager');

describe("Manager suite", () => {
    describe("Initialization", () => {
        it("should have a Manager constructor", () => {
            const manag = new Manager();
            expect(manag instanceof Manager).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should return name", () => {
            const manag = new Manager("mud", 1, "mud@fake.com", 1);
            expect(manag.getName()).toEqual("mud");
        });
    });

    describe("getid", () => {
        it("should return id", () => {
            const manag = new Manager("mud", 1, "mud@fake.com", 1);
            expect(manag.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return email", () => {
            const manag = new Manager("mud", 1, "mud@fake.com", 1);
            expect(manag.getEmail()).toEqual("mud@fake.com");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return office number", () => {
            const manag = new Manager("mud", 1, "mud@fake.com", 1);
            expect(manag.getOfficeNumber()).toEqual(1);
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const manager = new Manager("mud", 1, "mud@fake.com", 1);
            expect(manager.getRole()).toEqual("Manager");
        });
    });

});