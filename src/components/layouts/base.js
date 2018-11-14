import React from 'react';
import { styled, css } from 'astroturf';
import Helmet from 'react-helmet';

css`
  @import '../../design-system/main.css';
`;

const Container = styled('div')`
  display: grid;
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;
  max-width: var(--max-screen-width);
  padding: calc(1rem + 1vw);
  grid-row-gap: 3rem;
  grid-column-gap: calc(1rem + 1vw);
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: minmax(0%, 100%);
  grid-template-rows: min-content 1fr auto;

  @media (--screen-pc) {
    grid-template-areas:
      "header header"
      "content footer";
    grid-template-columns: calc(100% - 20em - 3rem) 20em;
    grid-template-rows: auto 1fr;
  }
`;

const Header = styled('header')`
  grid-area: header;
`;

const Content = styled('content')`
  grid-area: content;
`;

const Footer = styled('footer')`
  grid-area: footer;
`;

export default function BaseLayout({ children }) {
  return (
    <>
      {/* Setup head */}
      <Helmet
        htmlAttributes={{ lang: 'ru' }}
      />

      <Container>
        <Header>
          {/* Setup header */}
          Header
        </Header>

        <Content>
          {children}
        </Content>

        <Footer>
          {/* Setup header */}
        </Footer>

        {/* Setup yandex metrika */}
      </Container>
    </>
  )
}
