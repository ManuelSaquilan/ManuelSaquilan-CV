async function obtenerDatos() {
    const response = await fetch("http://127.0.0.1:5500/datos.json");
    const persona = await response.text();
    const obj = JSON.parse(persona);
    document.getElementById("idapellido").innerHTML = obj.apellido;
    document.getElementById("idname").innerHTML = obj.nombre;
    document.getElementById("iddni").innerHTML = obj.dni;
    document.getElementById("idmail").innerHTML = obj.mail;
    document.getElementById("idnacimiento").innerHTML = obj.nacimiento;
    document.getElementById("iddireccion").innerHTML = obj.direccion;
    document.getElementById("idtelefono").innerHTML = obj.telefono;
    document.getElementById("idestudios1").innerHTML = obj.estudios[0];
    document.getElementById("idestudios2").innerHTML = obj.estudios[1];
    document.getElementById("idestudios3").innerHTML = obj.estudios[2];
    document.getElementById("idestudios4").innerHTML = obj.estudios[3];
    document.getElementById("idestudios5").innerHTML = obj.estudios[4];
    /* Lenguajes */
    document.getElementById("idlenguajes1").innerHTML = obj.lenguajes[0];
    document.getElementById("idlenguajes2").innerHTML = obj.lenguajes[1];
    document.getElementById("idlenguajes3").innerHTML = obj.lenguajes[2];
    document.getElementById("idlenguajes4").innerHTML = obj.lenguajes[3];
    document.getElementById("idlenguajes5").innerHTML = obj.lenguajes[4];
    document.getElementById("idlenguajes6").innerHTML = obj.lenguajes[5];
    document.getElementById("idlenguajes7").innerHTML = obj.lenguajes[6];
    document.getElementById("idlenguajes8").innerHTML = obj.lenguajes[7];
    document.getElementById("idlenguajes9").innerHTML = obj.lenguajes[8];
    /* Experiencia */
    document.getElementById("idexperiencia1").innerHTML = obj.experiencia[0];
    document.getElementById("idexperiencia2").innerHTML = obj.experiencia[1];
    document.getElementById("idexperiencia3").innerHTML = obj.experiencia[2];
    document.getElementById("idexperiencia4").innerHTML = obj.experiencia[3];
    document.getElementById("idexperiencia5").innerHTML = obj.experiencia[4];
    document.getElementById("idexperiencia6").innerHTML = obj.experiencia[5];
    document.getElementById("idexperiencia7").innerHTML = obj.experiencia[6];
    /* Habilidades */
    document.getElementById("idhabilidades1").innerHTML = obj.habilidades[0];
    document.getElementById("idhabilidades2").innerHTML = obj.habilidades[1];
    document.getElementById("idhabilidades3").innerHTML = obj.habilidades[2];
    document.getElementById("idhabilidades4").innerHTML = obj.habilidades[3];
    document.getElementById("idhabilidades5").innerHTML = obj.habilidades[4];
    document.getElementById("idhabilidades6").innerHTML = obj.habilidades[5];
    document.getElementById("idhabilidades7").innerHTML = obj.habilidades[6];
    document.getElementById("idhabilidades8").innerHTML = obj.habilidades[7];
    /* Idiomas */
    document.getElementById("ididiomas1").innerHTML = obj.idiomas[0];
    document.getElementById("ididiomas2").innerHTML = obj.idiomas[1];
}


obtenerDatos()

const certificado = document.getElementById("boton");
var imagen1 =document.getElementById("01");
var imagen2 =document.getElementById("02");
var imagen3 =document.getElementById("03");
var imagen4 =document.getElementById("04");
var imagen5 =document.getElementById("05");
var imagen6 =document.getElementById("06");
var imagen7 =document.getElementById("07");
var todos =document.getElementById("todos");
var ancho = "100px";
var alto = "100px";
var tiempo = 2000;
certificado.addEventListener("click",function() {
    if (certificado.innerHTML == "Mostrar Certificados") {
        certificado.innerHTML = "Ocultar Certificados";
        
        imagen1.style.visibility= ("visible");
        imagen1.style.width = ancho;
        imagen1.style.height = alto;
        imagen1.style.transitionDuration="1s";
        /* setTimeout(() => {
            imagen1.style.visibility= ("hidden");
            imagen1.style.width = "1px";
        }, tiempo); */
    
        
        imagen2.style.visibility= ("visible");
        imagen2.style.width = ancho;
        imagen2.style.height = alto;
        imagen2.style.transitionDuration="1s";
        
        imagen3.style.visibility= ("visible");
        imagen3.style.width = ancho;
        imagen3.style.height = alto;
        imagen3.style.transitionDuration="1s";

        imagen4.style.visibility= ("visible");
        imagen4.style.width = ancho;
        imagen4.style.height = alto;
        imagen4.style.transitionDuration="1s";

        imagen5.style.visibility= ("visible");
        imagen5.style.width = ancho;
        imagen5.style.height = alto;
        imagen5.style.transitionDuration="1s";

        imagen6.style.visibility= ("visible");
        imagen6.style.width = ancho;
        imagen6.style.height = alto;
        imagen6.style.transitionDuration="1s";

        imagen7.style.visibility= ("visible");
        imagen7.style.width = ancho;
        imagen7.style.height = alto;
        imagen7.style.transitionDuration="1s";

        this.className("imagen").height="100px";
    }
    else {certificado.innerHTML = "Ocultar Certificados";
        certificado.innerHTML = "Mostrar Certificados"
        imagen1.style.visibility= ("hidden");
        imagen1.style.width = "1px";
        imagen1.style.eight = "1px";

        imagen2.style.visibility= ("hidden");
        imagen2.style.width = "1px";
        imagen2.style.eight = "1px";

        imagen3.style.visibility= ("hidden");
        imagen3.style.width = "1px";
        imagen3.style.eight = "1px";

        imagen4.style.visibility= ("hidden");
        imagen4.style.width = "1px";
        imagen4.style.eight = "1px";

        imagen5.style.visibility= ("hidden");
        imagen5.style.width = "1px";
        imagen5.style.eight = "1px";

        imagen6.style.visibility= ("hidden");
        imagen6.style.width = "1px";
        imagen6.style.eight = "1px";

        imagen7.style.visibility= ("hidden");
        imagen7.style.width = "1px";
        imagen7.style.eight = "1px";}
})

.imagen1
