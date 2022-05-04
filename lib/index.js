'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = undefined;

var _dulcetDom = require('dulcet-dom');

var _dulcetDom2 = _interopRequireDefault(_dulcetDom);

var _server = require('dulcet-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = exports.render = function render(rootComponent, domElement) {
  if (navigator.userAgent.match(/Node\.js/i) && window && window.dulcetSnapshotRender) {
    domElement.innerHTML = _server2.default.renderToString(rootComponent);
    window.dulcetSnapshotRender();
  } else {
    _dulcetDom2.default.render(rootComponent, domElement);
  }
};
