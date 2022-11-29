const Engineer = require("../lib/Engineer");

describe("Engineer suite", () => {
    describe("Initialization", () => {
        it("should have a Engineer constructor", () => {
            const eng = new Engineer();
            expect(eng instanceof Engineer).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should return name", () => {
            const eng = new Engineer("saad", 1, "saad@fake.com", "saadyousafi87@github.com");
            expect(eng.getName()).toEqual("saad");
        });
    });

    describe("getid", () => {
        it("should return id", () => {
            const eng = new Engineer("saad", 1, "saad@fake.com", "saadyousafi87@github.com");
            expect(eng.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return email", () => {
            const eng = new Engineer("saad", 1, "saad@fake.com", "saadyousafi87@github.com");
            expect(eng.getEmail()).toEqual("saad@fake.com");
        });
    });

    describe("getGithub", () => {
        it("should return github address", () => {
            const eng = new Engineer("saad", 1, "saad@fake.com", "saadyousafi87@github.com");
            expect(eng.getGithub()).toEqual("saadyousafi87@github.com");
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const eng = new Engineer("saad", 1, "saad@fake.com", "saadyousafi87@github.com");
            expect(eng.getRole()).toEqual("Engineer");
        });
    });

});