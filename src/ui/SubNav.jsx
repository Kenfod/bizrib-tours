import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-100);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function SubNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <AiFillTikTok />
            <span>TikTok</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <FaSquareInstagram />
            <span>Instagram</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <FaSquareFacebook />
            <span>Facebook</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <FaSquareWhatsapp />
            <span>WhatsApp</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <FaSquareXTwitter />
            <span> X </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <FaSquareYoutube />
            <span> YouTube </span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default SubNav;
