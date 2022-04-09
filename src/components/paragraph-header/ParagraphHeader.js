import styled, { css } from 'styled-components';
import { primaryFont, typeScale } from '../../utils';

const HeaderStyles = css`
  font-family: ${primaryFont};
  text-transform: uppercase;
`;

export const PrimaryParagraphHeader = styled.h2`
  ${HeaderStyles}
  color: hsl(${(props) => props.theme.tertieryColor});
  font-size: ${typeScale.small[800]};

  @media (min-width: 35em) {
    font-size: ${typeScale.medium[800]};
  }

  @media (min-width: 48em) {
    font-size: ${typeScale.large[800]};
  }

  }
`;

export const SecondaryParagraphHeader = styled.h2`
  ${HeaderStyles}
  color: hsl(${(props) => props.theme.tertieryColor});
  font-size: ${typeScale.small[700]};
  text-align: center;

  @media (min-width: 35em) {
    font-size: ${typeScale.medium[700]};
  }

  @media (min-width: 48em) {
    font-size: ${typeScale.large[700]};
    text-align: left;
  }

  & span {
    ${HeaderStyles}
    color: hsl(${(props) => props.theme.tertieryColor}, .5);
    font-size: ${typeScale.small[600]};
    display:block;

    @media (min-width: 35em) {
      font-size: ${typeScale.medium[600]};
    }

    @media (min-width: 48em) {
      font-size: ${typeScale.large[600]};
    }
`;
