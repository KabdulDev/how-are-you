import React from "react";

class Resources extends React.Component {
  
  constructor(props){
      super(props);

      this.state={
          pageContent: {},
          headerContet: {}
      }
  }
  
  
    render() {
    return (
      <div>
        
        <div>
        <h1>
            Category name
        </h1>
        <h2>
            Resource
        </h2>
        </div>

      </div>
    );
  }
}

export default Resources;
