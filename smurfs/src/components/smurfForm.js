import React, { useState } from 'react';
import { axios } from 'axios';

const SmurfForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: ''
    })

    const inputChange = e => {
        
    }
    const resetValues = e => {
        e.preventDefault();
        axios
            .post("http://localhost:3333/smurfs", formState)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log("There was an error", err))
    };
    
    return (
        <form onSubmit={resetValues}>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={e => handleName(e.target.value)}
            />
            <input
                type="text"
                name="age"
                value={age}
                placeholder='Age'
                onChange={e => handleAge(e.target.value)}
            />
            <input
                type="text"
                name="height"
                value={height}
                placeholder="Height"
                onChange={e => handleHeight(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};

export default SmurfForm;