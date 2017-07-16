const assert = require('assert');
const Model = require('../index.js').Model;
let x = new Model('User', {}, { collection: "users" });
module.exports = function () {

    console.log("please read over the console logs for any errors in the data, the test suit just tests the funcionnality");

    describe("Find Tests", () => {
        it("Should Find All Users With All Fields", (done) => {
            x.find().then((data) => {
                console.log(data);
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
        it("Should Find All Users With the nickname field Only", (done) => {
            x.find({}, { nickname: 1, _id: 0 }).then((data) => {
                console.log(data);
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
        it("Should Find the first user only", (done) => {
            let options = {
                limit: 1
            }
            x.find({}, { nickname: 1, _id: 0 }, options).then((data) => {
                console.log(data);
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });

        it("Should Skip the first user", (done) => {
            let options = {
                skip: 1
            }
            x.find({}, { nickname: 1, _id: 0 }, options).then((data) => {
                console.log(data);
                done();
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });

        it("Should return the Number of users", () => {
            x.count({}).then((data) => {
                assert.equal(data, 3);
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });


    });
}