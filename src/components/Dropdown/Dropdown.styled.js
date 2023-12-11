import { styled } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  text-align: left;

  &:after {
    content: "▼";
    float: right;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  z-index: 1;
`;

export const DropdownItem = styled.button`
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;

  &:hover,
  &:focus {
    background-color: #f7f7f7;
  }
`;
