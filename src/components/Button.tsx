import { Heading, StyledButton } from "../styles/StyledButton";

// Creating a button props where all buttons will have a dynamic text and an onClick function. Additional customisation of buttons are also optional

interface IButtonProps {
    icon?: JSX.Element;
    children?: React.ReactNode;
    onClick: () => void;
    height?: string;
    width?: string;
    color?: string;
    border?: string;
    background?: string;
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    height,
    width,
    color,
    border,
    background,
}) => {
    return (
        <StyledButton
            onClick={onClick}
            style={{ color, height, width, border, background }}>
            <Heading>{children}</Heading>
        </StyledButton>
    );
};

export default Button;
