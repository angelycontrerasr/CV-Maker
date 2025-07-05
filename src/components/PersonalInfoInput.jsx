// /components/EducationInput.js
import { DynamicFormSection } from './DynamicFormSection';

// Configuración de los campos para la educación
const personalInfoFields = [
    { label: 'Name', name: 'personalName', type: 'text' },
    { label: 'Surname', name: 'personalSurname', type: 'text' },
];

export  default function PersonalInfoInput({ userPersonalInfo, setUserPersonalInfo, id }) {
    return (
        <div >
            <DynamicFormSection
                items={userPersonalInfo}
                setItems={ setUserPersonalInfo}
                id={id}
                fields={personalInfoFields}
            />
        </div>
    );
}