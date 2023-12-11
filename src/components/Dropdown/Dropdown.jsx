import { useEffect, useRef, useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from "./Dropdown.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/adverts/advertsSlices";
import { selectFilter } from "../../redux/adverts/advertsSelectors";

const CarDropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("_");
  const { make } = useSelector(selectFilter);
  const dropdownRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (option) => {
    dispatch(setFilter({ make: option }));
    // setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton type="button" onClick={() => setIsOpen(!isOpen)}>
        {make || placeholder}
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map((option) => {
            return (
              <DropdownItem key={option} onClick={() => handleSelect(option)}>
                {option}
              </DropdownItem>
            );
          })}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default CarDropdown;
