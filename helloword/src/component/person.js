import React from 'react'

class Person extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <div><strong>{this.props.lastName}</strong> {this.props.name} </div>
        );
    };

};

export default Person;