import React from 'react';
import Greeting from './Greeting';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

class LoginControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    // if(isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {isLoggedIn? 
          (<LogoutButton onClick={this.handleLogoutClick} />) 
          :
          (<LoginButton onClick={this.handleLoginClick} />)
        }
      </div>
    );
  }
}

export default LoginControl;