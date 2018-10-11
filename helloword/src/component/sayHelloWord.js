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

class textComponent extends React.Component {

    constructor (props) {
        super(props)

        this.props = props;
    }

    render(){
        return (
            <div>
                <input type="text" name={this.props.name} />
            </div>
        );
    }
}

export default sayHelloWordComponent
export {textComponent}