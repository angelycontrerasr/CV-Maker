import {use, useState} from 'react';

import './App.css';
import WorkInput from "./components/WorkInput.jsx";
import OptionsMenu from "./components/optionMenu.jsx";
import { EducationInput } from "./components/EducationInput.jsx";
import PersonalInfoInput from "./components/PersonalInfoInput.jsx"
import DisplayEducationInput from "./components/DisplayEducationInput.jsx";
import NewEducationButton from "./components/NewEducationButton.jsx";
import DisplayPersonalInfoInput from "./components/DisplayPersonalInfoInput.jsx";
import DisplayWorkInput from "./components/workInfoDisplay.jsx";
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
    const [userPersonalInfo, setUserPersonalInfo] = useState([
    {
        id: 1,
        personalName: '',
        personalSurname: '',
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
            <div className="inputDiv">
            {selectedCategory.name === 'Education' && (
                <div className="eduInput">
                    {userEducation.map(entry => (
                        <EducationInput
                            key={entry.id}
                            userEducation={userEducation}
                            setUserEducation={setUserEducation}
                            id={entry.id}
                        />
                    ))}
                    <NewEducationButton userEducation={userEducation} setUserEducation={setUserEducation} />
                </div>
            )}
            <div className="experienceInput">
            {selectedCategory.name === 'Experience' && (
                <WorkInput
                    userWork={userWork}
                    setUserWork={setUserWork}
                    id={selectedId}
                />
            )}
            </div>
            <div className="personalInfoInput">
            {selectedCategory.name === 'Personal Info' && (
                <PersonalInfoInput
                    userPersonalInfo={userPersonalInfo}
                    setUserPersonalInfo={setUserPersonalInfo}
                    id={selectedId}
                />
            )}
            </div>

                {selectedCategory.name === 'Leadership' && (
                    <p className="text-center">👑 Leadership Input Coming Soon...</p>
            )}

            {selectedCategory.name === 'Skills and Interests' && (
                <p className="text-center">🎯 Skills and Interests Coming Soon...</p>
            )}
            </div>

            <DisplayEducationInput education={userEducation} />
            <DisplayPersonalInfoInput personalInfo={userPersonalInfo[0]} />
            <DisplayWorkInput works={userWork} />
            </div>
    );
}
