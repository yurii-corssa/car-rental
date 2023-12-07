import { Nav, NavLinkItem } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <NavLinkItem to="/">Home</NavLinkItem>
      <NavLinkItem to="/catalog">Catalog</NavLinkItem>
      <NavLinkItem to="/favorites">Favorites</NavLinkItem>
    </Nav>
  );
};

export default NavBar;
