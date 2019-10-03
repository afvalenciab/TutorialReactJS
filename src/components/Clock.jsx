import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  //metodos de ciclo de vida
  componentDidMount(){
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  //metodos de ciclo de vida
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;

// #1 Componente Funcional
// const Clock = (props) => {
//   return (
//     <div>
//       <h1>Hello, clock</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
// };