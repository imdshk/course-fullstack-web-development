import CountryList from './CountryList'
import CountryDetails from './CountryDetails'

const CountryBody = ({filteredCountryData, onClick}) => {
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
            <CountryDetails countryData={filteredCountryData} />
        )
    }
}

export default CountryBody