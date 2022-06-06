import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface ProgressBarProps {
    theme: ITheme;
    // completed: number;
}

export const Background = styled.div`
    height: 15px;
    width: 100%;
    background: ${(props: ProgressBarProps) => props.theme.colors["input"]};

    border-radius: 10px;
`;

export const Filler = styled.div`
    height: 100%;
    width: 70px;
    background: ${(props: ProgressBarProps) => props.theme.colors["secondary"]};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Progress = styled.span`
    font-size: 12px;
`;
/* width: ${completed}% */
