import { ButtonStyled } from "components/GlobalStyles";
import X from "components/Icons/X";
import { styled } from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  width: 541px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--white);
  overflow: auto;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    stroke: var(--black);
    transition: stroke var(--transition);
  }

  &:hover,
  &:focus {
    svg {
      stroke: var(--accent);
    }
  }
`;

export const CloseIcon = styled(X)`
  width: 100%;
  height: 100%;
`;

export const DetailsImg = styled.img`
  width: 461px;
  height: auto;
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const MainDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 14px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const DetailsTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;

  span {
    color: var(--accent);
  }
`;

export const Descriptions = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const AccessoriesWrapper = styled.div`
  display: flex;
  width: 461px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const BlockTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const BlockInfo = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--semiTransparent);

  span {
    vertical-align: middle;
  }
`;

export const Divider = styled.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background-color: var(--nearlyTransparent);
  margin-left: 6px;
  margin-right: 6px;
`;

export const ConditionsWrapper = styled.div`
  width: 461px;
  height: 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ConditionsElementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 461px;
`;

export const ConditionsElements = styled.p`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: var(--lightGray);
`;

export const DetailsBtn = styled(ButtonStyled)`
  //
`;
