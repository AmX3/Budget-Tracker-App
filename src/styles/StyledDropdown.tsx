import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface DropdownProps {
    theme: ITheme;
}

export const DropdownWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const DropdownSelect = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${(props: DropdownProps) => props.theme.colors["input"]};
    /* -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: ""; */
`;

export const DropdownOption = styled.option`
    color: ${(props: DropdownProps) => props.theme.colors["header"]};
`;
