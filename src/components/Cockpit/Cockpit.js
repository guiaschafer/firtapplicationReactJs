import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')

        //HttpRequest...
        const timer = setTimeout(() => {
            alert('Saved data on cloud!')
        }, 1000)
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work')
        }
    }, [])

    const assignedclasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedclasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedclasses.push(classes.bold);
    }
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default React.memo(Cockpit);