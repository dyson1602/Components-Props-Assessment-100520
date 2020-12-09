import React from "react";

class Header extends React.Component {

  message = () => {
    return this.props.text
  }

  render() {
    return <h1>{ this.message() }</h1>;
  }
}

export default Header;
