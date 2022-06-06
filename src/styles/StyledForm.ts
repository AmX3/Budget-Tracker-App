import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface FormProps {
    theme: ITheme;
}
export const AutheticationPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 600px;
`;
export const StyledForm = styled.div`
    height: 300px;
    width: 90%;
    background: ${(props: FormProps) => props.theme.colors["body"]};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Label = styled.label`
    color: ${(props: FormProps) => props.theme.colors["header"]};
    font-weight: bold;
    color: light;
`;

export const Field = styled.input`
    width: 100%;
    height: 30px;
    border: solid 1.5px ${(props: FormProps) => props.theme.colors["input"]};
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 5pt 0.5pt
            ${(props: FormProps) => props.theme.colors["shadow"]};
    }

    &:focus {
        cursor: pointer;
        box-shadow: 0 0 5pt 0.5pt
            ${(props: FormProps) => props.theme.colors["shadow"]};
        outline: none;
    }
`;

export const BoldText = styled.span`
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    color: ${(props: FormProps) => props.theme.colors["header"]};
`;

export const UserCircle = styled.div`
    height: 150px;
    width: 150px;
    background-color: ${(props: FormProps) => props.theme.colors["body"]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const User = styled.div`
    color: ${(props: FormProps) => props.theme.colors["header"]};
`;

export const Paragraph = styled.span`
    text-align: center;
    font-size: 14px;
`;
