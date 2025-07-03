import { useState } from 'react'

import './App.css'
import WorkInput from "./components/WorkInput.jsx";
import OptionsMenu from "./components/optionMenu.jsx";


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

    const [selectedId, setSelectedId] = useState(1); // Puedes conectar esto a tu OptionsMenu si quieres después

    return (
        <div>
            <OptionsMenu />
            <WorkInput userWork={userWork} setUserWork={setUserWork} id={selectedId} />
        </div>
    );
}
