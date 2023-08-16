import {React, useState } from 'react'

const Form = ({onAddUser}) => {

    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [errorColor, setErrorColor] = useState("");

    
    
    const handleSubmit = (e) => {

        e.preventDefault();
    
        setErrorNombre("");
        setErrorColor("");
    
        if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
          setErrorNombre(
            'Por favor chequea que la información sea correcta, El nombre debe tener al menos 3 caracteres y no debe comenzar con espacios en blanco.'
          );
          return;
        }
    
        if (color.length < 6) {
          setErrorColor('Por favor chequea que la información sea correcta, el color debe tener al menos 6 caracteres.');
          return;
        } 

    
        if (nombre && color) {
            onAddUser({nombre, color})
            setNombre("");
            setColor("");
        }

      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errorNombre && <p style={{ color: 'red' }}>{errorNombre}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Tipea un color de 6 caracteres"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            {errorColor && <p style={{ color: 'red' }}>{errorColor}</p>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      );
    };
    
    export default Form;