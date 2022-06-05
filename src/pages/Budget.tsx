import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../components/Header";
import { ContentWrapper, StyledCard, TextWrapper } from "../styles/StyledCard";
import { faCirclePlus, faGamepad } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Card from "../components/Card";
import { Icon } from "../styles/StyledButton";

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
                        <h3>Entertainment</h3>

                        <p>
                            $100
                            <span>/$500</span>
                        </p>
                    </ContentWrapper>

                    <hr></hr>
                    <Button onClick={() => "Hello"} children={"Add Expenses"} />
                </TextWrapper>
            </Card>
        </>
    );
};

export default Budget;
