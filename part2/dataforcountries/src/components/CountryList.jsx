const CountryList = ({item, onClick}) => {
    if(item){
        return (
            <>
                {item}
                <button type="submit" onClick={onClick}>show</button>
                <br />
            </>
        )
    }
}

export default CountryList