import { styled } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  position: relative;
  display: flex;
  padding: 14px 50px 14px 18px;
  justify-content: start;
  align-items: center;
  gap: 32px;
  min-width: 224px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 14px;
  background: var(--light);
  cursor: pointer;

  svg {
    position: absolute;
    top: 14px;
    right: 18px;
    width: 20px;
    height: 20px;
    stroke: var(--black);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 272px;
  padding: 14px 8px 14px 18px;
  border-radius: 14px;
  border: 1px solid var(--nearlyTransparent);
  background-color: var(--white);
  box-shadow: var(--shadow);
  overflow: auto;
  z-index: 1;
`;

export const DropdownItem = styled.button`
  text-align: start;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 4px 0;
  color: var(--textTransparent);
  background: none;
  border: none;
  transition: color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--gray);
  }
`;
