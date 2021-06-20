import { node } from '../../../../utility/node';

import './index.css';

export const range = function({
  id = false,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  classList = [],
  func = false,
  focusFunc = false,
  blurFunc = false,
  mouseDownFunc = false,
  mouseUpFunc = false
} = {}) {

  const input = node('input|type:range,min:' + min + ',max:' + max + ',step:' + step + ',value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('input', function(event) {
      func();
    });

  };

  if (focusFunc) {

    input.addEventListener('focus', function(event) {
      focusFunc();
    });

  };

  if (blurFunc) {

    input.addEventListener('blur', function(event) {
      blurFunc();
    });

  };

  if (mouseDownFunc) {

    input.addEventListener('mousedown', function(event) {
      mouseDownFunc();
    });

  };

  if (mouseUpFunc) {

    input.addEventListener('mouseup', function(event) {
      mouseUpFunc();
    });

  };

  return input;

};