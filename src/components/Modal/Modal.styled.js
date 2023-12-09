import { styled } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--backdrop);
`;

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: var(--white);
`;
