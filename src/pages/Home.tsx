import Header from "../components/Header";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../styles/StyledLink";
import { useState } from "react";
import { Icon } from "../styles/StyledButton";
import { StyledCard } from "../styles/StyledCard";

const Home = () => {
    const [buttonText, setButtonText] = useState("Log In");

    const handleButtonText = () => {
        setButtonText("Log out");
    };

    // Altering greeting based on current time
    const date = new Date();
    let currentTime = date.getHours();
    let greeting;
    if (currentTime < 12) {
        greeting = "Good Morning";
    } else if (currentTime > 12 && currentTime < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Night";
    }

    return (
        <>
            <Header children={greeting} />
            <StyledLink to="/login">
                <Button
                    onClick={handleButtonText}
                    children={buttonText}
                    type={"submit"}
                />
            </StyledLink>
            <StyledCard>
                <div>
                    <h3>Category Budgets</h3>
                    <p> Login to View</p>
                </div>
                <Icon>
                    <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
                </Icon>
            </StyledCard>
        </>
    );
};

export default Home;
