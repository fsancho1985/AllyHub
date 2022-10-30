import { useState } from 'react'

import { useCities } from '../../hooks/useCities'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

function SelectCities({ uf }) {
  const { cities } = useCities()

  const [selectedCities, setSelectedCities] = useState([])

  const citiesOptions = cities.reduce((acc, elem) => {
    const filteredCities = uf.filter(p => p.value === elem.country_code)
    return filteredCities?.length
      ? [
          ...acc,
          { value: elem.id, code: elem.country_code, label: elem.name_ptbr }
        ]
      : acc
  }, [])

  const handleSelectCities = e => setSelectedCities(e)

  return (
    <>
      {!uf.length ? null : (
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
          options={citiesOptions}
          isMulti={true}
          components={animatedComponents}
          closeMenuOnSelect={false}
          onChange={handleSelectCities}
          value={selectedCities}
          placeholder="Selecione uma cidade"
        />
      )}
    </>
  )
}

export default SelectCities
