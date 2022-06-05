import React from "react";
import { StyledCard } from "../styles/StyledCard";

interface ICardProps {
    children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => {
    return <StyledCard>{children}</StyledCard>;
};

export default Card;
