import React, { useState, useEffect } from 'react'
import './country.css'
const url = 'https://restcountries.eu/rest/v2/all'
function Country() {
    const [countries, setCountries] = useState([])
    const [input, setInput] = useState('')
    const [output, setOutput] = useState([])
    const [modal, setModal] = useState(false)

    const getModal = () => {
        setModal(!modal)
    }


    const fetchCountry = async () => {
        const repsonse = await fetch(url)
        const countries = await repsonse.json()
        setCountries(countries)
    }
    useEffect(() => {
        fetchCountry()
           
    }, [])
 
    useEffect(() => {
         setOutput([])
        countries.filter(val=>{
            if(val.name.toLowerCase().includes(input.toLowerCase())){
                setOutput(output=>[...output, val])
            }
        })

        
         
    }, [input, output])

    return (
        <div className="count">
            <h1>COUNTRY</h1>
           <form action="">
               <input type="text" placeholder='Search' onChange={e=>setInput(e.target.value)}/>
           </form>
           
            <div className='grid'>

                {output.map((country) => {
                    const { numericCode, name, flag, population, region, capital } = country
                    return <article key={numericCode}>
                        <div>

                            <div className="particle  " >
                                <img src={flag} alt="" />
                                <h3>{name}</h3>
                                <h4>Population: <span>{population}</span> </h4>
                                <h4>Capital: <span>{capital}</span> </h4>
                                <h4>Region: <span>{region} </span> </h4>
                                <h4>Capital: <span>{capital} </span></h4>
                                <button onClick={getModal}>Check</button>
                            </div>
                        </div>
                                {modal &&(
                                        <div className="pop-up  onClick={getModal}">
                            <div className="particle">
                                <img src={flag} alt="" />
                                <h3>{name}</h3>
                                <h4>Population: <span>{population}</span> </h4>
                                <h4>Capital: <span>{capital}</span> </h4>
                                <h4>Region: <span>{region} </span> </h4>
                                <h4>Capital: <span>{capital} </span></h4>
                            </div>
                        </div>
                                )}
                    
                        
                    </article>

                })}
            </div>
        </div>
    )
}

export default Country
