const connect = require('./modules/db.module.js').connect;
const Model = require('./modules/model.module.js');
const ObjectID = require('mongodb').ObjectID;

module.exports.connect = connect;
module.exports.Model = Model;
module.exports.ObjectID = ObjectID;