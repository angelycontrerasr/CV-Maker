import { DynamicFormSection } from './DynamicFormSection';

const skillsFields = [
    { label: 'Name of the Skill or Interest', name: 'skillName', type: 'text' },
    { label: 'Description', name: 'skillDescription', type: 'textarea' },
];

export default function SkillsInput({ userSkill, setUserSkill, id }) {
    return (
        <div>
            <DynamicFormSection
                items={userSkill}
                setItems={setUserSkill}
                id={id}
                fields={skillsFields}
            />
        </div>
    );
}