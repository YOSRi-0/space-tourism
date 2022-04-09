import styled, { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 48em) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5em;

  @media (min-width: 35em) {
    padding: 5.625em 6em;
  }

  @media (min-width: 48em) {
    display: flex;
    flex-direction: row;
    padding: 20vh 10vw 0;
  }
`;

export const ContainerItem = styled.div`
  // height: 50%;
  // width: 100%;
  flex-basis: 50%;

  @media (min-width: 48em) {
    // width: 50%;
    // height: 100%;
  }

  ${(props) => (props.flexCenter ? flexCenter : '')}
`;
