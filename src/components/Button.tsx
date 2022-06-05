import { Heading, StyledButton } from "../styles/StyledButton";

// Creating a button props where all buttons will have a dynamic text and an onClick function

interface IButtonProps {
    icon?: JSX.Element;
    children?: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <Heading>{children}</Heading>
        </StyledButton>
    );
};

export default Button;
