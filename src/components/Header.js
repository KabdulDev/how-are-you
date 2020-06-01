import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Test",
    };

    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle = (Heading) => {
    this.setState({ title: Heading });
  };

  render() {
    return (
      <div className="Header">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Header;
