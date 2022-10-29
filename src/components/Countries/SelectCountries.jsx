import React, { useState } from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'


import { useCountries } from '../../hooks/useCountries'


const animatedComponents = makeAnimated()

function SelectCountries() {
  const { countries } = useCountries()

  // const [selectedCountry, setSelectedCountry] = useState([])

  const countriesOptions = countries.map(country => ({
    value: country.code,
    label: country.name_ptbr,
  }))


  return (
        <Select
        options={countriesOptions}
        isMulti={true}
        components={animatedComponents}
        closeMenuOnSelect={false}
        placeholder='Selecione um país'
        // onChange={}
        />
  )
}

export default SelectCountries
