export default function (tag, attrs, ...children) {
  let elem = document.createElement(tag);

  if (attrs === null || attrs === undefined) attrs = {};
  for (let [attr, value] of Object.entries(attrs)) {
    if (elem.hasAttribute(attr)) {
      if (value === true) {
        elem.setAttribute(attr, attr);
      }
      else if (value !== false && value !== null) {
        elem.setAttribute(attr, value);
      }
    }
    else if (attr in elem) {
      elem[attr] = value;
    }
  }

  for (let child of children) {
    if (child === undefined) {
      continue;
    }
    if (!(child instanceof Node)) {
      child = document.createTextNode(child);
    }
    elem.appendChild(child);
  }

  return elem;
};
