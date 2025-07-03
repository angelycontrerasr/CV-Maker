// /components/DynamicFormSection.js
import { FormField } from './FormField.jsx';

export function DynamicFormSection({ items, setItems, id, fields }) {
    const itemIndex = items.findIndex(item => item.id == id);
    const currentItem = items[itemIndex];

    if (!currentItem) {
        return null;
    }

    const handleChange = (fieldName, newValue) => {
        const updatedItem = { ...currentItem, [fieldName]: newValue };

        const newItems = [
            ...items.slice(0, itemIndex),
            updatedItem,
            ...items.slice(itemIndex + 1)
        ];

        setItems(newItems);
    };

    return (
        <div className="dynamic-form-section">
            {/* 3. Mapeamos la configuración de 'fields' para renderizar cada campo */}
            {fields.map(field => (
                <FormField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={currentItem[field.name]}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
}