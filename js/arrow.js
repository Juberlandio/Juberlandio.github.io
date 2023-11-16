const btn = document.getElementById("botao-topo")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"    
    } else {
        btn.style.display = "none"  
    }
}
ocultar()