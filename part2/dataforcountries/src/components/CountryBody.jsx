import CountryList from './CountryList'
import CountryDetails from './CountryDetails'

const CountryBody = ({filteredCountryData}) => {
    if(filteredCountryData){
        if(filteredCountryData.length > 1) {
            return (
                <>
                    {filteredCountryData.map((country) => 
                        <CountryList key={country.cca2} item={country.name.common}/>
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