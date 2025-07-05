import OptionList from "./ResumeInfoOptions.jsx";

export default function OptionsMenu({ options, selectedOption, onSelect }) {
    return (
        <div className="options-menu">
            <OptionList
                options={options}
                selectedOption={selectedOption}
                onSelect={onSelect}
            />
        </div>
    );
}