import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({ id, type, value, onChange, className, label, placeholder }) => {
    return (
        <Box className={className}>
            <label htmlFor={id}>{label}</label>
            <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}></Input>
        </Box>
    );
};

export default InputGroup;
