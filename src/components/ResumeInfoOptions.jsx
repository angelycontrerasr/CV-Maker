export default function OptionList({
                                        options,
                                        onSelect
                                    }) {
    return (
        <section >
            <ul className="optionMenu">
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
