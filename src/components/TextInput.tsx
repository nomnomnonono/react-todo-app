import type { TextInputProps } from '../types/input'

function TextInput({inputElement}: TextInputProps) {
    return <input ref={inputElement} type="text" className="p-2 border mb-3"></input>;
}

export default TextInput;
