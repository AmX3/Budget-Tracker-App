import Button from "./Button";
import styled from "styled-components";
import { ITheme } from "../theme/InterfaceStyles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledLink } from "../styles/StyledLink";

interface IHeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
    return (
        <>
            <h1>{children}</h1>
        </>
    );
};

export default Header;
