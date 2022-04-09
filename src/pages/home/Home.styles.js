import styled from 'styled-components';
import homeBackgroundDesktop from '../../assets/home/background-home-desktop.jpg';
import homeBackgroundMobile from '../../assets/home/background-home-mobile.jpg';
import homeBackgroundTablet from '../../assets/home/background-home-tablet.jpg';
import { primaryFont, secondaryFont, typeScale } from '../../utils';

export const BackgroundImage = styled.div`
  background-image: url(${homeBackgroundMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;

  @media (min-width: 35em) {
    background-image: url(${homeBackgroundTablet});
  }

  @media (min-width: 35em) {
    background-image: url(${homeBackgroundDesktop});
  }
`;

export const Header = styled.h1`
  font-size: ${typeScale[900]};
  font-family: ${primaryFont};
  text-transform: uppercase;
  color: hsl(${(props) => props.theme.tertieryColor});
  text-align: center;
  margin: 0;

  & span {
    font-size: ${typeScale.small[500]};
    font-family: ${secondaryFont};
    color: hsl(${(props) => props.theme.tertieryColor}, 0.75);
    display: block;

    @media (min-width: 35em) {
      font-size: ${typeScale.medium[500]};
    }

    @media (min-width: 48em) {
      font-size: ${typeScale.large[500]};
    }
  }

  @media (min-width: 48em) {
    text-align: left;
  }
`;
