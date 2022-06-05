import React from "react";
import Login from "../pages/Login";
import { TextWrapper } from "../styles/StyledCard";

import { Field, Label, StyledForm } from "../styles/StyledForm";
import Button from "./Button";

const Form = () => {
    return (
        <StyledForm>
            <TextWrapper>
                <div>
                    <Label>Email Address</Label>
                    <Field />
                </div>
                <div>
                    <Label>Password</Label>
                    <Field />
                </div>
                <Button onClick={() => "hello"} children={"Log In"} />
                <p>
                    Dont’t have an account? <span>Sign up!</span>
                </p>
            </TextWrapper>
        </StyledForm>
    );
};

export default Form;
