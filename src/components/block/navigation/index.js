import React from 'react';
import { Link } from 'gatsby';

import { Container, List, Item } from './styled';

const pages = [
  { title: ' Обо мне ', url: '/' },
  { title: ' Заметки ', url: '/notes/' },
  { title: ' Доклады ', url: '/presentations/' },
];

export default function Navigation() {
  return (
    <Container aria-label="Страницы сайта">
      <List>
        {pages.map(({ title, url }) => (
          <Item key={url}>
            <Link to={url} className="link" activeClassName="link--active">{title}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}
