import React, { useContext, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { UsernameContext } from "../context/Username";
import { AutheticationPage, Welcome } from "../styles/StyledForm";
import { StyledLink } from "../styles/StyledLink";

const WelcomeUser = () => {
    const [name, setName] = useState<string>("");
    const { setUsername } = useContext(UsernameContext);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleClick = () => {
        if (name.length == 0) {
            return;
        }
        // When clicking on the button, the username is then set to the current input. First letter of name is always uppercase
        setUsername(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
        // Resetting name to an empty value
        setName("");
        console.log(name);
    };

    return (
        <AutheticationPage>
            <Header children={"Welcome"} />
            <Welcome>
                <Input
                    name="name"
                    label="Enter a name"
                    type="text"
                    value={name}
                    onChange={handleInput}
                />
                <StyledLink to="/budget">
                    <Button
                        onClick={handleClick}
                        children={"Lets Budget!"}
                        width="100%"
                    />
                </StyledLink>
            </Welcome>
        </AutheticationPage>
    );
};

export default WelcomeUser;
