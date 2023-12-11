import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  gap: 18px;
`;

export const NavLinkItem = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--black);
  &.active {
    color: var(--accent);
  }
`;
