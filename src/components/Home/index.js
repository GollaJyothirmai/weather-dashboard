import './index.css'

import {Component} from 'react'

class Home extends Component {
  state = {
    weatherData: [],
    city: 'Hyderabad',
  }

  componentDidMount() {
    this.getData()
  }

  getUpdatedData = data => ({
    Temperature: data.current.temp_c,
    Humidity: data.current.humidity,
    WindSpeed: data.current.wind_kph,
    Condition: data.current.condition.text,
    Icon: data.current.condition.icon,
  })

  getData = async () => {
    const {city} = this.state
    const API_KEY = '9658481cd6e34c9da3162256243011'
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const updatedData = this.getUpdatedData(data)

    console.log(updatedData)
    this.setState({weatherData: updatedData})
  }

  onChangeInput = event => {
    this.setState({city: event.target.value})
  }

  render() {
    const {city, weatherData} = this.state
    console.log(weatherData)
    return (
      <div className="home-container">
        <div className="weather-card">
          <h1 className="weather-heading">Weather Dashboard</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Enter city name"
              className="search-input"
              value={city}
              onChange={this.onChangeInput}
            />
            <button
              type="button"
              className="search-btn"
              onClick={this.onClickSearchBtn}
            >
              Search
            </button>
          </div>
          <div className="fav-section">
            <button className="fav-btn">Switch to favourites</button>
            <h1 className="weather-heading">Favorite Cities :</h1>
            <p>No favorite cities yet</p>
          </div>
          <div className="weather-section">
            <p className="condition">
              Temperature : {weatherData.Temperature} C
            </p>
            <p className="condition">Humidity : {weatherData.Humidity} </p>
            <p className="condition">
              Wind Speed : {weatherData.WindSpeed} kph{' '}
            </p>
            <p className="condition">Condition : {weatherData.Condition} </p>
            <img src={weatherData.Icon} />
          </div>
          <button className="save">Save</button>
        </div>
      </div>
    )
  }
}
export default Home
