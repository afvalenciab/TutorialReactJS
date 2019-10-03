import React from 'react';

const user = {
  firstName: 'Andres Felipe',
  lastName: 'Valencia'
};

//Insertar expresiones javascript
const formatName = user => {
  return `${user.firstName} ${user.lastName}`;
};

//Utilizar jsx como expresion javascript
const getGreeting = (user) => {
  if(user) {
    return <h3>Hello, {formatName(user)} llamado desde función</h3>
  } else {
    return <h3>Hello, Stranger, llamado desde función</h3>
  }
};

const HelloWorld = () => {
  const world = 'Mundo';

  return (
    <div>
      <h1>Hello, {world}!</h1>
      <h2>Hello, {formatName(user)} </h2>
      {getGreeting(user)}
      {getGreeting()}
    </div>
  );
};

export default HelloWorld;
