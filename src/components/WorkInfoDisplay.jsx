export default function DisplayWorkInput({ works }) {
    return (
        <section>
            <h2>Experience</h2>
            <ul>
                {works.map(work => (
                    <li key={work.id}>
                        <p>{work.startDate} </p>
                        <p>{work.endDate}</p>
                        <p className="infoName">{work.companyName}</p>
                        <p className="infoTitle">{work.title}</p>
                        <p>{work.location}</p>
                        <p>{work.desc}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}