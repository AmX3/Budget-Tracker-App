import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import {
    AutheticationPage,
    UserCircle,
    User,
    StyledForm,
    Paragraph,
    BoldText,
} from "../styles/StyledForm";

const Signup = () => {
    return (
        <AutheticationPage>
            <UserCircle>
                <User>
                    <FontAwesomeIcon icon={faUser} size="5x" />
                </User>
            </UserCircle>
            <StyledForm>
                <Input name="email" label="Email Address" type="email" />
                <Input name="password" label="Password" type="password" />
                <Button
                    onClick={() => "hello"}
                    children={"Sign Up"}
                    width="100%"
                    type={"submit"}
                />
                <Paragraph>
                    Already have an account? <BoldText>Log in!</BoldText>
                </Paragraph>
            </StyledForm>
        </AutheticationPage>
    );
};

export default Signup;
