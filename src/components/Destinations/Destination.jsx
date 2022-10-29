import React from 'react'

import SelectCountries from '../Countries/SelectCountries'
import SelectCities from '../Cities/SelectCities'

import styles from './Destination.module.css'

function Destination() {
  return (
    <div className={styles.container}>
      <h1>Choose your Destination</h1>
      <SelectCountries />
      <SelectCities />
    </div>
  )
}

export default Destination