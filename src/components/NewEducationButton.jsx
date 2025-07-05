export default function NewEducationButton({ userEducation, setUserEducation }) {
    const handleClick = () => {
        const newId = userEducation.length + 1;
        const newEntry = {
            id: newId,
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            edulevel: '',
        };

        setUserEducation([...userEducation, newEntry]);
    };

    return (
        <button className="NewButton" onClick={handleClick}>
            ➕ New Education Section
        </button>
    );
}
