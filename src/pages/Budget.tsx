import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../components/Header";
import {
    ContentWrapper,
    StyledCard,
    Subtitle,
    TextWrapper,
} from "../styles/StyledCard";
import { faCirclePlus, faGamepad } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Card from "../components/Card";
import { Icon } from "../styles/StyledButton";
import { BoldText, Paragraph } from "../styles/StyledForm";
import ProgressBar from "../components/ProgressBar";

const Budget = () => {
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState<[]>([]);

    // const handleNewCategory = () => {
    //     setCategories([...categories, newCategory]);
    // };

    return (
        <>
            <Header children={"Hi Amelia"} />
            <ContentWrapper>
                <h3>Budget Plan</h3>
                <Button
                    icon={<FontAwesomeIcon icon={faCirclePlus} size="lg" />}
                    onClick={() => "Hello"}
                    children="Add Category"
                />
            </ContentWrapper>
            <Card>
                <Icon>
                    <FontAwesomeIcon icon={faGamepad} size="2x" />
                </Icon>
                <TextWrapper>
                    <ContentWrapper>
                        <Subtitle>Entertainment</Subtitle>
                        <div>
                            <BoldText>$100 </BoldText>
                            <Paragraph>/$500</Paragraph>
                        </div>
                    </ContentWrapper>

                    <ProgressBar completed={20}></ProgressBar>
                    <Button
                        onClick={() => "Hello"}
                        children={"Add Expenses"}
                        color="#ffd166"
                        background="white"
                        border=" 1px solid #ffd166"
                        height="35px"
                    />
                </TextWrapper>
            </Card>
        </>
    );
};

export default Budget;
