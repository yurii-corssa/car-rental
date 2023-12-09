import { useEffect, useRef, useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from "./CarDropdown.styled";

const options = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land",
];

const CarDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef();

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
    setSelectedOption(option);
    setIsOpen(false);
    // onSelect(option);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton type="button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Enter the text"}
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
