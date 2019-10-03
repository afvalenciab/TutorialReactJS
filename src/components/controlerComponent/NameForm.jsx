import React from 'react';

class NameForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
      fruit: 'coconut'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.type);
    const value = event.target.type === 'select-one'?
      event.target.value : event.target.value.toUpperCase();

    const name = event.target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert(`A name was submmited: ${this.state.value}
    and Your favorite flavor is: ${this.state.fruit}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="value" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <select name="fruit" value={this.state.fruit} onChange={this.handleChange}>
          <option value="Grape">Grape</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default NameForm;