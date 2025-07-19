const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".menu")

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[1].style.display = "none";
        menu.children[0].style.display = "block";
    }
});


palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click", ()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");

    });
});