function myFunction(element,clr) {
    element.style.color = clr;
}



const colors = ["#d2d2d2", "#ec4a57"];

function changeColorH(element) {
  var current = Number(element.dataset.ci || 0); // init to 0 on first click
  current = (current + 1) % colors.length; // clamp array index
  element.dataset.ci = current; // store new value in element
  element.style.color = colors[current]; // set color
}

const color = ["#d2d2d2", "#1f41a2"];

function changeColorB(element) {
  var current = Number(element.dataset.ci || 0); // init to 0 on first click
  current = (current + 1) % color.length; // clamp array index
  element.dataset.ci = current; // store new value in element
  element.style.color = color[current]; // set color
}