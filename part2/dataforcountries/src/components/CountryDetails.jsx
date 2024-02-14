const CountryDetails = ({countryData, weatherData}) => {
    if(countryData && weatherData){
        const country = countryData[0]
        const cca2 = country.cca2
        const name = country.name.common
        const capital = country.capital[0]
        const area = country.area
        const languages = Object.values(country.languages)
        const flag = country.flags.png
        return (
            <div>
                <h1>{name}</h1>
                capital {capital}
                <br />
                area {area}
                <div>
                    <h3>languages:</h3>
                    <ul>
                        {languages.map((language) => 
                            <li key={language}>{language}</li>
                        )}
                    </ul>
                </div>
                <img src={flag} />
                <h3>weather in {capital}</h3>
                temperature {weatherData.temp} Celcius
                <br />
                <img src={weatherData.icon} />
                <br />
                wind {weatherData.wind} km/s
            </div>
        )
    }
}

export default CountryDetails