import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import Input from "../components/Input";

import {
    AutheticationPage,
    BoldText,
    Paragraph,
    StyledForm,
    User,
    UserCircle,
} from "../styles/StyledForm";
import { StyledLink } from "../styles/StyledLink";
import React, { useContext, useEffect, useState } from "react";
import { findUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

interface Credentials {
    username: string;
    password: string;
}

interface Token {
    token: string | null;
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectCredentials, setIncorrectCredentials] = useState(false);

    const { token, setToken } = useContext(AuthContext);

    const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // Navigate to budget page
    const navigate = useNavigate();

    // dummy api call
    const loginUser = async (credentials: Credentials) => {
        const user = findUser(credentials.username);

        if (user?.password === password) {
            setToken("token123");
            navigate("/budget");
        } else {
            setToken("");
            setIncorrectCredentials(true);
        }
    };

    const handleSubmitCredentials = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        console.log(username, password + " have been submitted");
        loginUser({ username: username, password: password });
    };

    useEffect(() => {
        console.log(token);
    }, [token]);
    return (
        <AutheticationPage>
            <UserCircle>
                <User>
                    <FontAwesomeIcon icon={faUser} size="5x" />
                </User>
            </UserCircle>
            <StyledForm>
                <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    onChange={handleUser}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <Input
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handlePassword}
                    pattern=".{7,}"
                />
                {incorrectCredentials && (
                    <Paragraph>Incorrect Password</Paragraph>
                )}
                {/* <StyledLink to="/budget"> */}
                <Button
                    children={"Log In"}
                    width="100%"
                    onSubmit={() => handleSubmitCredentials}
                />
                {/* </StyledLink> */}
                <Paragraph>
                    Dont’t have an account? {""}
                    {/* <StyledLink to="/signup"> */}
                    <BoldText>Sign up!</BoldText>
                    {/* </StyledLink> */}
                </Paragraph>
            </StyledForm>
        </AutheticationPage>
    );
};

export default Login;
