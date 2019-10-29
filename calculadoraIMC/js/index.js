let peso = 0;
let altura = 0;

let form = document.getElementById("formImc");
let inpPeso = document.getElementById("inputPeso")
let inpAltura = document.getElementById("inputAltura")

inpPeso.addEventListener("change", e => peso = e.target.value, true)
inpAltura.addEventListener("change", e => altura = e.target.value, true)

let funcImc = function(e) {
    console.log(`${peso} e ${altura}`)
    e.preventDefault();

    let spanImc = document.getElementById("imc");
    let spanStatus = document.getElementById("status");

    let resImc = Math.round(peso / (altura * altura));
    console.log(resImc)

    if(resImc < 18.5) {
        spanImc.innerHTML = `<p>Seu IMC é ${resImc}</p>`;
        spanStatus.innerHTML = "<p>Você está abaixo do peso</p>"

        return console.log("ok");

    } else if(resImc > 18.5 && resImc < 25) {
        spanImc.innerHTML = `<p>Seu IMC é ${resImc}</p>`;
        spanStatus.innerHTML = "<p>Você está normal</p>"

        return console.log("ok");

    } else if(resImc > 25 && resImc < 30) {
        spanImc.innerHTML = `<p>Seu IMC é ${resImc}</p>`;
        spanStatus.innerHTML = "<p>Você está acima do peso</p>"

        return console.log("ok");
    }  else {
        spanImc.innerHTML = `<p>Seu IMC é ${resImc}</p>`;
        spanStatus.innerHTML = "<p>Você está com obesidade mórbida</p>"

        return console.log("ok");
    }
}

form.addEventListener("submit", funcImc, true)
