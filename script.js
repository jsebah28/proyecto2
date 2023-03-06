window.onload = function hidden() {
    document.getElementById('next_buttom_2').style.display = 'none';
    document.getElementById('next_buttom_3').style.display = 'none';
    document.getElementById('next_buttom_4').style.display = 'none';
};

function showUserApp() {
    document.getElementById('driver_mockup').style.display = 'none';
    document.getElementById('next_buttom_1').style.display = 'none';
    document.getElementById('user_mockup').style.display = 'block';
    document.getElementById('next_buttom_2').style.display = 'block';
    document.getElementById('description').innerHTML = "Permite a tus clientes pedir personalizar y conocer el valor antes de solicitar un servicio de transporte";
    document.getElementById('title_mockup').innerHTML = "App Usuario";

}

function showWhatsapp() {
    document.getElementById('user_mockup').style.display = 'none';
    document.getElementById('next_buttom_2').style.display = 'none';
    document.getElementById('whatsapp_mockup').style.display = 'block';
    document.getElementById('next_buttom_3').style.display = 'block';
    document.getElementById('description').innerHTML = "Tus usuarios pueden solicitar servicios a través de whatsapp de manera fácil y automatizada";
    document.getElementById('title_mockup').innerHTML = "Whatsapp";
}

function showCallCenter() {
    document.getElementById('whatsapp_mockup').style.display = 'none';
    document.getElementById('next_buttom_3').style.display = 'none';
    document.getElementById('call_mockup').style.display = 'block';
    document.getElementById('next_buttom_4').style.display = 'block';
    document.getElementById('description').innerHTML = "Automatizamos tu línea de call center para que con menos personal aumentes ganancias y rentabilidad";
    document.getElementById('title_mockup').innerHTML = "Call Center";
}
function showDriverApp() {
    document.getElementById('call_mockup').style.display = 'none';
    document.getElementById('next_buttom_4').style.display = 'none';
    document.getElementById('driver_mockup').style.display = 'block';
    document.getElementById('next_buttom_1').style.display = 'block';
    document.getElementById('description').innerHTML = "Recibe las peticiones más cercanas  gracias a nuestros mapas personalizados";
    document.getElementById('title_mockup').innerHTML = "Conductor";

}
