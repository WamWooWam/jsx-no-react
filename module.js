function appendChild(elem, child) {
  if (child === undefined) {
    return;
  }
  
  if (child instanceof Array) {
    for (let child2 of child) {
      appendChild(elem, child2);
    }

    return;
  }
  else if (!(child instanceof Node)) {
    child = document.createTextNode(child);
  }

  elem.appendChild(child);
}

export default function (tag, attrs, ...children) {
  let elem = document.createElement(tag);

  if (attrs !== null && attrs !== undefined) {
    for (let [attr, value] of Object.entries(attrs)) {
      if (attr in elem) {
        elem[attr] = value;
      }
      else {
        if (value === true) {
          elem.setAttribute(attr, attr);
        }
        else if (value !== false && value !== null) {
          elem.setAttribute(attr, value);
        }
      }
    }
  }

  for (let child of children) {
    appendChild(elem, child);
  }

  return elem;
};
