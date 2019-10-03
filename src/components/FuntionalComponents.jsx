import React from 'react';

//Componentes funcionales, se llaman de esta manera por que son literalmente funciones
//Los componentes de react, solo pueden recibir un objeto props datos

const FuntionalComponents = (props) => {
  return (
    <h3>Hello, {props.title} {props.name}</h3>
  );
};

export default FuntionalComponents;