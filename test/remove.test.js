const assert = require('assert');
const Model = require('../index.js').Model;
let x = new Model('User', {}, { collection: "users" });

module.exports = function () {
    describe("Remove Tests", () => {
        it("Should remove { nickname: 'susu' } ", () => {
            x.remove({ nickname: "susu" }).then(() => {
                x.count({ nickname: "susu" }).then((data) => {
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
        it("Should remove everything", () => {
            x.remove({}).then((data) => {
                x.count({}).then((data) => {
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
    });
}