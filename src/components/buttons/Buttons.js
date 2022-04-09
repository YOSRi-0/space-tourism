import styled, { css } from 'styled-components';
import {
  primaryFont,
  secondaryFont,
  tertieryFont,
  typeScale,
} from '../../utils';
import { Link } from 'react-router-dom';

const UnderlineStyles = css`
  cursor: pointer;
  padding: 0.5rem 0;
  border: 0;
  border-bottom: 0.2rem solid hsl(${(props) => props.theme.tertieryColor}, 0);
  background: transparent;
  color: hsl(${(props) => props.theme.tertieryColor});

  &:hover,
  &:focus {
    border-color: hsl(${(props) => props.theme.tertieryColor}, 0.5);
  }

  &.active {
    border-color: hsl(${(props) => props.theme.tertieryColor});
  }
`;

export const MainButton = styled.a`
  background-color: hsl(${(props) => props.theme.tertieryColor});
  font-size: 2rem;
  font-family: ${primaryFont};
  padding: 0 2em;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hsl(${(props) => props.theme.tertieryColor}, 0.1);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 700ms ease-in-out;
  }

  &:hover:after,
  &:focus:after {
    opacity: 1;
    transform: scale(1.5);
  }
`;

export const NavLink = styled.li`
  ${UnderlineStyles}
  font-size: ${typeScale.small[500]};
  font-family: ${secondaryFont};
  text-transform: uppercase;
  letter-spacing: 2.36px;

  &.active {
    border: 0;
  }

  & a {
    color: hsl(${(props) => props.theme.tertieryColor});
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;

    @media (min-width: 35em) {
      padding: 2rem clamp(0.5rem, 2vw, 3rem);
    }

    & span {
      font-weight: 700;
      margin-right: 0.5em;
    }
  }
`;

export const TabButton = styled.a`
  ${UnderlineStyles}
  font-family: ${secondaryFont};
  font-size: ${typeScale.small[400]};
  color: hsl(${(props) => props.theme.tertieryColor}, 0.5);
  letter-spacing: 2.7px;
  text-transform: uppercase;

  @media (min-width: 35em) {
    font-size: ${typeScale.medium[400]};
  }
`;

const SliderButtonStyles = css`
  cursor: pointer;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const SliderButtonSmall = styled.a`
  ${SliderButtonStyles}
  border: 0;
  padding: 0 0.5em;
  background-color: hsl(${(props) => props.theme.tertieryColor}, 0.25);
  color: hsl(${(props) => props.theme.tertieryColor})

  &:hover,
  &:focus {
    background-color: hsl(${(props) => props.theme.tertieryColor}, 0.5);
  }

  &.active {
    background-color: hsl(${(props) => props.theme.tertieryColor}, 1);
  }
`;

export const SliderButton = styled.a`
  ${SliderButtonStyles}
  font-size: ${typeScale.small[600]};
  padding: 0.5em;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid hsl(${(props) => props.theme.tertieryColor}, 0.25);
  background-color: transparent;
  color: hsl(${(props) => props.theme.tertieryColor});

  &:hover,
  &:focus {
    border: 1px solid hsl(${(props) => props.theme.tertieryColor}, 1);
  }

  &.active {
    background-color: hsl(${(props) => props.theme.tertieryColor}, 1);
  }

  @media (min-width: 35em) {
    font-size: ${typeScale.medium[600]};
    width: 60px;
    height: 60px;
  }

  @media (min-width: 45em) {
    font-size: ${typeScale.large[600]};
    width: 80px;
    height: 80px;
  }
`;
