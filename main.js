let quote = document.querySelector ("#quote");
let form = document.querySelector("form");
let input = document.querySelector("input");
let temp = document.querySelector(".display-1");
let city = document.querySelector(".display-2");
let icon = document.querySelector("img");
let p = document.querySelector("p");
let card  = document.querySelector("#weather-card");

async  function fetchQuote (){
    const response = await fetch("https://quotable.io/random");
    const data =  await response.json();
    console.log(data);
    quote.innerText = data.content + " - " + data.author;
 }
 
 fetchQuote()


 setInterval(() => {
    fetchQuote();
 },10000);

//  fetch wearther


const fetchFeather = async (e) =>{
   e.preventDefault();
   
  try{
   const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes`);
   const data = await response.json()
   temp.innerText = data.current.temp_c;
       city.innerText = data.location.name;
       icon.setAttribute("src", data.current.condition.icon);
       p.innerText = data.current.condition.text;
       card.className = "card rounded-0 p-3 shadow";
  }catch(error) {
   window.alert("Please Enter Valid City Name");
  }
  
  form.reset();
  fetchQuote();
   
};



form.addEventListener("submit" , fetchFeather)

    

