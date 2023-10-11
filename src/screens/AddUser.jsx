import axios from 'axios'
import React, { useState } from 'react'

export default function AddUser() {
  const [cpf, setCpf] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [saldo, setSaldo] = useState(0)

const criaUser = () =>{ 
  axios.post('http://127.0.0.1:8000/usuarios?_token=XyZo62l8DTz7VriBBIO42H5Q6frvcDV6M31oJtTU', {
    cpf, 
    nome,
    email,
    senha,
    saldo
  }).then(response=>{
    console.log(response.data)
  })
}

  console.log(nome)
  return (
    <div>
      <label>cpf</label>
      <input type='text'  onChange={(texto)=>{setCpf(texto.target.value)}}/>
      <label>nome</label>
      <input type='text'  onChange={(texto)=>{setNome(texto.target.value)}}/>
      <label>email</label> 
      <input type='email'  onChange={(texto)=>{setEmail(texto.target.value)}}/>
      <label>senha</label> 
      <input type='password' onChange={(texto)=>{setSenha(texto.target.value)}}/>
      <label>saldo</label>
      <input type='text' disabled/> 
      <button onClick={()=>{criaUser()}}>salvar usuario</button>
    </div>
  )
}
