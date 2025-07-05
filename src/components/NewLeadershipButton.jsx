export default function NewLeadershipButton({ userLeadership, setUserLeadership }) {
    const handleClick = () => {
        const newId = userLeadership.length + 1;
        const newEntry = {
            id: newId,
            leadershipName: '',
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            desc: '',
        };

        setUserLeadership([...userLeadership, newEntry]);
    };

    return (
        <button className="NewButton" onClick={handleClick}>
            ➕ New Leadership Section
        </button>
    );
}
