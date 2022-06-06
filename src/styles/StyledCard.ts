import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface CardProps {
    theme: ITheme;
}

export const StyledCard = styled.div`
    margin-top: 50px;
    height: auto;
    width: auto;
    background: ${(props: CardProps) => props.theme.colors["body"]};
    padding: 0.5rem 0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
`;

export const Subtitle = styled.h3`
    padding: 0px;
    margin: 0px;
`;
