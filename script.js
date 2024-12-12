const containers = document.getElementById('too')
const hasahButton = document.getElementById('hasah')
const nemehButton = document.getElementById('nemeh')
let too = 10;

hasah.addEventListener("click" ,() => {
    too--;
    containers. innerHTML = too;
});
nemeh.addEventListener("click" ,() => {
    too++;
    containers. innerHTML = too;
});
