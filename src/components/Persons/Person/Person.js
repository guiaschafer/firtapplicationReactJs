import React, {Component} from 'react';
import styled from 'styled-components'

// import './Person.css'

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center; 

    @media (min-width:500px){      
            width: 450px;
       }
    `;

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        // const style = {
        //     '@media (min-width: 500px)': {
        //         width: '450px'
        //     }
        // };

        return (
            // <div className="Person" style={style}>
            <StyleDiv>
                <p onClick={this.props.click} > I'm a {this.props.name} and I'm a {this.props.age} years!</p >
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} />
            </StyleDiv>
        )
    }
}

export default Person;