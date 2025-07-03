import {useState} from "react";
import OptionList from "./ResumeInfoOptions.jsx";

const options = [
    {id: 0, name: 'Personal Info'},
    {id: 1, name: 'Education'},
    {id: 2, name: 'Experience'},
    {id: 3, name: 'Leadership'},
    {id: 4, name: "Skills and Interests"}];


export default function OptionsMenu() {
    const [category, setCategory] = useState(options[0]);
    return (
        <div >
            <OptionList
                options={options}
                selectedOption={category}
                onSelect={ option => setCategory( option)}
            />
        </div>
    )
}
