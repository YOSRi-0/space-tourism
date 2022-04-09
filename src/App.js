import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  MainButton,
  NavLink,
  SliderButton,
  SliderButtonSmall,
  TabButton,
} from './components/buttons/Buttons';
import { NumberedTitle } from './components/numbered-title/NumberedTitle';
import {
  PrimaryParagraphHeader,
  SecondaryParagraphHeader,
} from './components/paragraph-header/ParagraphHeader';
import Header from './components/header/Header';
import { Paragraph } from './components/paragraph/Paragraph';
import { defaultTheme } from './utils';
import { GlobalStyle } from './utils/Global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      {/* <div>
        <Paragraph>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </Paragraph>
      </div>
      <div>
        <PrimaryParagraphHeader>MARS</PrimaryParagraphHeader>
      </div>
      <div>
        <SecondaryParagraphHeader>
          <span>THE TERMINOLOGY…</span>
          SPACEPORT
        </SecondaryParagraphHeader>
      </div>
      <div>
        <NumberedTitle>
          <span>01</span> Pick your destination
        </NumberedTitle>
      </div>
      <div>
        <SliderButton>1</SliderButton>
      </div>
      <div>
        <SliderButtonSmall></SliderButtonSmall>
      </div>
      <div>
        <TabButton>moon</TabButton>
      </div>
      <div>
        <NavLink>
          <span>00</span> Nav
        </NavLink>
      </div>
      <div>
        <MainButton>Explore</MainButton>
      </div> */}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
