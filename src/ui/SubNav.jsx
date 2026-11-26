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
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const StyledSocialLink = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-700);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    border-radius: var(--border-radius-sm);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-100);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg {
    color: var(--color-brand-600);
  }
`;

const socialLinks = [
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: <AiFillTikTok />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <FaSquareInstagram />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <FaSquareFacebook />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me",
    icon: <FaSquareWhatsapp />,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: <FaSquareXTwitter />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: <FaSquareYoutube />,
  },
];

function SubNav() {
  return (
    <nav aria-label="Social media links">
      <NavList>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <StyledSocialLink
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span>{link.name}</span>
            </StyledSocialLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

export default SubNav;
