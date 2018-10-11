import React from "react"

class SayHelloWordComponent extends React.Component{

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

class TextComponent extends React.Component {

    constructor (props) {
        super(props)

        this.props = props;
    }

    render(){
        return (
            <div>
                <input type="text" name={this.props.name} value={this.props.value}/>
            </div>
        );
    }
}

export { TextComponent };
export default SayHelloWordComponent;