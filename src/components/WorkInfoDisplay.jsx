export default function DisplayWorkInput({ works }) {
    return (
        <section>
            <h2>Experience</h2>
            <ul>
                {works.map(work => (
                    <li key={work.id}>
                        {/* Aquí pones lo que quieres mostrar, ejemplo el schoolName */}
                        <p>{work.startDate} </p>
                        <p>{work.endDate}</p>
                        <p className="infoName">{work.companyName}</p>
                        <p className="infoTitle">{work.title}</p>
                        <p>{work.location}</p>
                        <p>{work.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}