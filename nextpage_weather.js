

//First api weather London
function weatherdeatils (weather) {
    console.log(weather)
    let weatherresult =  document.querySelector('.weather-details-1')
  
       //captial,region,latlng,name,flag,country codes
 
     let captial = document.createElement('p');
     captial.textContent = ` Clouds : ${weather.weather[0].description}`;
      weatherresult.append(captial);
     
     let lat = document.createElement('p');
     lat.textContent = `Latitude : ${weather.coord.lat}`;
     weatherresult.append(lat);
 
     let long = document.createElement('p');
     long.textContent = `Longtitude : ${weather.coord.lon}`;
     weatherresult.append(long);
  
     let countrycode =  document.createElement('p');
     countrycode.textContent = `Tempature : ${weather.main.temp}`;
     weatherresult.append(countrycode);
 
    let button_1 =document.createElement('button');
    button_1.textContent  = "Back";
    weatherresult.append(button_1);
 
    //styles
    button_1.style.marginLeft = "1rem";
    button_1.style.border = 'none';
    button_1.style.borderRadius = '10px';
    button_1.style.padding = '0.5rem';
    button_1.style.backgroundColor = 'lightcoral';
    button_1.style.fontFamily ="sans-serif";
    button_1.style.color = 'white'
    button_1.style.width = '6rem'
    
    weatherresult.style.fontFamily = 'sans-serif';
    weatherresult.style.textAlign = 'center';
 
   //addEvent function 
    button_1.addEventListener('click' , next_page)
 
    function next_page() {
     window.open('weather.html','_self')
   
   };
 };
 
 
  function fetchweather () {
 const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9d75b97d0166a9c15ff2d9f5f565910b'
 
 fetch(url)
   .then((response) => response.json())
   .then((data) => weatherdeatils(data))
 
 }
 fetchweather()
 
 
 //second api india weather
 
 function weatherdeatils2 (weather) {
   console.log(weather)
   let weatherresult_2 = document.querySelector('.weather-details-2')
   
   
 
   let region_2 = document.createElement('p');
     region_2.textContent = `Cloud : ${weather.weather[0].description}`;
     weatherresult_2.append(region_2);
 
     let lat_2 = document.createElement('p');
     lat_2.textContent =`Latitude : ${ weather.coord.lat}`;
     weatherresult_2.append(lat_2);
 
     let long_2 = document.createElement('p');
     long_2.textContent = `Longitiude : ${weather.coord.lat}`;
     weatherresult_2.append(long_2);
  
     let countrycode_2 =  document.createElement('p');
     countrycode_2.textContent = `Tempature : ${weather.main.temp}`;
     weatherresult_2.append(countrycode_2);
     
     let button_2 =document.createElement('button');
    button_2.textContent  = "Back";
    weatherresult_2.append(button_2);
 

   //styles
   button_2.style.marginLeft = "1rem";
   button_2.style.border = 'none';
   button_2.style.borderRadius = '10px';
   button_2.style.padding = '0.5rem';
   button_2.style.backgroundColor = 'lightcoral';
   button_2.style.fontFamily ="sans-serif";
   button_2.style.color = 'white'
   button_2.style.width = '6rem'
   
   weatherresult_2.style.fontFamily = 'sans-serif';
   weatherresult_2.style.textAlign = 'center';

  //addEvent function 
   button_2.addEventListener('click' , next_page)

   function next_page() {
    window.open('weather.html','_self')
  
  }

 }
 
 
 function fetchweather2 () {
   const url = 'https://api.openweathermap.org/data/2.5/weather?q=India&appid=9d75b97d0166a9c15ff2d9f5f565910b';
 
   fetch(url)
   .then((response) => response.json())
   .then((data) => weatherdeatils2(data));
 }
 
 fetchweather2()
 
 
 
 // thrid api africa weather
 
 
 function weatherdeatils3 (weather) {
    console.log(weather)
    let weatherresult_3 = document.querySelector('.weather-details-3')
   
    let captial_3 = document.createElement('p');
    captial_3.textContent =  `Cloud : ${weather.weather[0].description}`;
    weatherresult_3.append(captial_3);
  
    let lat_3 = document.createElement('p');
    lat_3.textContent = `Latitude :${weather.coord.lat}`;
    weatherresult_3.append(lat_3);

    let long_3 = document.createElement('p');
    long_3.textContent = `Longitude : ${weather.coord.lat}`;
    weatherresult_3.append(long_3);
  
    let countrycode_3 =  document.createElement('p');
    countrycode_3.textContent = `Tempature : ${weather.main.temp}`;
    weatherresult_3.append(countrycode_3);
 
    let button_3 =document.createElement('button');
    button_3.textContent  = "Back";
   
     weatherresult_3.append(button_3);
    
      //styles
    button_3.style.marginLeft = "1rem";
    button_3.style.border = 'none';
    button_3.style.borderRadius = '10px';
    button_3.style.padding = '0.5rem';
    button_3.style.backgroundColor = 'lightcoral';
    button_3.style.fontFamily ="sans-serif";
    button_3.style.color = 'white'
    button_3.style.width = '6rem'
    
    weatherresult_3.style.fontFamily = 'sans-serif';
    weatherresult_3.style.textAlign = 'center';
 
   //addEvent function 
    button_3.addEventListener('click' , next_page)
 
    function next_page() {
     window.open('weather.html','_self')
   
   }
 
 }
 
 
 function fetchweather3 () {
   const url = 'https://api.openweathermap.org/data/2.5/weather?q=Africa&appid=9d75b97d0166a9c15ff2d9f5f565910b';
 
   fetch(url)
   .then((response) => response.json())
   .then((data) => weatherdeatils3(data));
 }
 
 fetchweather3()
 
 