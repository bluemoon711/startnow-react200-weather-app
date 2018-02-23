
const axios = require('axios');

export function updateSearchInput(input) {
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { input }
    };
}

export function getWeather(input) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ input + '&appid=d652468a783bd224807fcb387a7698cb' +'&units=imperial';
    return {
        type: 'GET_WEATHER',
        payload: axios.get(url)  
    };
}

export function pending(getWeather){
    return {
        type: 'GET_WEATHER_PENDING'
    };
}

export function fulfilled(getWeather) {
    return {
        type: 'GET_WEATHER_FULFILLED',
        payload: getWeather(input)
    }
}

export function rejected(getWeather) {
    return {
        type: 'GET_WEATHER_REJECTED',
        error: true
    };
}
