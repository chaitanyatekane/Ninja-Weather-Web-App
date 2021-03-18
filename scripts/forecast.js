class Forecast {
    constructor(){
        this.key = 'h8Na5z4m4YBvG6hMDyRN5cHZwQAHSY1n';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';        
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);

        return { cityDets, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}


// const key = 'h8Na5z4m4YBvG6hMDyRN5cHZwQAHSY1n';
// get weather information
// const getWeather = async (id) => {
// };
// get city information
// const getCity = async (city) => { 
// };

 
