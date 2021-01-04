const cityName = document.getElementById("cityName");
const search = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const middle_layer = document.querySelector(".middle_layer");


const getInfo = async(e) =>{
    e.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "")
    {
        city_name.innerText = "Please write the city name before search";
        middle_layer.classList.add("data-hide");

    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=e67044cc7ab6f696ada70cc0c4a9bb46&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerHTML = arrData[0].main.temp;
            middle_layer.classList.remove("data-hide");
            
            // condition to check weather is sunny or cloud
            tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood == "Clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood == "Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
        }

        catch{
            city_name.innerText = "Please enter the city name properly";
            middle_layer.classList.add("data-hide");
        }

    }
}

search.addEventListener("click",getInfo);

