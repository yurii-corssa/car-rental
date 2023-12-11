import { ButtonStyled } from "components/GlobalStyles";
import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DropdownLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--gray);
`;

export const SearchBtn = styled(ButtonStyled)`
  padding: 14px 44px;
  height: 48px;
`;
