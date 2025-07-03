// /components/FormField.js

export function FormField({ label, value, onChange, type = 'text', name }) {
    // Si el tipo es 'textarea', renderizamos un textarea, si no, un input.
    const InputComponent = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div className="input">
            <label>{label}</label>
            <InputComponent
                type={type}
                value={value}
                // Pasamos el 'name' para que el handler sepa qué campo cambiar
                onChange={(e) => onChange(name, e.target.value)}
            />
        </div>
    );
}