function obtenerDatos() {
    const url = "https://manuelsaquilan.github.io/datoscurriculum/datos.json";
    fetch(url).then(response => {
        return response.json();
    }).then(obj => {
        datos = obj.datos_personales;
        estudios = obj.estudios;
        lenguajes = obj.lenguajes;
        experiencia = obj.experiencia;
        habilidades = obj.habilidades;
        idiomas = obj.idiomas;  

        /* DATOS PERSONALES */

        const datos1 = document.querySelector(".datos");
        const pdatos1 = document.createElement("p");
        pdatos1.innerText="Nombre: " + datos.nombre;
        datos1.appendChild(pdatos1);

        const datos2 = document.querySelector(".datos");
        const pdatos2 = document.createElement("p");
        pdatos2.innerText="Apellido: " + datos.apellido;
        datos2.appendChild(pdatos2);

        const datos3 = document.querySelector(".datos");
        const pdatos3 = document.createElement("p");
        pdatos3.innerText="Dni: " + datos.dni;
        datos3.appendChild(pdatos3);

        const datos4 = document.querySelector(".datos");
        const pdatos4 = document.createElement("p");
        pdatos4.innerText="Fecha de Nacimiento: " + datos.nacimiento;
        datos4.appendChild(pdatos4);

        const datos5 = document.querySelector(".datos");
        const pdatos5 = document.createElement("p");
        pdatos5.innerText="Dirección: " + datos.direccion;
        datos5.appendChild(pdatos5);

        const datos6 = document.querySelector(".datos");
        const pdatos6 = document.createElement("p");
        pdatos6.innerText="Teléfono: " + datos.telefono;
        datos6.appendChild(pdatos6);
    

        /* ESTUDIOS */
        for (i in estudios){
            const container1 = document.querySelector(".estudios");
            const pestudio = document.createElement("p");
            pestudio.innerText=estudios[i];
            container1.appendChild(pestudio);
        }

        /* Lenguajes */
        for (i in lenguajes){
            const container2 = document.querySelector(".lenguajes");
            const plenguaje = document.createElement("p");
            plenguaje.innerText=lenguajes[i];
            container2.appendChild(plenguaje);
        }

        /* Experiencia */
        for (i in experiencia){
            const container3 = document.querySelector(".experiencia");
            const pexperiencia = document.createElement("p");
            pexperiencia.innerText=experiencia[i];
            container3.appendChild(pexperiencia);
        }

        /* Habilidades */
        for (i in habilidades){
            const container3 = document.querySelector(".habilidades");
            const phabilidades = document.createElement("p");
            phabilidades.innerText=habilidades[i];
            container3.appendChild(phabilidades);
        }
        /* Idiomas */
        for (i in idiomas){
            const container3 = document.querySelector(".idiomas");
            const pidiomas = document.createElement("p");
            pidiomas.innerText=idiomas[i];
            container3.appendChild(pidiomas);
        }
    });
}

obtenerDatos()


// TRATAMIENTO DE CERITFICADO //

const certificado = document.getElementById("boton");

var arrayImagenes = [];

for (i = 0; i <= 9; i++) {
  arrayImagenes.push("./assets/media/img/certificados/" + i + ".jpg");
}

var flag=0
for (i in arrayImagenes){
    const container4 = document.querySelector(".certificados");
    const pimagen = document.createElement("img");
    pimagen.src=arrayImagenes[i];
    pimagen.style.visibility=('hidden')
    pimagen.style.width = "1px";
    pimagen.style.height = "1px";
    pimagen.id = flag;
    pimagen.className = "imagen";
    container4.appendChild(pimagen);
    flag++;
}


certificado.addEventListener("click",function() {
    if (certificado.innerHTML == "Mostrar Certificados") {
        certificado.innerHTML = "Ocultar Certificados";
        var flag=0
        for (i in arrayImagenes){
            document.getElementById(flag).style.visibility=('visible');
            document.getElementById(flag).style.width="100px";
            document.getElementById(flag).style.height="100px";
            document.getElementById(flag).style.transitionDuration="1s";
            flag++;
        }
    }
    else {certificado.innerHTML = "Ocultar Certificados";
        certificado.innerHTML = "Mostrar Certificados";
        var flag=0
        for (i in arrayImagenes){
            document.getElementById(flag).style.visibility=('hidden');
            document.getElementById(flag).style.width="1px";
            document.getElementById(flag).style.height="1px";
            document.getElementById(flag).style.transitionDuration="1s";
            flag++;
        }
    }
}
)


/* Scripts para menu hamburguesa */

function ocultarmenu(){
    if (screen.width<=600)
        document.getElementById("ul").style.visibility="hidden";
}

function mostrarmenu(){
    if (screen.width<=600)
        document.getElementById("ul").style.visibility="visible";
}

