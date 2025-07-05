export default function DisplayPersonalInfoInput({ personalInfo }) {
    return (
        <section>
            <h2>Personal Info</h2>
            <h3>{personalInfo.personalName + " "+personalInfo.personalSurname}</h3>
        </section>
    );
}