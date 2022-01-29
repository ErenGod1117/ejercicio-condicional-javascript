let eren = document.getElementById('eren')
let mikasa = document.getElementById('mikasa')
let levi = document.getElementById('levi')
let pregunta2 = document.getElementById('pregunta-2')
let contenido = document.getElementById('contenido')
let carla = document.getElementById('carla')
let hange = document.getElementById('hange')
let hitch = document.getElementById('hitch')
let pregunta3 = document.getElementById('pregunta-3')
let atake = document.getElementById('atake')
let acorazado = document.getElementById('acorazado')
let martillo = document.getElementById('martillo')
let final = document.getElementById('final')

eren.onclick = function(){
    alert('felicidades seleccionaste a eren pasas a la seccion de preguntas')
    pregunta2.classList.remove('d-none')
    if (pregunta2.classList.contains('d-none')) {
        alert('eren god')
    }else{
        contenido.classList.add('d-none')
    }
}
mikasa.onclick = function() {
    alert('lo siento seleccionaste a mikasa intentalo de nuevo')
    mikasa.style.opacity= 0.2
}

levi.onclick = function(){
    alert('lo siento seleccionaste a levi intentalo de nuevo')
    levi.style.opacity= 0.2
}

carla.onclick = function(){
    alert('felicidades seleccionaste a carla  pasas a la siguiente pregunta')
    pregunta3.classList.remove('d-none')
    if (pregunta2.classList.contains('d-none')) {
        alert('eren god')
    }else{
        pregunta2.classList.add('d-none')
    }
}


hange.onclick = function() {
    alert('lo siento seleccionaste a hange ella no es madre de eren')
    hange.style.opacity= 0.2
}

hitch.onclick = function(){
    alert('lo siento seleccionaste a hitch ella no es madre de eren')
    hitch.style.opacity= 0.2
}


atake.onclick = function (){
    alert('felicidades seleccionaste al titan de eren pasas a la siguiente pregunta')
    final.classList.remove('d-none')
    if (pregunta3.classList.contains('d-none')) {
        alert('eren god')
    }else{
        pregunta3.classList.add('d-none')
    }
}

acorazado.onclick = function () {
    alert('lo siento seleccionaste al acorazado no es el de eren')
    acorazado.style.opacity= 0.2
}

martillo.onclick = function (){
    alert('lo siento seleccionaste al titan martillo no es el de eren')
    martillo.style.opacity= 0.2
}









