import React, { useState } from 'react';
import axios from 'axios';

const SmurfForm = (dispatch) => {

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: ''
    })

    const inputChange = e => {
        e.persist()
        let value = e.target.value
        setFormState({...formState, [e.target.name]: value})
    }

    const formSubmit = e => {
        axios
            .post('http://localhost:3333/smurfs', formState)
            .then(res => {
                setFormState({
                    name: '',
                    age: '',
                    height: ''
                });
            })
            .catch(err => console.log(err))
    };
    
    return (
        <form onSubmit={formSubmit}>
            <input
                type="text"
                name="name"
                value={formState.name}
                placeholder="Name"
                onChange={inputChange}
            />
            <input
                type="text"
                name="age"
                value={formState.age}
                placeholder='Age'
                onChange={inputChange}
            />
            <input
                type="text"
                name="height"
                value={formState.height}
                placeholder="Height"
                onChange={inputChange}
            />
            <button>Submit</button>
        </form>
    );
};

export default SmurfForm;