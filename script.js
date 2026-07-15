function abrirCarta(){

    document.querySelector(".carta").classList.add("abierta");

    document.querySelector("#web").classList.remove("oculto");

    const musica = document.getElementById("musica");

    musica.play().catch(error => {
        console.log("El navegador bloqueó la música", error);
    });
}


// Cambia esta fecha por el día que empezasteis
const inicio = new Date("2024-01-01");

const hoy = new Date();

const diferencia = hoy - inicio;

const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
);

document.getElementById("dias").textContent = dias;


// Corazones flotando

setInterval(() => {

    let corazon = document.createElement("div");

    corazon.className = "corazon";
    corazon.innerHTML = "❤️";

    corazon.style.left =
    Math.random() * 100 + "vw";

    corazon.style.animationDuration =
    (3 + Math.random()*5) + "s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },6000);

},500);
