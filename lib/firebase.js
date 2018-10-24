'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

var _serviceAccount = require('../service-account.json');

var _serviceAccount2 = _interopRequireDefault(_serviceAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebaseAdmin2.default.initializeApp({
  credential: _firebaseAdmin2.default.credential.cert(_serviceAccount2.default)
});

var db = _firebaseAdmin2.default.firestore();
var settings = { timestampsInSnapshots: true };
db.settings(settings);

exports.default = db;