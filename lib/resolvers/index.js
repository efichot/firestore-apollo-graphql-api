"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Book: {
    writer: function () {
      var _writer = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(book) {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _firebase.default.collection('writers').doc(book.writerId).get();

              case 3:
                doc = _context.sent;
                return _context.abrupt("return", doc.data());

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", new _apolloServer.ApolloError(_context.t0));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function writer(_x) {
        return _writer.apply(this, arguments);
      };
    }()
  },
  Writer: {
    books: function () {
      var _books = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(writer) {
        var docs;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('TCL: asyncbooks -> writer', writer);
                _context2.prev = 1;
                _context2.next = 4;
                return _firebase.default.collection('books').where('writerId', '==', writer.id).get();

              case 4:
                docs = _context2.sent;
                return _context2.abrupt("return", docs.docs.map(function (doc) {
                  return doc.data();
                }));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", new _apolloServer.ApolloError(_context2.t0));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      return function books(_x2) {
        return _books.apply(this, arguments);
      };
    }()
  },
  Mutation: {
    addBook: function () {
      var _addBook = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(root, args, context, info) {
        var title, writer, snapWriter, writerId, snapBook, docWriter;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                title = args.title, writer = args.writer;
                _context3.next = 4;
                return _firebase.default.collection('writers').where('name', '==', writer).get();

              case 4:
                snapWriter = _context3.sent;

                if (!(snapWriter && snapWriter.docs[0] && snapWriter.docs[0].exists)) {
                  _context3.next = 14;
                  break;
                }

                writerId = snapWriter.docs[0].id;
                _context3.next = 9;
                return _firebase.default.collection('books').where('title', '==', title).get();

              case 9:
                snapBook = _context3.sent;

                if (!(snapBook && snapBook.docs[0] && snapBook.docs[0].exists)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", new _apolloServer.ApolloError('Book already created!'));

              case 12:
                _firebase.default.collection('books').add({
                  title: title,
                  writerId: writerId
                });

                return _context3.abrupt("return", {
                  title: title,
                  writerId: writerId
                });

              case 14:
                _context3.next = 16;
                return _firebase.default.collection('writers').add({
                  name: writer
                });

              case 16:
                docWriter = _context3.sent;

                _firebase.default.collection('books').add({
                  title: title,
                  writerId: docWriter.id
                });

                return _context3.abrupt("return", {
                  title: title,
                  writerId: docWriter.id
                });

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", new _apolloServer.ApolloError(_context3.t0));

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 21]]);
      }));

      return function addBook(_x3, _x4, _x5, _x6) {
        return _addBook.apply(this, arguments);
      };
    }()
  },
  Query: {
    books: function () {
      var _books2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var docs;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _firebase.default.collection('books').get();

              case 3:
                docs = _context4.sent;
                return _context4.abrupt("return", docs.docs.map(function (doc) {
                  return doc.data();
                }));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", new _apolloServer.ApolloError(_context4.t0));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      return function books() {
        return _books2.apply(this, arguments);
      };
    }(),
    writer: function () {
      var _writer2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(root, args) {
        var name, snap;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                name = args.name;
                _context5.next = 4;
                return _firebase.default.collection('writers').where('name', '==', name).get();

              case 4:
                snap = _context5.sent;
                return _context5.abrupt("return", _objectSpread({}, snap.docs[0].data(), {
                  id: snap.docs[0].id
                }) || new _apolloServer.ValidationError('writer not found'));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", new _apolloServer.ApolloError(_context5.t0));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function writer(_x7, _x8) {
        return _writer2.apply(this, arguments);
      };
    }()
  }
};
exports.default = _default;