import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface ModalProps {
    theme: ITheme;
}

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 700;
    outline: 0;
`;

export const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 500;
`;

export const StyledModal = styled.div`
    width: 310px;
    height: 280px;
    z-index: 100;
    transition: all 0.3s ease-in-out;
    background-color: ${(props: ModalProps) => props.theme.colors["body"]};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ModalHeader = styled.header`
    border-bottom: 1px solid
        ${(props: ModalProps) => props.theme.colors["primary"]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalCloseIcon = styled.div`
    & * {
        transition: all 0.3s;
    }
    &:hover * {
        cursor: pointer;
        transform: scale(0.95);
    }
`;

export const ModalBody = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const DropdownWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const DropdownSelect = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${(props: ModalProps) => props.theme.colors["input"]};
    /* -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: ""; */
`;

export const DropdownOption = styled.option`
    color: ${(props: ModalProps) => props.theme.colors["header"]};
`;
