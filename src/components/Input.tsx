import React from "react";
import { InputType } from "zlib";
import { Field, Label } from "../styles/StyledForm";

interface IInputProps {
    name: string;
    label: string;
    type?: InputType;
}
const Input: React.FC<IInputProps> = ({ name, label, type }) => {
    return (
        <>
            <Label>{label}</Label>
            <Field name={name} type="" />
        </>
    );
};

export default Input;
