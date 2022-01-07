import { Icon } from "../interfaces";

export function getWeatherIcon(icon:string){
    let iconUrl = "";
    switch(icon){
        case "01d":
            iconUrl=Icon.The01D;
            break; 
        case "01n":
            iconUrl=Icon.The01N;
            break; 
        case "02d":
            iconUrl=Icon.The02D;
            break; 
        case "02n":
            iconUrl=Icon.The02N;
            break; 
        case "03d":
            iconUrl=Icon.The03D;
            break; 
        case "03n":
            iconUrl=Icon.The03N;
            break; 
        case "04d":
            iconUrl=Icon.The04D;
            break; 
        case "04n":
            iconUrl=Icon.The04N;
            break; 
        case "09d":
            iconUrl=Icon.The09D;
            break; 
        case "09n":
            iconUrl=Icon.The09N;
            break; 
        case "10d":
            iconUrl=Icon.The10D;
            break; 
        case "10n":
            iconUrl=Icon.The10N;
            break; 
        case "11d":
            iconUrl=Icon.The11D;
            break; 
        case "11n":
            iconUrl=Icon.The11N;
            break; 
        case "13d":
            iconUrl=Icon.The13D;
            break; 
        case "13n":
            iconUrl=Icon.The13N;
            break; 
        case "50d":
            iconUrl=Icon.The50D;
            break; 
        case "50n":
            iconUrl=Icon.The50N;
            break; 
    }
    return iconUrl;
}