
 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tomb = [];
let ottelOszthato=[];
document.addEventListener('DOMContentLoaded', () => {
    for( var i = 0; i<20; i++) {
        tomb.push(getRandomInt(1,30));
        if(tomb[i]%5===0) { ottelOszthato.push(tomb[i])};
        console.log(tomb[i]);
    }
    console.log('');
    for( var i = 0; i<20; i++) {
        console.log(ottelOszthato[i]);
    }
    document.getElementById('meghivas').addEventListener("click", () => {
        ottelOszthato = tomb.filter(e => (e%5)==0);
        console.log(ottelOszthato);
    });
});