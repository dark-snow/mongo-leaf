const assert = require('assert');
const User = require('./models/User.model.js');

module.exports = function () {
    describe("Update Tests", () => {
        it("Should update { nickname: 'heiyuki' } to { nickname: 'banzai' } ", () => {
            User.update({ nickname: "heiyuki" }, { $set: { nickname: "banzai" } }).then(() => {
                User.count({ nickname: "heiyuki" }).then((data) => {
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
            User.update({}, { $set: { nickname: "susu" } }, { multi: true }).then(() => {
                User.count({ nickname: "susu" }).then((data) => {
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