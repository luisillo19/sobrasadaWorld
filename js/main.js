
const now = new Date();
const month = now.getMonth();

const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

const textMonth = meses[month];

const monthDiscount = document.getElementById('textMonth');
monthDiscount.innerHTML = textMonth;

// que tipo de idioma tiene el navegador, insertar una verificacion 
// detectar el idioma 
const idioma = navigator.language;

// redirigir a la página del idioma
switch (idioma) {
    case 'es-ES':
        window.location.href = 'index.html';
        break;
    case 'en-EN':
        window.location.href = 'en.html';
        break;    
    case 'sk-SK':
        window.location.href = 'sk.html';
        break;
    default:
        break;
}

// Opciones de redirigir por su cuenta 
// Si el usuario cambia de idioma, insertar una cookie, con el nombre de idioma 

const navegador = navigator.userAgent;
console.log(navegador);

// nos da informacion del dispositivo desde donde navega 

function detectarNavegador() {
    if (navegador.indexOf('Chrome') !== -1) {
        console.log('Estas usando Chrome');
    }else if (navegador.indexOf('Firefox') !== -1) {
        console.log('Estas usando firefox');
    }else if (navegador.indexOf('Safari') !== -1) {
        console.log('Estas usando safari');
    }else if (navegador.indexOf('Opera') !== -1) {
        console.log('Estas usando opera');
    }else if (navegador.indexOf('MSIE') !== -1) {
        console.log('Estas usando Internet Explorer');
    }
}
detectarNavegador();

// const btnOrder = document.getElementById('btnDiscount');
// btnSend.addEventListener('click', () =>{
//     window.location.href = 'http:landingUno.html';
// })