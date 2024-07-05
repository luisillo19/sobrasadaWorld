

// function mesActual() {
//     const meses = [
//         "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//     ];

//     const months =['January', 'February', ]
    
// }
// const now = new Date();
// const month = now.getMonth();


// const textMonth = meses[month];

// const monthDiscount = document.getElementById('textMonth');
// monthDiscount.innerHTML = textMonth;

// // que tipo de idioma tiene el navegador, insertar una verificacion 
// // detectar el idioma 

// function detectarIdioma() {
//     const idioma = navigator.language;
    
//     switch (idioma) {
//         case 'es-ES':
//             if (window.location.pathname !== '/index.html') {
//                 window.location.href = 'index.html';
//             }
//             break;
//         case 'en-EN':
//             if (window.location.pathname !== '/en.html') {
//                 window.location.href = 'en.html';
//             }
//         case 'sk-SK':
//             if (window.location.pathname !== '/sk.html') {
//                 window.location.href = 'sk.html';
//             }
//             break;
//     }
// }

// // redirigir a la página del idioma

// // Opciones de redirigir por su cuenta 
// // Si el usuario cambia de idioma, insertar una cookie, con el nombre de idioma 

// const navegador = navigator.userAgent;
// console.log(navegador);

// // nos da informacion del dispositivo desde donde navega 

// function detectarNavegador() {
//     if (navegador.indexOf('Chrome') !== -1) {
//         console.log('Estas usando Chrome');
//     }else if (navegador.indexOf('Firefox') !== -1) {
//         console.log('Estas usando firefox');
//     }else if (navegador.indexOf('Safari') !== -1) {
//         console.log('Estas usando safari');
//     }else if (navegador.indexOf('Opera') !== -1) {
//         console.log('Estas usando opera');
//     }else if (navegador.indexOf('MSIE') !== -1) {
//         console.log('Estas usando Internet Explorer');
//     }
// }
// detectarNavegador();

// const btnOrder = document.getElementById('btnDiscount');
// btnSend.addEventListener('click', () =>{
//     window.location.href = 'http:landingUno.html';
// })

// que tipo de idioma tiene el navegador, insertar en una veriable
// detectar el idioma



// **************************************************
// **************************************************

function detectarIdioma() {
    const idioma = navigator.language;
    // si la cookie no existe
    if (document.cookie === "") {
    // redirigir a la pagina de idioma al inicio
    switch (idioma) {
        case "es-ES":
            if (window.location.pathname !== "/index.html") {
                window.location.href = "index.html";
            }
            break;
        case "en-EN":
            if (window.location.pathname !== "/en.html") {
                window.location.href = "en.html";
            }
            break;
        case "sk-SK":
            if (window.location.pathname !== "/sk.html") {
                window.location.href = "sk.html";
            }
            break;
    }
}
    // si la cookie existe
    else {
        window.location.href = document.cookie.lastIndexOf("es-ES") !== -1 ? "index.html" : document.cookie.lastIndexOf("en-EN") !== -1 ? "en.html" : "sk.html";
    }
}

// buscar el mes actual y cambiar el texto dentro del id="mes"
function mesActual() {
    // Español
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    // Ingles
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    // Eslovaco
    const mesiace = [
        "Január",
        "Február",
        "Marec",
        "Apríl",
        "Máj",
        "Jún",
        "Júl",
        "August",
        "September",
        "Október",
        "November",
        "December",
    ];
    const fecha = new Date();
    const mes = fecha.getMonth();
    // si la cookie es en-EN
    if (document.cookie === "idioma=en-EN") {
        document.getElementById("mes").textContent = months[mes];
    }
    // si la cookie es sk-SK
    else if (document.cookie === "idioma=sk-SK") {
        document.getElementById("mes").textContent = mesiace[mes];
    }
    // si la cookie es es-ES
    else {
        document.getElementById("mes").textContent = meses[mes];
    }
}

// Envento para insertar cokkies
document.getElementById("nav__es").addEventListener("click", () => {
    document.cookie = `idioma=es-ES`;
});

document.getElementById("nav__en").addEventListener("click", () => {
    document.cookie = `idioma=en-EN`;
});

document.getElementById("nav__sk").addEventListener("click", () => {
    document.cookie = `idioma=sk-SK`;
});

// Zona de Control
function main() {
    detectarIdioma();
    mesActual();
}

main();
