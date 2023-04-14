function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
// Outputs a number between 0 and 255 inclusive 
console.log(randomInteger(255));

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
for(i = 0; i < 5; i++) {
    console.log(randomRGBColor());
}
/* Example output:
[191, 99, 247]
[162, 94, 201]
[236, 241, 172]
[168, 89, 2]
[161, 42, 113]
*/

function randomHexColor() {
    let [r,g,b] =randomRgbColor();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}
for(i = 0; i < 5; i++) {
    console.log(randomHEXColor());
}
/*
#51c18a
#81f582
#8a8446
#0554e1
#a21b18
*/

function changeColor() {
    let hex = randomHexColor();
    document.getElementById('color').value = hex;
    document.getElementById('text').innerHTML = hex;
  }
  
  function clickHandler(event) {
    changeColor();
    event.preventDefault();
  }
  
  document.addEventListener('click', clickHandler);
  
  changeColor();