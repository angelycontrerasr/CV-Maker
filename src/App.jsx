import { useState } from 'react';

import './App.css';
import WorkInput from "./components/WorkInput.jsx";
import OptionsMenu from "./components/optionMenu.jsx";
import { EducationInput } from "./components/EducationInput.jsx";
import PersonalInfoInput from "./components/PersonalInfoInput.jsx"
const options = [
    { id: 0, name: 'Personal Info' },
    { id: 1, name: 'Education' },
    { id: 2, name: 'Experience' },
    { id: 3, name: 'Leadership' },
    { id: 4, name: "Skills and Interests" }
];

export default function App() {
    const [userWork, setUserWork] = useState([
        {
            id: 1,
            companyName: '',
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            desc: ''
        }
    ]);

    const [userEducation, setUserEducation] = useState([
        {
            id: 1,
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            edulevel: '',
        }
    ]);

    const [selectedId] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(options[0]); // 👈

    return (
        <div>
            <OptionsMenu
                options={options}
                selectedOption={selectedCategory}
                onSelect={setSelectedCategory}
            />

            {selectedCategory.name === 'Education' && (
                <EducationInput
                    userEducation={userEducation}
                    setUserEducation={setUserEducation}
                    id={selectedId}
                />
            )}

            {selectedCategory.name === 'Experience' && (
                <WorkInput
                    userWork={userWork}
                    setUserWork={setUserWork}
                    id={selectedId}
                />
            )}

            {selectedCategory.name === 'Personal Info' && (
                <PersonalInfoInput />
            )}

            {selectedCategory.name === 'Leadership' && (
                <p className="text-center">👑 Leadership Input Coming Soon...</p>
            )}

            {selectedCategory.name === 'Skills and Interests' && (
                <p className="text-center">🎯 Skills and Interests Coming Soon...</p>
            )}
            <p></p>
        </div>
    );
}
