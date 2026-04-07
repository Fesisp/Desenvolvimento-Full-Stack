function somar () { 
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const resultado = Number(num1) + Number(num2)

    document.getElementById("resultado").textContent = 
    `o resultado da soma é: ${resultado}`;
}
    
const btnCalcular = document.getElementById
btnCalcular.addEventListener('click', somar);

