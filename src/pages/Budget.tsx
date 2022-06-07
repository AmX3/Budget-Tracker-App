import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import {
    ContentWrapper,
    StyledCard,
    Subtitle,
    TextWrapper,
} from "../styles/StyledCard";
import { faCirclePlus, faGamepad } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Card from "../components/BudgetCard";
import { Icon } from "../styles/StyledButton";
import { BoldText, Paragraph } from "../styles/StyledForm";
import ProgressBar from "../components/ProgressBar";
import { UsernameContext } from "../context/Username";
import BudgetCard from "../components/BudgetCard";

const Budget = () => {
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState<[]>([]);
    const { username, setUsername } = useContext(UsernameContext);
    // const handleNewCategory = () => {
    //     setCategories([...categories, newCategory]);
    // };

    useEffect(() => {
        setUsername(username);
    }, []);

    return (
        <>
            <Header children={`Hi ${username}`} />
            <ContentWrapper>
                <h3>Budget Plan</h3>
                <Button
                    icon={<FontAwesomeIcon icon={faCirclePlus} size="lg" />}
                    onClick={() => "Hello"}
                    children="Add Category"
                />
            </ContentWrapper>
            <BudgetCard
                name={"Entertainment"}
                amount={100}
                maximum={400}
                icon={faGamepad}></BudgetCard>
        </>
    );
};

export default Budget;
