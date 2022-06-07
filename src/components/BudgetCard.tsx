import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Icon } from "../styles/StyledButton";
import {
    ContentWrapper,
    StyledCard,
    Subtitle,
    TextWrapper,
} from "../styles/StyledCard";
import { BoldText, Paragraph } from "../styles/StyledForm";
import theme, { ITheme } from "../theme/InterfaceStyles";
import { currencyFormatter } from "../utils/utils";
import Button from "./Button";
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
    return (
        <StyledCard>
            <Icon>
                <FontAwesomeIcon icon={icon} size="2x" />
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
                <Button
                    onClick={() => "Hello"}
                    children={"Add Expenses"}
                    color="#ffd166"
                    background="white"
                    border=" 1px solid #ffd166"
                    height="35px"
                />{" "}
            </TextWrapper>
        </StyledCard>
    );
};

export default BudgetCard;
