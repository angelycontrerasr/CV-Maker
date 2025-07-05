export default function DisplayEducationInput({ education }) {
    return (
        <section>
            <h2>Education</h2>
            <ul>
                {education.map(education => (
                    <li key={education.id}>
                        {/* Aquí pones lo que quieres mostrar, ejemplo el schoolName */}
                        <p>{education.startDate} </p>
                        <p>{education.endDate}</p>
                        <p>{education.schoolName}</p>
                        <p>{education.degree}</p>
                        <p>{education.location}</p>
                        <p>{education.edulevel}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}