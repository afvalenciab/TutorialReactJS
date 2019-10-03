import React from 'react';
import HelloWorld from '../components/HelloWorld';
import Clock from '../components/Clock';
import FuntionalComponents from '../components/FuntionalComponents';
import ClassComponents from '../components/ClassComponents';
import Comment from '../components/commets/Comment';
import ToggleEvent from '../components/ToggleEvent';
import Greeting from '../components/Conditionals/Greeting';
import LoginControl from '../components/Conditionals/LoginControl';
import NumberList from '../components/arraysElements/NumberList';
import NameForm from '../components/controlerComponent/NameForm';
import Calculator from '../components/upstate/Calculator';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const App = () => {
  return (
    <div>
      <HelloWorld />
      <Clock />
      {/* cada atributo de una etiqueta se vuelve un atributo del objeto props */}
      <FuntionalComponents title="Componente Funcinal" name="Andres" />
      <ClassComponents title="Componente de Clase" />
      <Comment {...comment} />
      <ToggleEvent />
      <Greeting isLoggedIn={false} />
      <LoginControl />
      <NumberList numbers={[1,2,3,4,5]} />
      <NameForm />
      <Calculator />
    </div>
  );
};

export default App;