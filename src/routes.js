import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './screens/UserList'
import AddUser from './screens/AddUser'
import EditUser from './screens/EditUser'

export default function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UserList/>}/>
            <Route path='/add' element={<AddUser/>}/>
            <Route path='/edit/{id}' element={<EditUser/>}/>
        </Routes>
    </BrowserRouter>
    )
}
