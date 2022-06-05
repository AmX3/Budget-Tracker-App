import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";

interface PageProps {
    theme: ITheme;
}

export const StyledPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;
