"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _serviceAccount = _interopRequireDefault(require("../service-account.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebaseAdmin.default.initializeApp({
  credential: _firebaseAdmin.default.credential.cert(_serviceAccount.default)
});

var db = _firebaseAdmin.default.firestore();

var settings = {
  timestampsInSnapshots: true
};
db.settings(settings);
var _default = db;
exports.default = _default;