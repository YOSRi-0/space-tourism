import styled from 'styled-components';
import { tertieryFont, typeScale } from '../../utils';

export const Paragraph = styled.p`
  font-family: ${tertieryFont};
  font-size: ${typeScale.small[400]};
  color: hsl(${(props) => props.theme.tertieryColor}, 0.75);

  @media (min-width: 35em) {
    font-size: ${typeScale.medium[400]};
  }

  @media (min-width: 45em) {
    font-size: ${typeScale.large[400]};
  }
`;
