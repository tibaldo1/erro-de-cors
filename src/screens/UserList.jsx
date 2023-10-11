import React, { useEffect, useState } from 'react'
import EditUser from './EditUser'
import AddUser from './AddUser'
import './UserList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function UserList() {
    const [users, setUsers]=useState([]);

    const pegaUser = async() =>{
        try {
            const resposta = await axios.get('http://127.0.0.1:8000/usuarios')
            setUsers(resposta.data)
            console.log(users)
        } catch (erros) {
            console.log(erros) 
        }
    }

    useEffect(()=>{
        pegaUser();
    }, [])

  return (
    <div>
        <h1> lista user</h1>
        <ul>
            {users.map((user)=>(
            <>
            <li>{user.nome}</li>
            <li>{user.email}</li>
            <li>{user.saldo}</li>
            </>
            ))}
            
        </ul>

        <Link to='/add'> ir para add </Link>

    </div>
  )
}
