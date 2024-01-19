//alert("Hola mundo"); dar un mensaje al usuario que esta utilizando la pagina y verificar si esta unido el js scrip
// Hacer una petición para un usuario con ID especifico
let ip=document.getElementById('ip');
let country_name=document.getElementById('country_name');
let continent_name=document.getElementById('continent_name');
let current_time=document.getElementById('current_time');

const solicitudAPI = () => {
// Asigna la función al evento load del objeto window


axios
  .get('https://salmacano.000webhostapp.com/GeoIPLocation/index.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data.country_name);
    ip.innerHTML = response.data.ip;
    country_name.innerHTML=response.data.country_name;
    continent_name.innerHTML=response.data.continent_name;
    current_time.innerHTML=response.data.current_time;

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

};
//Llama al evento load cada vez que se refresca u actualiza la pagina
//Y llama a la función solicitud API que tiene la rutina 
//de llamar a la API desde axios 
window.addEventListener('load', solicitudAPI);