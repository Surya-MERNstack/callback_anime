

// window.addEventListener('load', () => {
//   const loader = document.querySelector('.loader')

//   loader.classList.add('loader-hidden');

//   loader.addEventListener('trans' , () => {
//     document.body.removeChild('loader')
//   })
// })

//First api weather London
 function weatherdeatils (weather) {

   let weatherresult =  document.querySelector('.weather-details-1')

      //captial,region,latlng,name,flag,country codes

    let lat = document.createElement('p');
    lat.textContent = `Captial : ${'United kingdom'}`;
    weatherresult.append(lat);

    let captial = document.createElement('p');
    captial.textContent = ` Region : ${'Europe'}`;
     weatherresult.append(captial);

    let region = document.createElement('p');
    region.textContent = `CountryName : ${weather.name}`;
    weatherresult.append(region);
    
 
    let countrycode =  document.createElement('p');
    countrycode.textContent = `CounrtyCode : ${weather.sys.country}`;
    weatherresult.append(countrycode);

   let button_1 =document.createElement('button');
   button_1.textContent  = "Check Weather";
   weatherresult.append(button_1);
  
  //styles
   button_1.style.marginLeft = "1rem";
   button_1.style.border = 'none';
   button_1.style.borderRadius = '10px';
   button_1.style.padding = '0.5rem';
   button_1.style.backgroundColor = 'rgb(194, 139, 58)';
   button_1.style.fontFamily ="sans-serif";
   button_1.style.color = 'white'
   button_1.style.fontWeight = '600'
   
   weatherresult.style.fontFamily = 'sans-serif';
   weatherresult.style.textAlign = 'center';

  //addEvent function 
   button_1.addEventListener('click' , next_page)

   function next_page() {
    window.open('nextpage_weather.html','_self')
  
  }
 }
 


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
  
    let lat_2 = document.createElement('p');
    lat_2.textContent = `Capital: ${'New Delhi'}`;
    weatherresult_2.append(lat_2);


   let region_2 = document.createElement('p');
    region_2.textContent = `Region : Asia`;
    weatherresult_2.append(region_2);

   let captial_2 = document.createElement('p');
    captial_2.textContent = `CountryName: ${weather.name}`
    weatherresult_2.append(captial_2)

    let countrycode_2 =  document.createElement('p');
    countrycode_2.textContent = `CounrtyCode: ${weather.sys.country}`;
    weatherresult_2.append(countrycode_2);
    
    let button_2 =document.createElement('button');
   button_2.textContent  = "Check Weather";
   weatherresult_2.append(button_2);

   //style
   button_2.style.marginLeft = "1rem";
   button_2.style.border = 'none';
   button_2.style.borderRadius = '10px';
   button_2.style.padding = '0.5rem';
   button_2.style.backgroundColor = 'rgb(194, 139, 58)';
   button_2.style.fontFamily ="sans-serif";
   button_2.style.color = 'white';
   button_2.style.fontWeight = '600';

  weatherresult_2.style.textAlign = "center";
  weatherresult_2.style.fontFamily = 'sans-serif';

  button_2.addEventListener('click' , next_page)

  function next_page() {
   window.open('nextpage_weather.html','_self')
 
 }
}


function fetchweather2 () {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Republic%20of%20India&appid=9d75b97d0166a9c15ff2d9f5f565910b';

  fetch(url)
  .then((response) => response.json())
  .then((data) => weatherdeatils2(data));
}

fetchweather2()



// thrid api africa weather


function weatherdeatils3 (weather) {
  console.log(weather)
  let weatherresult_3 = document.querySelector('.weather-details-3')
   
  let lat_3 = document.createElement('p');
  lat_3.textContent = `Capital: ${'Pretoria'}`;
  weatherresult_3.append(lat_3);

  let captial_3 = document.createElement('p');
  captial_3.textContent =  `Region: ${weather.name}`;
  weatherresult_3.append(captial_3)
 
  let region_3 = document.createElement('p');
  region_3.textContent = `Region: ${"Europe"}`;
  weatherresult_3.append(region_3);

  let countrycode_3 =  document.createElement('p');
  countrycode_3.textContent = `CounrtyCode: ${'ZAF'}`;
  weatherresult_3.append(countrycode_3);

  let button_3 =document.createElement('button');
  button_3.textContent  = "Check Weather";
  weatherresult_3.append(button_3);
   
  
   //style
   button_3.style.marginLeft = "1rem";
   button_3.style.border = 'none';
   button_3.style.borderRadius = '10px';
   button_3.style.padding = '0.5rem';
   button_3.style.backgroundColor = 'rgb(194, 139, 58)';
   button_3.style.fontFamily ="sans-serif";
   button_3.style.color = 'white'
   button_3.style.fontWeight ='600' 


  weatherresult_3.style.textAlign = "center";
  weatherresult_3.style.fontFamily = 'sans-serif';

  button_3.addEventListener('click' , next_page)

  function next_page() {
   window.open('nextpage_weather.html','_self')
 
 }

}


function fetchweather3 () {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Africa&appid=9d75b97d0166a9c15ff2d9f5f565910b';

  fetch(url)
  .then((response) => response.json())
  .then((data) => weatherdeatils3(data));
}

fetchweather3()



//page loder
