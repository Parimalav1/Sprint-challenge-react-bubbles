import React, { useState } from 'react';
import axioswithAuth from '../utils/axioswithAuth';
import { useHistory } from 'react-router-dom';

const nextColor = {
    color: '',
    hexCode: ''
};

// passing the props and setting the state⭐️
export default function ColorForm({ setColorList }){
    const { push } = useHistory();
    const [newColor, setnewColor] = useState(nextColor);

    const addColor = (evt) => {
        evt.preventDefault();
        axioswithAuth()
            .post('http://localhost:5000/api/colors', 
            {
                color: newColor.color,
                code: {
                    hex: newColor.hexCode
                }
            })
            .then(res => {
                setColorList(res.data);
                push('/');
            })
            .catch(err => console.log('ERROR'));
    };

    const handleChange = (evt) => {
        evt.persist();
        setnewColor({
            ...newColor,
            [evt.target.name]: evt.target.value
        })
    };

    return (
        <div className='add-color'>
            <form onSubmit={addColor}>
                <legend className="textBold">add color</legend>
                <label>color name:
                    <input
                        placeholder='Color'
                        type="text"
                        name="color"
                        value={newColor.color}
                        onChange={handleChange}
                    />
                </label>
                <label>hex code:
                    <input
                        placeholder='hex code'
                        type="text"
                        name="hexCode"
                        value={newColor.hexCode}
                        onChange={handleChange}
                    />
                </label>
                <div className="button-row">
                  <button type="submit">add</button>
                </div>
                <br />
                <br />
                <br />
            </form>
        </div>
    )
};
    
    
