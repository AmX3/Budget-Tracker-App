import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentWrapper } from "../styles/StyledCard";
import { Paragraph } from "../styles/StyledForm";
import { ModalCloseIcon } from "../styles/StyledModal";

const Expense = () => {
    return (
        <ContentWrapper>
            <Paragraph> Spotify</Paragraph>
            <ContentWrapper>
                <Paragraph>$11.99</Paragraph>
            </ContentWrapper>
            <ModalCloseIcon>
                <FontAwesomeIcon icon={faCircleXmark} size="1x" />
            </ModalCloseIcon>
        </ContentWrapper>
    );
};

export default Expense;
