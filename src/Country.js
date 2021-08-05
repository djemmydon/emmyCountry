import React, { useState, useEffect } from 'react'
import './country.css'
const url = 'https://restcountries.eu/rest/v2/all'
function Country() {
    const [countries, setCountries] = useState([])
    const [input, setInput] = useState('')
    const [output, setOutput] = useState([])


    const fetchCountry = async () => {
        const repsponse = await fetch(url)
        const countries = await repsponse.json()
        setCountries(countries)
    }
    useEffect(() => {
        fetchCountry()
           
    }, [])
 
 


    function Filtereing() { countries.filter(val => {
        if (val.name.toLowerCase().includes(input.toLowerCase())) {
            setOutput(output => [...output, val])
        
        }
    })}
    useEffect(() => {
         
            Filtereing()

    }, [input, output])

    return (
        <div className="count">
            <h1>COUNTRY</h1>
           <form action="">
               <input type="text" placeholder='Search' onChange={e=>setInput(e.target.value)}/>
           </form>
           
            <div className='grid'>

                {output.map((country,index) => {
                    const {name, flag, population, region, capital } = country
                    return <article key={index}>
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
