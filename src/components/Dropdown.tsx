import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownOption, DropdownSelect } from "../styles/StyledDropdown";
import { Label, StyledForm } from "../styles/StyledForm";

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
