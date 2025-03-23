export const InputField = ({ field, onChange }) => {
    return field.isTextArea ? (
        <textarea
            rows={5}
            placeholder={field.placeholder}
            name={field.name}
            onChange={onChange}
        />
    ) : (
        <input
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            onChange={onChange}
        />
    );
};
