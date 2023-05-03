// https://codepen.io/namansingh98/pen/GRYmxjX

// Request API OpenWearherMao.org
const api_key = "5d9840e44a8ae22baed51974ec1bb853";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");
async function checkWeather(city) {
  const api = await fetch(api_url + city + `&appid=${api_key}`);
  var data = await api.json();


  // console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " км/ч";
  document.querySelector(".pressure").innerHTML = Math.round( eval(data.main.pressure * 0.750062) ) + " мм рт. ст.";

}



// Разрешим ввод только букв рус, англ и пробела
document.querySelector("#input").addEventListener('keydown', function(e) {
  if (e.key.match(/[^a-zA-ZА-Яа-яЁё' ']/)) return e.preventDefault()
}); // Будет перехватывать все числа при ручном вводе. 

document.querySelector("#input").addEventListener('input', function(e) {
  this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё' ']/g, "")
}) //Если ввели данные через копипаст или автозаполнение




searchBtn.addEventListener("click", () => {
  if (searchBox.value == '' || searchBox.value == undefined || searchBox.value == NaN  ) {
    console.log('searchBox.value = эт чё');
  } else {
    checkWeather(searchBox.value);
    
  }
// Reset input.value
// searchBox.value = '';
});


// searchBox.addEventListener('keydown', (event) => {
//   if (event.key == 'Enter') 
//   checkWeather(searchBox.value);
//   // searchBox.value = '';
// })


checkWeather('Tambov');



// let defaultCity = () => {
//   document.querySelector("#input").value = 'Tambov'
//   console.log('default');
// }

// window.addEventListener('load', defaultCity())

      