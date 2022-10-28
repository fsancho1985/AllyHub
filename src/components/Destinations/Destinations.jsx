import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useCities } from '../../hooks/useCities'

import { useCountries } from '../../hooks/useCountries'

import styles from './Destinations.module.css'

const animatedComponents = makeAnimated()

function Destinations() {
  const { countries } = useCountries()
  const { cities } = useCities()

  const countriesOptions = countries.map(country => ({
    value: country.code,
    label: country.name_ptbr,
  }))

  const citiesOptions = cities.map(city => ({
    value: city.country_code,
    label: city.name_ptbr,
  }))

  return (
    <div>
      <h2>Destinations</h2>
      <Select
        options={countriesOptions}
        isMulti={true}
        components={animatedComponents}
        closeMenuOnSelect={false}
        placeholder='Selecione um país'
        />
      <Select
        options={citiesOptions}
        isMulti={true}
        components={animatedComponents}
        closeMenuOnSelect={false}
        placeholder='Selecione uma cidade'
      />
    </div>
  )
}

export default Destinations
