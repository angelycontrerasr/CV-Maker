export default function NewWorkButton({ userWork, setUserWork }) {
    const handleClick = () => {
        const newId = userWork.length + 1;
        const newEntry = {
            id: newId,
            companyName: '',
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            desc: '',
        };

        setUserWork([...userWork, newEntry]);
    };

    return (
        <button className="NewButton" onClick={handleClick}>
            ➕ New Experience Section
        </button>
    );
}
