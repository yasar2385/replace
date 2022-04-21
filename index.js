// Import stylesheets
import './style.css';

// Write Javascript code!
var commonMethods = {};
commonMethods.setAttr = function (el, attr_json, Option) {
  try {
    if (typeof el == 'string') el = document.createElement(el);
    if (attr_json.constructor.name === 'NamedNodeMap') {
      Array.from(attr_json).forEach(function (attr) {
        el.setAttribute(attr.name, attr.value);
      });
    } else {
      Object.keys(attr_json).forEach(function (attr) {
        el.setAttribute(attr, attr_json[attr]);
      });
    }
    return el;
  } catch (err) {
    console.warn(err.message);
    ErrorLogTrace('setAttributes', err.message);
  }
};
var REPLACE_TAGS = {
  DE_STR: {
    FROM: 'DIV',
    TO: 'SPAN',
  },
  RE_STR: {
    FROM: 'SPAN',
    TO: 'DIV',
  },
};
var Method = 'DE_STR';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var ABS_DOM = document.getElementById('IMP2-52');
var ABS_DOM_CLONE = ABS_DOM.cloneNode(!0);
// ? Un-structure store original html into attribute and remove the Section/Para Tags
var from = REPLACE_TAGS[Method].FROM;
var to = REPLACE_TAGS[Method].TO;
//this.Handle_Old_Patterns(ABS_DOM, Method);
ABS_DOM_CLONE.querySelectorAll('div').forEach((elm) => {
  let newDom = commonMethods.setAttr(to, elm.attributes);
  newDom.innerHTML = elm.innerHTML;
  elm.replaceWith(newDom);
  //console.log(elm);
  //elem.innerHTML = target.replace(/(<span)/igm, '<div').replace(/<\/span>/igm, '</div>');
});
ABS_DOM.replaceWith(ABS_DOM_CLONE);
console.log(ABS_DOM.firstElementChild);
