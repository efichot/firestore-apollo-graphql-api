'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  Mutation: {
    books: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(writer) {
        var docs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return db.collection('books').where('writerId', '==', writer.id).get();

              case 3:
                docs = _context.sent;
                return _context.abrupt('return', docs.docs.map(function (doc) {
                  return doc.data();
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', new ApolloError(_context.t0));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function books(_x) {
        return _ref.apply(this, arguments);
      }

      return books;
    }()
  },
  Query: {
    writer: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, args) {
        var docs;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return db.collection('writers').where('name', '==', args.name).get();

              case 3:
                docs = _context2.sent;
                return _context2.abrupt('return', docs.docs[0].data() || new ValidationError('writer not found'));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', new ApolloError(_context2.t0));

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function writer(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return writer;
    }()
  }
};