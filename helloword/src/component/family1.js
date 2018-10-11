import React from 'react';

class Family1 extends React.Component{
    constructor (props){
        super(props);

        this.props = props;
    }

    render (){
        return (
            <div>
              <h1>{this.props.lastName}</h1>
              { React.Children.map(this.props.children, child => React.cloneElement(child, {... this.props}))}
            </div>
        );

    };
};

export default Family1;