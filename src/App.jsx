import {use, useState} from 'react';

import './App.css';
import WorkInput from "./components/WorkInput.jsx";
import OptionsMenu from "./components/OptionMenu.jsx";
import { EducationInput } from "./components/EducationInput.jsx";
import PersonalInfoInput from "./components/PersonalInfoInput.jsx"
import DisplayEducationInput from "./components/DisplayEducationInput.jsx";
import NewEducationButton from "./components/NewEducationButton.jsx";
import DisplayPersonalInfoInput from "./components/DisplayPersonalInfoInput.jsx";
import DisplayWorkInput from "./components/WorkInfoDisplay.jsx";
import LeadershipInput from "./components/LeadershipInput.jsx";
import DisplayLeadershipInput from "./components/DisplayLeadershipInput.jsx";
import SkillsInput from "./components/SkillsInput.jsx";
import DisplaySkillInput from "./components/DisplaySkillInput.jsx";
import NewWorkButton from "./components/NewWorkButton.jsx";
import NewLeadershipButton from "./components/NewLeadershipButton.jsx";
import NewSkillButton from "./components/NewSkillsButton.jsx";
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
    const [userSkill, setUserSkill] = useState([
        {
            id: 1,
            skillName: '',
            skillDescription: '',
        }
    ]);
    const [selectedId] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(options[0]); // 👈
    const [userLeadership, setUserLeadership] = useState([
        {
            id: 1,
            leadershipName: '',
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            desc: '',
        }
    ]);
    return (
        <div>
            <header>
            <OptionsMenu
                options={options}
                selectedOption={selectedCategory}
                onSelect={setSelectedCategory}
            />
            </header>
            <div className="mainDiv">
                <div className="inputDiv">
                    <div className="personalInfoInput">
                        {selectedCategory.name === 'Personal Info' && (
                            <PersonalInfoInput
                                userPersonalInfo={userPersonalInfo}
                                setUserPersonalInfo={setUserPersonalInfo}
                                id={selectedId}
                            />
                        )}
                    </div>
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
                    {selectedCategory.name === 'Experience' && (
                        <div className="workInput">
                            {userWork.map(entry => (
                                <WorkInput
                                key={entry.id}
                                userWork={userWork}
                                setUserWork={setUserWork}
                                id={entry.id}
                                />
                            ))}
                            <NewWorkButton userWork={userWork} setUserWork={setUserWork} />
                        </div>
                    )}
                    {selectedCategory.name === 'Leadership' && (
                        <div className="LeadershipInput">
                            {userLeadership.map(entry =>(
                                <LeadershipInput
                                key={entry.id}
                                userLeadership={userLeadership}
                                setUserLeadership={setUserLeadership}
                                id={entry.id}/>
                            ))}
                            <NewLeadershipButton userLeadership={userLeadership} setUserLeadership={setUserLeadership}/>
                        </div>
                )}

                {selectedCategory.name === 'Skills and Interests' && (
                    <div className="SkillsInput">
                        {userSkill.map(entry => (
                            <SkillsInput
                                key={entry.id}
                                userSkill={userSkill}
                                setUserSkill={setUserSkill}
                                id={entry.id}/>
                        ))}
                        <NewSkillButton userSkill={userSkill} setUserSkill={setUserSkill}/>
                    </div>
                )}
                </div>
                <div className="displayDiv">
                    <DisplayPersonalInfoInput personalInfo={userPersonalInfo[0]}/>
                    <DisplayEducationInput education={userEducation}/>
                    <DisplayWorkInput works={userWork}/>
                    <DisplayLeadershipInput leadership={userLeadership}/>
                    <DisplaySkillInput skills={userSkill}/>
                </div>
            </div>
        </div>
    );
}
