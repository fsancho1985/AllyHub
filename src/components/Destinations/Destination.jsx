import React, { useState } from 'react'

import SelectCountries from '../Countries/SelectCountries'
import SelectCities from '../Cities/SelectCities'

import styles from './Destination.module.css'

function Destination() {

  const [selectedCountry, setSelectedCountry] = useState([])

  return (
    <div className={styles.container}>
      <h1>Choose your Destination</h1>
      <SelectCountries uf={selectedCountry} setUf={setSelectedCountry}/>
      <SelectCities uf={selectedCountry}/>
    </div>
  )
}

export default Destination