function start() {
    let cadastro = Number(prompt('COLOQUE O SEU ID'));
    let resultado = document.querySelector(".top");

    if (cadastro >= 1000 && cadastro < 1999) {
        document.querySelector("body").style.backgroundColor = "var(--green)";
        resultado.textContent = "Acesso a todas areas restritas";
        resultado.style.color = "var(--green)"

    }
    else if (cadastro >= 2000 && cadastro < 2999) {
        document.querySelector("body").style.backgroundColor = "var(--yellow)";
        resultado.textContent = "Acesso limitado sobre algumas areas";
        resultado.style.color = "var(--yellow)"
    }
    else 
    {
        document.querySelector("body").style.backgroundColor = "var(--red)";
        resultado.textContent = "ACESSO NEGADO";
        resultado.style.color = "var(--red)"
    }

}
