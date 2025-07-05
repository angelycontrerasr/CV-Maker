import { DynamicFormSection } from './DynamicFormSection';

const leadershipFields = [
    { label: 'Leadership Title', name: 'leadershipName', type: 'text' },
    { label: 'Position Title', name: 'title', type: 'text' }, // Corregí el tipo de 'email' a 'text'
    { label: 'Start Date', name: 'startDate', type: 'date' },
    { label: 'End Date', name: 'endDate', type: 'date' },
    { label: 'Location', name: 'location', type: 'text' },
    { label: 'Description', name: 'desc', type: 'textarea' },
];

export default function LeadershipInput({ userLeadership, setUserLeadership, id }) {
    return (
        <div>
            <DynamicFormSection
                items={userLeadership}
                setItems={setUserLeadership}
                id={id}
                fields={leadershipFields}
            />
        </div>
    );
}