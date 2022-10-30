import React from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { useCountries } from '../../hooks/useCountries'

const animatedComponents = makeAnimated()

function SelectCountries({ uf, setUf }) {
  const { countries } = useCountries()

  const countriesOptions = countries.map(country => ({
    value: country.code,
    label: country.name_ptbr
  }))

  const handleSelectedCountry = e => setUf(e)

  return (
    <Select
      theme={theme => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          neutral0: 'transparent',
          primary50: 'lightblue'
        }
      })}
      isFocused
      options={countriesOptions}
      isMulti={true}
      components={animatedComponents}
      closeMenuOnSelect={false}
      placeholder="Selecione um país"
      onChange={handleSelectedCountry}
      value={uf}
    />
  )
}

export default SelectCountries
