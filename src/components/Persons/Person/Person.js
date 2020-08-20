import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import classes from './Person.css';


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
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click} >
                    I'm a {this.props.name} and I'm a {this.props.age} years!
                </p >
                <p key="i2">{this.props.children}</p>
                <input key="i3"
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

export default withClass(Person, classes.Person);