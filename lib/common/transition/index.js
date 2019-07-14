"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeTransition = void 0;

require("./style.css");

function transitionFactory(name) {
  return {
    name: name,
    functional: true,
    render: function render(h, context) {
      context.data.props = {
        name: name
      };
      return h('transition', context.data, context.children);
    }
  };
}

var fadeTransition = transitionFactory('fade');
exports.fadeTransition = fadeTransition;