const button=document.getElementById("search-Button");
const input=document.getElementById("city-input");
const cityName=document.getElementById("city-Name");
const cityTime=document.getElementById("city-Time");
const cityTemp=document.getElementById("city-Temp");

async function getData(cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=b3ff91ad6f8047f9a9343051260605&q=${cityName}&aqi=yes`);
    return await promise.json();
}
button.addEventListener("click",async() =>{
    const value=(input.value);
    const result= await getData(value);
    cityName.innerText=`${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText=result.location.localtime;
    cityTemp.innerText = `Temperature: ${result.current.temp_c}°C`;
})