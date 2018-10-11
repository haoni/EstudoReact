import React from 'react';
import Person from './person';

class Family extends React.Component {


    render(){
        return (
            <div>
                <Person name="Haoni" lastName="Hashimoto"/>
                <Person name="Andrey" lastName="Hashimoto"/> 
                <Person name="Haisa" lastName="Hashimoto"/> 
            </div>
        );
    }
}

export default Family;