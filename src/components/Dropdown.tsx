import { DropdownOption, DropdownSelect } from "../styles/StyledModal";
import { Label } from "../styles/StyledForm";

const Dropdown = () => {
    return (
        <>
            <Label>Choose A Category:</Label>
            <DropdownSelect>
                <DropdownOption>Entertainment</DropdownOption>
                <DropdownOption>Transport</DropdownOption>
                <DropdownOption>Travel</DropdownOption>
                <DropdownOption>Utilities</DropdownOption>
                <DropdownOption>Home</DropdownOption>
                <DropdownOption>Health</DropdownOption>
                <DropdownOption>Shopping</DropdownOption>
                <DropdownOption>Food</DropdownOption>
            </DropdownSelect>
        </>
    );
};

export default Dropdown;
