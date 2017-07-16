const assert = require('assert');
const Model = require('../index.js').Model;
let x = new Model('User', {}, { collection: "users" });

module.exports = function () {
    describe("Update Tests", () => {
        it("Should update { nickname: 'heiyuki' } to { nickname: 'banzai' } ", () => {
            x.update({ nickname: "heiyuki" }, { $set: { nickname: "banzai" } }).then(() => {
                x.count({ nickname: "heiyuki" }).then((data) => {
                    assert.equal(data, 0);
                }).catch((err) => {
                    console.log(err);
                    assert.fail(true);
                });
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
        it("Should update All Nicknames to 'susu'", () => {
            x.update({}, { $set: { nickname: "susu" } }, { multi: true }).then(() => {
                x.count({ nickname: "susu" }).then((data) => {
                    assert.equal(data, 3);
                }).catch((err) => {
                    console.log(err);
                    assert.fail(false);
                });
            }).catch((err) => {
                console.log(err);
                assert.fail(true);
            });
        });
    });
}