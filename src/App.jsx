import { useState } from 'react'

import './App.css'
import WorkInput from "./components/WorkInput.jsx";
import OptionsMenu from "./components/optionMenu.jsx";
import {EducationInput} from "./components/EducationInput.jsx";


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
            id:1,
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            edulevel: '',
        }
    ])
    const [selectedId, setSelectedId] = useState(1); // Puedes conectar esto a tu OptionsMenu si quieres después

    return (
        <div>
            <OptionsMenu />
            <WorkInput userWork={userWork} setUserWork={setUserWork} id={selectedId} />
            <EducationInput userEducation={userEducation} setUserEducation={setUserEducation} id={selectedId} />
        </div>
    );
}
