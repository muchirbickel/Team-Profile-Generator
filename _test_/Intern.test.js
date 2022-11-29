const Intern = require("../lib/Intern");

describe("Intern suite", () => {
    describe("Initialization", () => {
        it("should have a Intern constructor", () => {
            const intern = new Intern();
            expect(intern instanceof Intern).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should return name", () => {
            const intern = new Intern("saad", 1, "saad@fake.com", "UPenn University");
            expect(intern.getName()).toEqual("saad");
        });
    });

    describe("getid", () => {
        it("should return id", () => {
            const intern = new Intern("saad", 1, "saad@fake.com", "UPenn University");
            expect(intern.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return email", () => {
            const intern = new Intern("saad", 1, "saad@fake.com", "UPenn University");
            expect(intern.getEmail()).toEqual("saad@fake.com");
        });
    });

    describe("getSchool", () => {
        it("should return school name", () => {
            const intern = new Intern("saad", 1, "saad@fake.com", "UPenn University");
            expect(intern.getSchool()).toEqual("UPenn University");
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const intern = new Intern("saad", 1, "saad@fake.com", "UPenn University");
            expect(intern.getRole()).toEqual("Intern");
        });
    });

});