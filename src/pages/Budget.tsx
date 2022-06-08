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
import { UsernameContext } from "../context/Username";
import BudgetCard from "../components/BudgetCard";
import { getAllCategories } from "../services/categories";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Total from "../components/Total";

const Budget = () => {
    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);
    const { username } = useContext(UsernameContext);

    const [categoryModal, setCategoryModal] = useState<boolean>(false);

    const toggleCategory = () => {
        setCategoryModal(!categoryModal);
    };

    // const getCategoryData = async () => {
    //     const data = await getAllCategories();
    //     setCategories(data);
    // };

    // useEffect(getCategoryData()=> {

    // },[])

    // const handleNewCategory = () => {
    //     setCategories([...categories, newCategory]);
    // };

    return (
        <>
            <Header children={`Hi ${username}`} />
            <ContentWrapper>
                <h3>Budget Plan</h3>
                <Button
                    icon={faCirclePlus}
                    onClick={toggleCategory}
                    children="Add Category"
                    type={"submit"}
                />
            </ContentWrapper>
            <Total />
            <BudgetCard
                name={"Entertainment"}
                amount={100}
                maximum={400}
                icon={faGamepad}
            />
            <Modal
                isShown={categoryModal}
                hide={toggleCategory}
                headerText={"New Category"}
                modalContent={
                    <>
                        <Dropdown />
                        <Input
                            name={"Maximum"}
                            label={"Maximum Spending"}
                            type="number"
                        />
                    </>
                }
            />
        </>
    );
};

export default Budget;
