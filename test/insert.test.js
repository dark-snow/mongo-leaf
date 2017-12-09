const assert = require('assert');
const User = require('./models/User.model.js');

module.exports = function () {
    describe("Insert Tests", () => {
        it("Should Insert 1 User", (done) => {
            User.insertOne({ firstName: "Khaled", lastName: "Romdhane", nickname: "heiyuki" }).then((data) => {
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
        it("Should Insert 2 User", (done) => {
            User.insertMany([{ firstName: "Yesmine", lastName: "Toutou", nickname: "Tsukki" },
            { firstName: "Katerina", lastName: "El Maestro", nickname: "Tina" }
            ]).then((data) => {
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
    });
}