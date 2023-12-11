import { styled } from "styled-components";

export const AdvertsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 0;
`;

export const LoadMoreBtn = styled.button`
  color: var(--accent);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--accentActive);
  }
`;
