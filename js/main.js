function inversion(){

    // 1. Ocultar la imagen y mostrar el panel con los datos de la simulación
    const preCont = document.querySelector(".pre-simulation");
    const posCont = document.querySelector(".post-simulation");

    posCont.classList.remove("disabled");
    preCont.classList.add("disabled");


    //2.Capturamos y mostramos los datos que no se calculan
    //Value=Para capturar el valor del campo
    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const nombresShow= document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");

    nombresShow.innerText= campoNombres;
    emailShow.innerText=campoEmail;

    //3. Capturamos los datos de inversion y tiempo, creamos las variables de ganacia y ganancia total

    const inversion = document.getElementById("inversion").value;
    const tiempo =document.getElementById("tiempo").value;
    const gananciaShow = document.getElementById("ganancia-show");
    const gtotalShow = document.getElementById("total-show");
    const tiempoShow= document.getElementById("tiempo-show");
    const interesShow= document.getElementById("interes-show");




    let ganancia = 0;
    let gananciatotal = 0;



    //4.Validamos o comparamos el tiempo de inversion segun este mostramos la ganancia. el total y los demas datos 
    switch (tiempo) {
        case "1":
        ganancia= (inversion*0.8)/100*12;
        gananciatotal= parseInt(inversion)+parseInt(ganancia);

        gananciaShow.innerText=ganancia;
        gtotalShow.innerText=gananciatotal;

        tiempoShow.innerText= "12 Meses";
        interesShow.innerText= "0.8%"
            break;
        case "2":
            ganancia= (inversion*1.3)/100*24;
            gananciatotal= parseInt(inversion)+parseInt(ganancia);
    
            gananciaShow.innerText=ganancia;
            gtotalShow.innerText=gananciatotal;
    
            tiempoShow.innerText= "24 Meses";
            interesShow.innerText= "1.3%";

            break;

        case "3":
            ganancia= (inversion*1.7)/100*36;
            gananciatotal= parseInt(inversion)+parseInt(ganancia);
    
            gananciaShow.innerText=ganancia;
            gtotalShow.innerText=gananciatotal;
    
            tiempoShow.innerText= "36 Meses";
            interesShow.innerText= "1.7%";

            break
    }


}
