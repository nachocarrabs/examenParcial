import React from 'react'

export default function Card ({ usuarios }) {
    return (
      <div>
        <h3>Nombre y el color que elegiste:</h3>
        {
        usuarios.map((usuario, index) => (
          <div key={index} >
            <h3>{usuario.nombre} {usuario.color}</h3>
          </div>
        ))
        }
      </div>
    );
  }


