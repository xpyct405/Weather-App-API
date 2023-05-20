// https://codepen.io/namansingh98/pen/GRYmxjX


// Request API OpenWearherMap.org
const api_key = "5d9840e44a8ae22baed51974ec1bb853";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");

async function checkWeather(city) {
  const api = await fetch(api_url + city + `&appid=${api_key}`);
  var data = await api.json();

  // console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  console.log(!Boolean(data.name));

  if (!Boolean(data.name)) {
    let changeDisplay = document.querySelector('.atention').style.display = 'block';
    setInterval(changeDisplay, 3000)
    return
  }

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " км/ч";
  document.querySelector(".pressure").innerHTML = Math.round( eval(data.main.pressure * 0.750062) ) + " мм рт. ст.";

  // Очистим содержимое input
  searchBox.value = '';
}



// Разрешим ввод только букв рус, англ, пробела и тире
// Будет перехватывать все числа при ручном вводе. 
searchBox.addEventListener('keydown', function(e) {
  if (e.key.match(/[^a-zA-ZА-Яа-яЁё' '-]/)) return e.preventDefault()
}); 

//Если ввели данные через копипаст или автозаполнение
searchBox.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё' '-]/g, "")
}) 


// console.log(searchBox.value);
// console.log(Boolean(1));

// Разрешим производить поиск при клике по Enter
searchBox.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    // console.log(document.querySelector(".city").innerHTML);
    // console.log(Boolean(document.querySelector(".city").innerHTML));

    if (!document.querySelector(".city").textContent) {
      alert(`We can't find ${searchBox.value} city! Check or retry one more time.`)
      console.log(document.querySelector(".city").textContent);
    }
    else {
      checkWeather(searchBox.value);
      // console.log(document.querySelector(".city").textContent);
    }
  }
})

// Разрешим производить поиск при клике ЛКМ по кнопке
searchBtn.addEventListener("click", () => {
  if (!document.querySelector(".city").textContent) {
    alert(`We can't find ${searchBox.value} city! Check or retry one more time.`)
    // console.log(document.querySelector(".city").textContent);
  } else {
    checkWeather(searchBox.value);   
    // console.log(document.querySelector(".city").textContent);
  }
});

// searchBox.value == '' || searchBox.value == undefined || searchBox.value == NaN || 

// Напишем функцию по чистке input=text через 3секунды
// function inputReset() {
//   searchBox.value = '';
// }



checkWeather('Tambov');



// let defaultCity = () => {
//   document.querySelector("#input").value = 'Tambov'
//   console.log('default');
// }

// window.addEventListener('load', defaultCity())

      
// let newItem = document.createElement("div");
// newItem.className = "new-item";
// document.querySelector('.parent').appendChild(newItem);