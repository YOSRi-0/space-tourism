import styled from 'styled-components';
import { secondaryFont, typeScale } from '../../utils';

export const NumberedTitle = styled.h3`
  font-family: ${secondaryFont};
  font-size: ${typeScale.small[500]};
  text-transform: uppercase;
  letter-spacing: 4.72px;
  color: hsl(${(props) => props.theme.tertieryColor});

  & span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl(${(props) => props.theme.tertieryColor}, 0.25);
  }

  @media (min-width: 35em) {
    font-size: ${typeScale.medium[500]};
  }

  @media (min-width: 48em) {
    font-size: ${typeScale.large[500]};
  }
`;
