import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-400);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  grid-column: 2 /-1;
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
`;

function Footer() {
  return <StyledFooter>FOOTER</StyledFooter>;
}

export default Footer;
