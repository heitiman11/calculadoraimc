let btnCalcular = document.getElementById("calcular");

function calcularIMC() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");
  if (altura !== "" && peso !== "") {
    let imc = (peso / (altura * altura)).toFixed(1);

    if (imc < 18.5) {
      resultado.textContent = `Seu IMC é de ${imc}, você está abaixo do peso ideal.`;
    } else if (imc >= 18.5 && imc < 25) {
      resultado.textContent = `Seu IMC é de ${imc}, você está no peso ideal! Parabéns :D`;
    } else if (imc >= 25 && imc < 30) {
      resultado.textContent = `Seu IMC é de ${imc}, você está com sobrepeso, tomar cuidado.`;
    } else {
      resultado.textContent = `Seu IMC é de ${imc}, você está com obesidade, cuide de sua saúde.`;
    }
  } else {
    resultado.textContent = "Insira os valores para realizar o cálculo.";
  }
}

btnCalcular.addEventListener("click", calcularIMC);
