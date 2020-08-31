import React from 'react';
import { useInput } from '../hooks/useInput';

const smurfForm = () => {

    const [name, setName, handleName] = useInput('');
    const [age, setAge, handleAge] = useInput('');
    const [height, setHeight, handleHeight] = useInput('');

    const resetValues = e => {
        e.preventDefault();
        setAge('');
        setHeight('');
        setName('');
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
                value={aga}
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
        </form>
    );
};

export default smurfForm;