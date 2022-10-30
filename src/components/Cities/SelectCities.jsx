import { useState } from 'react'

import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { useCities } from '../../hooks/useCities'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: 100,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#666262',
          backgroundColor: '#cdb7b7'
        }
      }
    }
  }
})

function SelectCities({ uf }) {
  const { cities } = useCities()

  const [selectedCities, setSelectedCities] = useState([])

  const citiesOptions = cities.reduce((acc, elem) => {
    const filteredCities = uf.filter(u => u.value === elem.country_code)
    return filteredCities?.length
      ? [
          ...acc,
          { value: elem.id, code: elem.country_code, label: elem.name_ptbr, url: elem.url1 }
        ]
      : acc
  }, [])

  const handleSelectCities = e => setSelectedCities(e)

  const handleData = (e) => {
    e.preventDefault()
    
    if(selectedCities == '') {
      alert('Você deve escolher ao menos um  país e uma cidade para viajar!')
    }else {
        const customerCitiesChosen = selectedCities.map((city) => city.label)
    alert(`Parabens você escolheu as seguintes cidades: ${customerCitiesChosen}`)
      }
    }

  return (
    <div>
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
        <ThemeProvider theme={theme}>
        <Button
          color="inherit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ borderRadius: 3 }}
          onClick={handleData}
        >
          Enviar
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default SelectCities
