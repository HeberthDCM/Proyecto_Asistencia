const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".menu")
const main = document.querySelector("main")

menu.addEventListener("click",()=>{
    alert("menu");
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        alert("if menu");
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        alert("else menu");
        menu.children[1].style.display = "none";
        menu.children[0].style.display = "block";
    }
    // si es menor de 320 y se presiona el boton y se trabaja con las mini
    if(window.innerWidth<=320){
        alert("320");
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            
        }) 
    }
});


palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click", ()=>{
    // alert("cloud");
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");

    });
});