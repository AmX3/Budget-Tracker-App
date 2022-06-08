import {
    ContentWrapper,
    StyledCard,
    Subtitle,
    TextWrapper,
    TotalBalance,
} from "../styles/StyledCard";
import { BoldText, Paragraph } from "../styles/StyledForm";
import { currencyFormatter } from "../utils/utils";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

interface IBudgetCardProps {
    amount: number;
    maximum: number;
}

const Total = () => {
    return (
        <TotalBalance>
            <TextWrapper>
                <ContentWrapper>
                    <Subtitle>Total</Subtitle>
                    <div>
                        <BoldText>{currencyFormatter.format(100)} </BoldText>
                        <Paragraph>/ {currencyFormatter.format(400)}</Paragraph>
                    </div>
                </ContentWrapper>
                <ProgressBar amount={100} maximum={400} />
            </TextWrapper>
        </TotalBalance>
    );
};

export default Total;
