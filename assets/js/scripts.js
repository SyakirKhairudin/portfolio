
const colorH = ["#d2d2d2", "#ec4a57"];

function changeColorH(element) {
  var current = Number(element.dataset.ci || 0); // init to 0 on first click
  current = (current + 1) % colorH.length; // clamp array index
  element.dataset.ci = current; // store new value in element
  element.style.color = colorH[current]; // set color
}

const colorB = ["#d2d2d2", "#1f41a2"];

function changeColorB(element) {
  var current = Number(element.dataset.ci || 0); // init to 0 on first click
  current = (current + 1) % colorB.length; // clamp array index
  element.dataset.ci = current; // store new value in element
  element.style.color = colorB[current]; // set color
}


const colorC = ["#7dd0af", "#dd576f", "#ffc166", "#a774be", "#566c85","#4a9bf3" ];

function changeColorC(element) {
  var current = Number(element.dataset.ci || 0); // init to 0 on first click
  current = (current + 1) % colorC.length; // clamp array index
  element.dataset.ci = current; // store new value in element
  element.style.color = colorC[current]; // set color
}
