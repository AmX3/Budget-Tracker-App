import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface PhoneProps {
    theme: ITheme;
}

export const StyledPhone = styled.div`
    width: 350px;
    height: 700px;
    background: ${(props: PhoneProps) => props.theme.colors["primary"]};
    border: 10px solid black;
    border-radius: 50px;
    box-shadow: -15px 10px 1px 1px
        ${(props: PhoneProps) => props.theme.colors["shadow"]};
    padding: 2rem;
`;

export const Image = styled.img`
    object-fit: cover;
    height: auto;
    border-radius: 0 0 2em 2em;
    max-width: 100%;
    margin-top: 110px;
`;
