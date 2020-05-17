import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: "Test"
        }
    }

    updateTitle = (Heading) =>{
        this.setState({ title: Heading})
    }

    render () {
    
    return (
        
        <div className = "Header">

            <p> 
                {this.state.title}
            </p>
            


        </div>
    );


}
}

export default Header;