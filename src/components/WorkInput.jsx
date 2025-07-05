import { DynamicFormSection } from './DynamicFormSection';

const workFields = [
    { label: 'Company Name', name: 'companyName', type: 'text' },
    { label: 'Position Title', name: 'title', type: 'text' }, // Corregí el tipo de 'email' a 'text'
    { label: 'Start Date', name: 'startDate', type: 'date' },
    { label: 'End Date', name: 'endDate', type: 'date' },
    { label: 'Location', name: 'location', type: 'text' },
    { label: 'Description', name: 'desc', type: 'textarea' },
];

export default function WorkInput({ userWork, setUserWork, id }) {
    return (
        <div>
            <DynamicFormSection
                items={userWork}
                setItems={setUserWork}
                id={id}
                fields={workFields}
            />
        </div>
    );
}