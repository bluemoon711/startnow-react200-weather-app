import React from 'react';

export default class CityEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityname: '',
            coord: '',
            temperature: '',
            pressure: '',
            humidity:'',
            lowest_temperature: '',
            highest_temperature:'',
            wind:''
        }
    }
    render() {
        const { city } = this.props;         
        if (!!city) {
                this.state.cityname = city.name;
                this.state.lat = city.coord.lat;
                this.state.lon = city.coord.lon;
                this.state.temperature = city.main.temp;
                this.state.pressure = city.main.pressure;
                this.state.humidity =  city.main.humidity;
                this.state.lowest_temperature = city.main.temp_min;
                this.state.highest_temperature = city.main.temp_max; 
                this.state.wind = city.wind.speed;
        }
        
        return (
            <div className='card border-primary mb-3'>
                <div className='card-header bg-info'>City Information</div>
                <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-12 mb-5'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <h1 className='text-center' href='#' id='name'>{this.state.cityname}</h1>
                                    <p className='text-sm-center' href='#' id='coord'>Lat/Long: {this.state.lat},{this.state.lon}</p> 
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <p className='text-sm-left' style={{width: 120}}>Temperature (F)</p>
                                    <p className='cityweather' href='#' id='temperature'>
                                     {this.state.temperature}F
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <p className='card-text'>Pressure</p>
                                    <p className='cityweather' href='#' id='pressure'>
                                    {this.state.pressure} 
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <p className='card-text'>Humidity</p>
                                    <p className='cityweather' href='#' id='humidity'>
                                    {this.state.humidity}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <p className='card-text'style={{width: 120}}>Lowest Temperature (F)</p>
                                    <p className='cityweather' href='#' id='lowest_temperature'>
                                    {this.state.lowest_temperature}F
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <p className='card-text'style={{width: 120}}>Highest Temperature (F)</p>
                                    <p className='cityweather' href='#' id='highest_temperature'>
                                    {this.state.highest_temperature}F 
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='card'>
                                    <div className='card-body'>
                                    <p className='card-text'style={{width: 120}}>Wind Speed</p>
                                    <p className='cityweather' href='#' id='wind'>
                                    {this.state.wind} 
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )};
}