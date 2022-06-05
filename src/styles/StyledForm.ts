import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface FormProps {
    theme: ITheme;
}

export const StyledForm = styled.div`
    margin-top: 50px;
    height: auto;
    width: auto;
    background: ${(props: FormProps) => props.theme.colors["body"]};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Label = styled.label`
    color: ${(props: FormProps) => props.theme.colors["header"]};
`;

export const Field = styled.input`
    width: 100%;
    height: 30px;
    background: ${(props: FormProps) => props.theme.colors["light"]};
    border: 1.5px solid ${(props: FormProps) => props.theme.colors["border"]};
    box-sizing: border-box;
`;
