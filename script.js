console.log('funcionando')

let tema = localStorage.getItem('tema')

if(tema == null){
    setTheme('light')
}else{
    setTheme(tema)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Cliecked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'dark'){
        document.getElementById('theme-style').href = 'dark.css'
    }
    localStorage.setItem('tema', mode)
}

var data = {
    "english": 
    {
      "contacto": "Contact",
      "queHago": "What I do?",
      "queHago2": "Recently graduated in Computer Systems Engineering focused on web development.",
      "tituloTema": "Custom Theme",
      "descripcionTema": "*The theme you choose will be saved<br>for your next visit",
      "masSobreMiTitulo": "More about me",
      "masSobreMiTexto":"Today I have knowledge of software design, development and testing as well as fundamental knowledge of computer support and computer networks. Looking to use a broad education with analytical, technical and programming skills to thrive as a software developer.",
      "educacionTitulo":"Education",
      "educacionDescripcion":"<strong>Instituto Tecnológico de Ciudad Cuauhtemoc</strong><br>Computer Systems Engineering, February 2021<br><br><strong>Relevant Courses:</strong> General Programming, Data Structures, Object-Oriented Design, Database Management, Information Security, Organization and Architecture of Computers, Computer Networks.",
      "habilidades":"Abilities",
      "ingles":"Advanced English",
      "soporte":"Computing support",
      "redes":"Computer networks",
      "experienciaLab":"Work experience",
      "experienciaPon":"<strong>PONDERCEL S.A DE C.V</strong><br>Web Development Intern, September 2020 - February 2021<br><br>As an intern, I developed full-stack web applications, determining the needs of the user and his department apart of that i also provided second hand help at necessary times for technical support.",
      "practicas":"Proyects that I have done",
      "cv":"Download Curriculum Vitae",
    },
    "español": 
    {
        "contacto": "Contacto",
        "queHago": "¿Que hago?",
        "queHago2": "Recien egresado en Ingenieria de sistemas computacionales enfocado al desarrollo web.",
        "tituloTema": "Tema Personalizado",
        "descripcionTema": "*El tema que elija se quedará guardado<br>para tu siguiente visita",
        "masSobreMiTitulo": "Mas sobre mí...",
        "masSobreMiTexto":"Hoy en dia cuento con conocimientos de diseño, desarrollo y pruebas de software también conocimientos fundamentales de soporte informático y redes informáticas. Buscando utilizar una amplia educación con habilidades analíticas, técnicas y de programación para prosperar como desarrollador de software.",
        "educacionTitulo":"Educacion",
        "educacionDescripcion":"<strong>Instituto Tecnológico de Ciudad Cuauhtemoc</strong><br>Ingeniería en Sistemas Computacionales, Febrero 2021<br><br><strong>Cursos Relevantes:</strong> Programación en general, Estructuras de Datos, Diseño Orientado a Objetos, Manejo de Bases de Datos, Seguridad de Información, Organización y Arquitectura de Computadoras, Redes Informáticas.",
        "habilidades":"Hablilidades",
        "ingles":"Ingles avanzado",
        "soporte":"Soporte de computo",
        "redes":"Redes Informaticas",
        "experienciaLab":"Experiencia laboral",
        "experienciaPon":"<strong>PONDERCEL S.A DE C.V</strong><br>Practicante para Desarrollo web, Septiembre 2020 - Febrero 2021<br><br>Como practicanté desarrolle aplicaciones web como full-stack determinando las necesidades del usuario y su departamento aparte de dar apoyo en momentos necesarios para soporte técnico.",
        "practicas":"Practicas que he hecho",
        "cv":"Descargar Curriculum Vitae",
    }
}

function idioma(){
    if (document.getElementById('idioma').checked){
        contacto.textContent = data['english'].contacto;
        queHago.textContent = data['english'].queHago;
        queHago2.textContent = data['english'].queHago2;
        tituloTema.textContent = data['english'].tituloTema;
        descripcionTema.innerHTML = data['english'].descripcionTema;
        masSobreMiTitulo.textContent = data['english'].masSobreMiTitulo;
        masSobreMiTexto.textContent = data['english'].masSobreMiTexto;
        educacionTitulo.textContent = data['english'].educacionTitulo;
        educacionDescripcion.innerHTML = data['english'].educacionDescripcion;
        habilidades.textContent = data['english'].habilidades;
        ingles.textContent = data['english'].ingles;
        soporte.textContent = data['english'].soporte;
        redes.textContent = data['english'].redes;
        experienciaLab.textContent = data['english'].experienciaLab;
        experienciaPon.innerHTML = data['english'].experienciaPon;
        practicas.textContent = data['english'].practicas;
        cv.textContent = data['english'].cv;

    }else{
        contacto.textContent = data['español'].contacto;
        queHago.textContent = data['español'].queHago;
        queHago2.textContent = data['español'].queHago2;
        tituloTema.textContent = data['español'].tituloTema;
        descripcionTema.innerHTML = data['español'].descripcionTema;
        masSobreMiTitulo.textContent = data['español'].masSobreMiTitulo;
        masSobreMiTexto.textContent = data['español'].masSobreMiTexto;
        educacionTitulo.textContent = data['español'].educacionTitulo;
        educacionDescripcion.innerHTML = data['español'].educacionDescripcion;
        habilidades.textContent = data['español'].habilidades;
        ingles.textContent = data['español'].ingles;
        soporte.textContent = data['español'].soporte;
        redes.textContent = data['español'].redes;
        experienciaLab.textContent = data['español'].experienciaLab;
        experienciaPon.innerHTML = data['español'].experienciaPon;
        practicas.textContent = data['español'].practicas;
        cv.textContent = data['español'].cv;
    }
}

const contacto = document.querySelector('.contacto-link');
const queHago = document.querySelector('.que-hago');
const queHago2 = document.querySelector('.que-hago-2');
const tituloTema = document.querySelector('.titulo-tema');
const descripcionTema = document.querySelector('.settings');
const masSobreMiTitulo = document.querySelector('.mas-sobre-mi-titulo');
const masSobreMiTexto = document.querySelector('.mas-sobre-mi-texto');
const educacionTitulo = document.querySelector('.educacion-titulo');
const educacionDescripcion = document.querySelector('.educacion-descripcion');
const habilidades = document.querySelector('.habilidades');
const ingles = document.querySelector('.ingles');
const soporte = document.querySelector('.soporte');
const redes = document.querySelector('.redes');
const experienciaLab = document.querySelector('.experiencia-lab');
const experienciaPon = document.querySelector('.experiencia-pon');
const practicas = document.querySelector('.practicas');
const cv = document.querySelector('.cv');


function scrollWin() {
  window.scrollBy(0, 6000);
}