import React from "react"

class sayHelloWordComponent extends React.Component{

    constructor (props) {
        super(props)

        this.props = props;
    };

    render(){
        return (
            <h1>{this.props.Value}</h1>
        );
    }
    
} 

export default sayHelloWordComponent