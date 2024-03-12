


function calcular(){

    const principalInput = document.getElementById("principal")
    const jurosInput = document.getElementById("juros")
    const anosInput = document.getElementById("anos")
    const quantiaTotal = document.getElementById("quantia-total")

    let principal = Number(principalInput.value);
    let juros = Number(jurosInput.value) / 100;
    let anos = Number(anosInput.value);

    const result = principal * (1 + juros * anos )
    quantiaTotal.textContent =result;


    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }

    if (juros < 0 || isNaN(juros)) {
        juros = 0;
        jurosInput.value = 0;
    }
    if (anos < 0 || isNaN(anos)) {
        anos = 0;
        anosInput.value = 0;
    }
}