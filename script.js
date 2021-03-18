const btn = document.getElementById("btn");


btn.addEventListener('click', () => {
   
    let email2 = document.getElementById("correo").value;

    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email2)){
        
        let verifi = document.getElementById("verification");
        let newElement = document.createElement("h4");
        newElement.textContent = "Correo enviado";
        //element.classList.add("btn-custom")
        newElement.classList.add("btn-custom");
        // newElement.style.color = "#e0f808";
        // newElement.style.fontFamily = "Arial, Helvetica, sans-serif";
        verifi.appendChild(newElement);
        

    }else if (email2.length < 2) {
        let verifi = document.getElementById("verification");
        let newElement = document.createElement("h4");
        newElement.textContent = "Escribe tu correo";
        newElement.style.color = "#e0f808";
        newElement.style.fontFamily = "Arial, Helvetica, sans-serif";
        verifi.appendChild(newElement);

    }else {
        let verifi = document.getElementById("verification");
        let newElement = document.createElement("h4");
        newElement.textContent = "Correo inválido";
        newElement.style.color = "#e0f808";
        newElement.style.fontFamily = "Arial, Helvetica, sans-serif";
        verifi.appendChild(newElement);
    }
})

// control + K C
function validarCorreo() {
     let email2 = document.getElementById("correo").value;

     if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email2)){
        
         let verifi = document.getElementById("verification");
         let newElement = document.createElement("h4");
         newElement.textContent = "Correo enviado";
         newElement.style.color = "#e0f808";
         newElement.style.fontFamily = "Arial, Helvetica, sans-serif";
         verifi.appendChild(newElement);
        

     }else if (email2.length < 2) {
         let verifi = document.getElementById("verification");
         let newElement = document.createElement("h4");
         newElement.textContent = "Escribe tu correo";
         newElement.style.color = "#e0f808";
         newElement.style.fontFamily = "Arial, Helvetica, sans-serif";
         verifi.appendChild(newElement);

     }else {
         let verifi = document.getElementById("verification");
         let newElement = document.createElement("h4");
         newElement.textContent = "Correo inválido";
         newElement.style.color = "#e0f808";
         newElement.style.fontFamily = "Arial, Helvetica, sans-serif";
         verifi.appendChild(newElement);
     }
}   