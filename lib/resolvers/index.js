'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloServer = require('apollo-server');

var _firebase = require('../firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  Book: {
    writer: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _firebase2.default.collection('writers').doc(book.writerId).get();

              case 3:
                doc = _context.sent;
                return _context.abrupt('return', doc.data());

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', new _apolloServer.ApolloError(_context.t0));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function writer(_x) {
        return _ref.apply(this, arguments);
      }

      return writer;
    }()
  },

  Writer: {
    books: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(writer) {
        var docs;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _firebase2.default.collection('books').where('writerId', '==', writer.id).get();

              case 3:
                docs = _context2.sent;
                return _context2.abrupt('return', docs.docs.map(function (doc) {
                  return doc.data();
                }));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', new _apolloServer.ApolloError(_context2.t0));

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function books(_x2) {
        return _ref2.apply(this, arguments);
      }

      return books;
    }()
  },

  Query: {
    books: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var docs;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _firebase2.default.collection('books').get();

              case 3:
                docs = _context3.sent;
                return _context3.abrupt('return', docs.docs.map(function (doc) {
                  return doc.data();
                }));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', new _apolloServer.ApolloError(_context3.t0));

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function books() {
        return _ref3.apply(this, arguments);
      }

      return books;
    }(),
    writer: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, args) {
        var docs;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _firebase2.default.collection('writers').where('name', '==', args.name).get();

              case 3:
                docs = _context4.sent;
                return _context4.abrupt('return', docs.docs[0].data() || new _apolloServer.ValidationError('writer not found'));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', new _apolloServer.ApolloError(_context4.t0));

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function writer(_x3, _x4) {
        return _ref4.apply(this, arguments);
      }

      return writer;
    }()
  }
};