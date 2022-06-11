import React from "react";
import { Field, Label } from "../styles/StyledForm";

interface IInputProps {
    name: string;
    label: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<IInputProps> = ({
    name,
    label,
    type,
    value,
    onChange,
}) => {
    return (
        <>
            <Label>{label}</Label>
            <Field name={name} type={type} value={value} onChange={onChange} />
        </>
    );
};

export default Input;
