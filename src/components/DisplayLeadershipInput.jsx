export default function DisplayLeadershipInput({ leadership }) {
    return (
        <section>
            <h2>Leadership</h2>
            <ul>
                {leadership.map(leadership => (
                    <li key={leadership.id}>
                        {/* Aquí pones lo que quieres mostrar, ejemplo el schoolName */}
                        <p>{leadership.startDate} </p>
                        <p>{leadership.endDate}</p>
                        <p>{leadership.leadershipName}</p>
                        <p>{leadership.title}</p>
                        <p>{leadership.location}</p>
                        <p>{leadership.desc}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}