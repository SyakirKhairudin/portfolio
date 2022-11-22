function myFunction(element,clr) {
    element.style.color = clr;
}

const colors = ["#ec4a57", "#d2d2d2"];

function changeColor(element) {
  var current = alphaButton.dataset.ci || 0;
  current = (current + 1) % colors.length;
  element.dataset.ci = current;
  element.style.color = colors[current];
}