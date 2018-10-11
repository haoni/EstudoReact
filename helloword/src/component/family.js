import React from 'react';

class Family extends React.Component {
    
    constructor(props){
        super(props);

        this.props = props;
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Family;