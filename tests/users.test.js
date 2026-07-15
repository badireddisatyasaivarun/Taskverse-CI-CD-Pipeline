const { expect } = require("chai");
const { getUserById } = require("../services/users");

describe("GET User By ID", () => {
    it("should return user when id exists", () => {
        const req = {
            params: {
                id: "1"
            }
        };
        const res = {
            statusCode: 200,
            body: null,
            status(code) {
                this.statusCode = code;
                return this;
            },
            json(data) {
                this.body = data;
                return this;
            }
        };
        getUserById(req, res);
        expect(res.body).to.deep.equal({
            id: 1,
            name: "User 1"
        });
    });
});