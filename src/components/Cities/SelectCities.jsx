import { useCities } from '../../hooks/useCities'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

function SelectCities() {
  
  const { cities } = useCities()

  const citiesOptions = cities.map(city => ({
    value: city.country_code,
    label: city.name_ptbr,
  }))
  
  return (
    <Select
        options={citiesOptions}
        // value={selectedOptionCountry}
        isMulti={true}
        components={animatedComponents}
        closeMenuOnSelect={false}
        placeholder='Selecione uma cidade'
      />
  )
}

export default SelectCities