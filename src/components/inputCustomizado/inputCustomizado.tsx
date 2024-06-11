import './inputCustomizado.css'

const InputCustomizado = ({ type, defaultValue, placeholder }: { type: string, defaultValue: string, placeholder: string }) => {
        return (
            <input
            id='inputCustom'
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                style={{ color: 'red' }}
            />
        );
    };

export default InputCustomizado;