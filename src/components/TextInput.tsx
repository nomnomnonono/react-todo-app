import React from 'react';
import type { TextInputProps } from '../types/input'

function TextInput({title, setTitle}: TextInputProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    return <input value={title} onChange={handleChange} className="p-2 border mb-3"></input>;
}

export default TextInput;
