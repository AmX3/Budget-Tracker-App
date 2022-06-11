import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Icon } from "../styles/StyledButton";
import {
    ContentWrapper,
    StyledCard,
    Subtitle,
    TextWrapper,
} from "../styles/StyledCard";
import { BoldText, Paragraph } from "../styles/StyledForm";
import { ModalCloseIcon } from "../styles/StyledModal";
import { currencyFormatter } from "../utils/utils";
import Button from "./Button";
import Expense from "./Expense";
import Input from "./Input";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";

interface IBudgetCardProps {
    name: string;
    amount: number;
    maximum: number;
    icon: IconProp;
}

const BudgetCard: React.FC<IBudgetCardProps> = ({
    name,
    amount,
    maximum,
    icon,
}) => {
    const [expenseModal, setExpenseModal] = useState<boolean>(false);
    const toggleExpense = () => {
        setExpenseModal(!expenseModal);
    };

    const [viewExpensesModal, setViewExpensesModal] = useState<boolean>(false);
    const toggleViewExpenses = () => {
        setViewExpensesModal(!viewExpensesModal);
    };
    return (
        <StyledCard>
            <Icon>
                <FontAwesomeIcon icon={icon} size="lg" />
            </Icon>
            <TextWrapper>
                <ContentWrapper>
                    <Subtitle>{name}</Subtitle>
                    <div>
                        <BoldText>{currencyFormatter.format(amount)} </BoldText>
                        <Paragraph>
                            / {currencyFormatter.format(maximum)}
                        </Paragraph>
                    </div>
                </ContentWrapper>
                <ProgressBar amount={amount} maximum={maximum}></ProgressBar>
                <ContentWrapper>
                    <Button
                        onClick={toggleExpense}
                        children={"Add Expenses"}
                        background="white"
                        border=" 1px solid #ffd166"
                        height="35px"
                        type={"submit"}
                    />
                    <Button
                        onClick={toggleViewExpenses}
                        children={"View Expenses"}
                        background="white"
                        border=" 1px solid #ffd166"
                        height="35px"
                        type={"submit"}
                    />
                    <Modal
                        isShown={expenseModal}
                        hide={toggleExpense}
                        headerText={"New Expense"}
                        modalContent={
                            <>
                                <Input
                                    name={"Description"}
                                    label={"Description"}
                                    type="text"
                                />
                                <Input
                                    name={"Amount"}
                                    label={"Amount"}
                                    type="number"
                                />
                            </>
                        }
                    />
                    <Modal
                        isShown={viewExpensesModal}
                        hide={toggleViewExpenses}
                        headerText={"View Expenses"}
                        modalContent={
                            <>
                                <Expense />
                            </>
                        }
                    />
                </ContentWrapper>
            </TextWrapper>
            <ModalCloseIcon>
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
            </ModalCloseIcon>
        </StyledCard>
    );
};

export default BudgetCard;
