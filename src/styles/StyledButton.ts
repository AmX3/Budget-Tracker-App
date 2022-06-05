import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface ButtonProps {
    theme: ITheme;
}

export const StyledButton = styled.button`
    width: 150px;
    height: 50px;
    padding: 10px;
    background: ${(props: ButtonProps) => props.theme.colors["secondary"]};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Heading = styled.h2`
    font-weight: 300;
    font-size: 14px;
`;

export const Icon = styled.div`
    color: ${(props: ButtonProps) => props.theme.colors["secondary"]};
`;
