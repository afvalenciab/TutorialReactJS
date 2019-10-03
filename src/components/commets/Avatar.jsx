import React from 'react';

//Cambiamos los nombre de la variable user en vez de author
//Se recomienda poner nombres pesnados por parametro y no por contexto
const Avatar = props => {
  return (
    <img
      className='Avatar'
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
};

export default Avatar;
