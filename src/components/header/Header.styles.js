import styled from 'styled-components';

export const NavEl = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: transparent;
`;

export const LogoContainer = styled.div`
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }
`;

export const MobileToggle = styled.div`
  display: block;
  position: absolute;
  z-index: 2000;
  top: 2rem;
  right: 1rem;
  ackground: transparent;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  width: 1.5rem;
  aspect-ratio: 1;
  cursor: pointer;

  &:focus-visible {
    outline: 5px solid white;
    outline-offset: 5px;
  }

  @media (min-width: 35em) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  background: hsl(${(props) => props.theme.tertieryColor}, 0.05);
  backdrop-filter: blur(1.5rem);
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 35em) {
    position: fixed;
    z-index: 1000;
    padding: min(20rem, 15vh) 2rem;
    flex-direction: column;
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 500ms ease-in-out;
    inset: 0 0 0 30%;
    height: 100%;
    width: 80vw;
  }

  @media (min-width: 35em) {
    padding: 0 clamp(3rem, 7vw, 7rem);
  }

  @media (min-width: 35em) {
    & span {
      display: none;
    }
  }

  @media (min-width: 45em) {
    & span {
      display: inline-block;
    }
 
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  height: 1px;
  width: 35%;
  background-color: hsl(${(props) => props.theme.tertieryColor}, 0.25);

  @media (max-width: 45em) {
    display: none;
  }
`;
