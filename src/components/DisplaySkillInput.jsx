export default function DisplaySkillInput({ skills }) {
    return (
        <section>
            <h2>Skills And Interests</h2>
            <ul>
                {skills.map(skills => (
                    <li key={skills.id}>
                        {/* Aquí pones lo que quieres mostrar, ejemplo el schoolName */}
                        <p>{skills.skillName} </p>
                        <p>{skills.skillDescription}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}