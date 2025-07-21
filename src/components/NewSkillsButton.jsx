export default function NewSkillButton({ userSkill, setUserSkill }) {
    const handleClick = () => {
        const newId = userSkill.length + 1;
        const newEntry = {
            id: newId,
            skillName: '',
            skillDescription: '',
        };

        setUserSkill([...userSkill, newEntry]);
    };

    return (
        <button className="NewButton" onClick={handleClick}>
            ➕ New Skill Section
        </button>
    );
}
