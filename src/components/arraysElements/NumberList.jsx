import React from 'react';

const NumberList = (props) => {
  const numbers = props.numbers;
  const numberList = numbers.map((item, index) => {
    //Siempre se debe poner un  key unico, normalmente se utiliza el id del objeto
    //En caso de no tener un key estable, se puede utilizar el indice, pero solo en lso casos en los que no cambie el tamaño del arreglo.
    console.log(index);

    return (
      //El atributo key es necesario cuando realizamos listas de elementos
      //Este es importate para que React pueda saber que items han cambiado
      //La key siempre debe ser espcificada dentro del array(dentro del map)
      <li key={item.toString()} >{item}</li>
    );
  });

  return (
    <ul>{numberList}</ul>
  );
};

export default NumberList;