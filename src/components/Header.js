import React from "react";
import '../siteDesign.css'
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
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
