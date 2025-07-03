// /components/EducationInput.js
import { DynamicFormSection } from './DynamicFormSection';

// Configuración de los campos para la educación
const educationFields = [
    { label: 'School', name: 'schoolName', type: 'text' },
    { label: 'Degree', name: 'degree', type: 'text' },
    { label: 'Start Date', name: 'startDate', type: 'date' },
    { label: 'End Date', name: 'endDate', type: 'date' },
    { label: 'Location', name: 'location', type: 'text' },
    { label: 'Level', name: 'edulevel', type: 'text' },
];

export function EducationInput({ userEducation, setUserEducation, id }) {
    return (
        <div className="eduInput">
            <DynamicFormSection
                items={userEducation}
                setItems={setUserEducation}
                id={id}
                fields={educationFields}
            />
        </div>
    );
}