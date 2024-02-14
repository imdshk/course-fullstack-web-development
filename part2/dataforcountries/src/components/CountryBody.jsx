import CountryList from './CountryList'
import CountryDetails from './CountryDetails'

const CountryBody = ({filteredCountryData, onClick, weatherData}) => {
    if(filteredCountryData){
        if(filteredCountryData.length > 1) {
            return (
                <>
                    {filteredCountryData.map((country) => 
                        <CountryList 
                            key={country.cca2} 
                            item={country.name.common} 
                            onClick={() => onClick(country.cca2)} 
                        />
                    )}
                </>
            )
        }
        return (
            <CountryDetails countryData={filteredCountryData} weatherData={weatherData} />
        )
    }
}

export default CountryBody