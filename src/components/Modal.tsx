import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { StyledForm } from "../styles/StyledForm";
import {
    Backdrop,
    ModalBody,
    ModalCloseIcon,
    ModalHeader,
    StyledModal,
    Wrapper,
} from "../styles/StyledModal";
import Button from "./Button";
import Header from "./Header";

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    headerText: string;
    modalContent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isShown,
    hide,
    headerText,
    modalContent,
}) => {
    const modal = (
        <>
            <Backdrop onClick={hide} />
            <Wrapper>
                <StyledModal>
                    <ModalHeader>
                        <h2>{headerText}</h2>
                        <ModalCloseIcon onClick={hide}>
                            <FontAwesomeIcon icon={faXmark} size="2x" />
                        </ModalCloseIcon>
                    </ModalHeader>
                    <ModalBody>{modalContent}</ModalBody>
                    <Button
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        children={"Add"}
                        type={"submit"}
                        width="100%"
                    />
                </StyledModal>
            </Wrapper>
        </>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
