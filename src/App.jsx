import { useState } from 'react'

import './App.css'
import OptionList from "./components/ResumeInfoOptions.jsx";

const options = [
    {id: 0, name: 'Personal Info'},
    {id: 1, name: 'Education'},
    {id: 2, name: 'Experience'},
    {id: 3, name: 'Leadership'},
    {id: 4, name: "Skills and Interests"}];


export default function OptionsMenu() {
    const [to, setTo] = useState(options[0]);
    return (
        <div>
            <OptionList
                options={options}
                selectedOption={to}
                onSelect={ option => setTo( option)}
            />
        </div>
    )
}
