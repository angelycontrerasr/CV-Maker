export default function DisplayPersonalInfoInput({ personalInfo }) {
    return (
        <section>
            <h2>Personal Info</h2>
            <p>{personalInfo.personalName}</p>
            <p>{personalInfo.personalSurname}</p>
        </section>
    );
}