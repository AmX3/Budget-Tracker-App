import React from "react";
import { InputType } from "zlib";
import { Field, Label } from "../styles/StyledForm";

interface IInputProps {
    name: string;
    label: string;
    type?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pattern: string;
}
const Input: React.FC<IInputProps> = ({
    name,
    label,
    type,
    value,
    onChange,
    pattern,
}) => {
    return (
        <>
            <Label>{label}</Label>
            <Field
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                pattern={pattern}
                required
            />
        </>
    );
};

export default Input;
