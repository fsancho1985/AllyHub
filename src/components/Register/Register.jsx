import React from 'react'

import styles from './Register.module.css'

function Register() {
  return (
    <div>
      <h2>Dados Pessoais</h2>
      <form className={styles.form}>
        <label htmlFor="">
          <span>Name</span>
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="displayName"
            required
            placeholder="Type your name"
          />
        </label>
        <label htmlFor="">
          <span>E-mail</span>
          <input
            type="email"
            name="displayEmail"
            required
            placeholder="Type your e-mail"
          />
        </label>
        <label htmlFor="">
          <span>Telefone</span>
          <input
            type="number"
            name="displayTelefone"
            required
            placeholder="Type your phone number"
          />
        </label>
        <label htmlFor="">
          <span>CPF</span>
          <input
            type="number"
            name="displayCPF"
            required
            placeholder="Type your CPF"
          />
        </label>
      </form>
    </div>
  )
}

export default Register
