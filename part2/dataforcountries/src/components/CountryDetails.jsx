import CountryList from './CountryList'

const CountryDetails = ({countryData}) => {
    if(countryData){
        const country = countryData[0]
        const cca2 = country.cca2
        const name = country.name.common
        const capital = country.capital
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
            </div>
        )
    }
}

export default CountryDetails