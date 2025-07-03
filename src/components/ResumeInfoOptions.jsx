export default function OptionList({
                                        selectedOption,
                                        options,
                                        onSelect
                                    }) {
    return (
        <section className="contact-list">
            <ul>
                {options.map(option =>
                    <li key={option.name}>
                        <button onClick={() => {
                            onSelect(option);
                        }}>
                            {option.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}
