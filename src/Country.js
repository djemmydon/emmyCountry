import React, { useState, useEffect } from 'react'
import './country.css'
const url = 'https://restcountries.eu/rest/v2/all'
function Country() {
    const [countries, setCountries] = useState([])


    const fetchCountry = async () => {
        const repsonse = await fetch(url)
        const countries = await repsonse.json()
        setCountries(countries)
    }
    useEffect(() => {
        fetchCountry()

    }, [])

    return (
        <div className="count">
            <h1>COUNTRY</h1>
            <div className='grid'>

                {countries.map((country) => {
                    const { numericCode, name, flag, population, region, capital } = country
                    return <article key={numericCode}>
                        <div>

                            <div className="particle">
                                <img src={flag} alt="" />
                                <h3>{name}</h3>
                                <h4>Population: <span>{population}</span> </h4>
                                <h4>Capital: <span>{capital}</span> </h4>
                                <h4>Region: <span>{region} </span> </h4>
                                <h4>Capital: <span>{capital} </span></h4>
                            </div>
                        </div>
                    </article>

                })}
            </div>
        </div>
    )
}

export default Country