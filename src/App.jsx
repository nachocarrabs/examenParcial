import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {

  const [usuarios,setUsuarios] = useState([])


  const addUser = (user)=> {
    setUsuarios([...usuarios, user]);
  }

  return (
    <>
      <div>
        <h2>Registro de colores:</h2>
        <Form onAddUser={addUser}/>
        <Card usuarios={usuarios} />
      </div>
       
    </>
  )
}

export default App
