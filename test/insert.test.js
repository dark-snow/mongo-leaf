const assert = require('assert');
const Model = require('../index.js').Model;
let x = new Model('User', {}, { collection: "users" });

module.exports = function () {
    describe("Insert Tests", () => {
        it("Should Insert 1 User", (done) => {
            x.insert({ firstName: "Khaled", lastName: "Romdhane", nickname: "heiyuki" }).then((data) => {
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
        it("Should Insert 2 User", (done) => {
            x.insert([{ firstName: "Yesmine", lastName: "Toutou", nickname: "Tsukki" },
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