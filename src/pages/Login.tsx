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

const Login = () => {
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
                <StyledLink to="/budget">
                    <Button
                        onClick={() => "hello"}
                        children={"Log In"}
                        width="100%"
                    />
                </StyledLink>
                <Paragraph>
                    Dont’t have an account? <BoldText>Sign up!</BoldText>
                </Paragraph>
            </StyledForm>
        </AutheticationPage>
    );
};

export default Login;
