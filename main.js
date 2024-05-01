const valorX = document.getElementById('numberX');
const valorY = document.getElementById('numberY');
const form = document.getElementById('form-calcular');

function calcular(x, y){
    return x > y;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const x = parseFloat(valorX.value);
    const y = parseFloat(valorY.value);

    if (x === y) {
      alert("Os números são iguais!");
    } else if (x > y) {
      alert("O primeiro número é maior!");
    } else if (x < y) {
      alert("O segundo número é maior!");
    }
    
});