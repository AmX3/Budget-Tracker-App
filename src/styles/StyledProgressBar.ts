import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface ProgressBarProps {
    theme: ITheme;
    // completed: number;
}

export const Container = styled.div`
    progress[value] {
        border-radius: 10px;
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 15px;
        border-radius: 20px;
        background-color: ${(props: ProgressBarProps) =>
            props.theme.colors["shadow"]};
    }

    progress[value]::-webkit-progress-value {
        border-radius: 20px;
        background-color: ${(props: ProgressBarProps) =>
            props.theme.colors["secondary"]};
    }
`;
export const Background = styled.progress`
    width: 100%;
`;

export const Progress = styled.div`
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    text-align: center;
    width: 270px;
    margin-top: 3px;
`;
