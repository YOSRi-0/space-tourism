import React from 'react';
import { MainButton } from '../../components/buttons/Buttons';
import { Container, ContainerItem } from '../../components/container/Container';
import { Paragraph } from '../../components/paragraph/Paragraph';
import { BackgroundImage, Header } from './Home.styles';

const Home = () => {
  return (
    <>
      <BackgroundImage />
      <Container>
        <ContainerItem>
          <Header>
            <span>so, you want to travel to</span>
            space
          </Header>
          <Paragraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Paragraph>
        </ContainerItem>
        <ContainerItem flexCenter>
          <MainButton>explore</MainButton>
        </ContainerItem>
      </Container>
    </>
  );
};

export default Home;
