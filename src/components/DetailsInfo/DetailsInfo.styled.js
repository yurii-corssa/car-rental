import { styled } from "styled-components";

export const InfoBlock = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 18px;
  color: var(--semiTransparent);

  span {
    vertical-align: middle;
  }
`;
