import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

// import './Person.css'

// const StyleDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center; 

//     @media (min-width:500px){      
//             width: 450px;
//        }
//     `;

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focs();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                    
                <p onClick={this.props.click} >
                    I'm a {this.props.name} and I'm a {this.props.age} years!
                </p >
                <p key="i2">{this.props.children}</p>
                <input key="i3"
                    // ref={(inputEl) => {this.inputElement = inpuntEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default Person;