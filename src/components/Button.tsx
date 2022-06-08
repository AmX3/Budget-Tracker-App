import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Heading, StyledButton } from "../styles/StyledButton";

// Creating a button props where all buttons will have a dynamic text and an onClick function. Additional customisation of buttons are also optional

interface IButtonProps {
    icon?: IconProp;
    children: string;
    onClick: () => void;
    height?: string;
    width?: string;
    border?: string;
    background?: string;
    type: "submit";
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    height,
    width,
    border,
    background,
    icon,
    type,
}) => {
    return (
        <StyledButton
            onClick={onClick}
            type={type}
            style={{ height, width, border, background }}>
            <Heading>{children}</Heading>
        </StyledButton>
    );
};

export default Button;
