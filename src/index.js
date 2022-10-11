
 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tomb = [];
document.addEventListener('DOMContentLoaded', () => {
    for( var i = 0; i<20; i++) {
        tomb.push(getRandomInt(1,30));
        console.log(tomb[i]);
    }
});