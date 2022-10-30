import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { PatternFormat } from 'react-number-format'

import styles from './Register.module.css'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')

  const handleName = e => setName(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handlePhone = e => setPhone(e.target.value)
  const handleCpf = e => setCpf(e.target.value)

  return (
    <div className={styles.register}>
      <h1>Personal Data</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: 500 , boxShadow: 3}, 
          "& input":{fontWeight:'bold'}
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fontWeight="bold"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
          placeholder="Type your name"
          value={name}
          onChange={handleName}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          required
          placeholder="Type your e-mail"
          value={email}
          onChange={handleEmail}
        />
        <PatternFormat
          label="Phone"
          required
          format="(##) #####-####"
          customInput={TextField}
          mask="_"
          value={phone}
          onChange={handlePhone}
        />
        <PatternFormat
          label="CPF"
          required
          format="###.###.###-##"
          customInput={TextField}
          mask="_"
          value={cpf}
          onChange={handleCpf}
        />
      </Box>
    </div>
  )
}

export default Register
