import React, { useMemo } from 'react';

import Layout from '../partials/layout/layout';

import meta from '../../data/meta.json';
import wishList from '../../data/wish_list.json';

/**
 * Turns a flat list into a structure to display
 * @param list
 *
 * @return {Object}
 */
function prepareList(list) {
  const priceFormatter = new Intl.NumberFormat(meta.site.lang, {
    style: 'currency',
    currency: 'USD',
  });

  return list.map(({ name, url, price }) => ({
    name,
    url,
    price: price ? priceFormatter.format(price) : undefined,
  }));
}

export default function WishListPage(props) {
  const list = useMemo(() => prepareList(wishList), []);

  return (
    <Layout {...props} title="Желания">
      <h1 className="h1 visuallyhidden">Желания</h1>

      <p className="paragraph">
        Ведётся для друзей (что тебе подарить?) и для себя.
        Если хотите меня порадовать, то можете купить что-нибудь из списка.
        Перед тем, как что-либо купить, сообщите мне о своём
        намерении, чтобы не было пересечений в сезон :-)
      </p>

      <p className="paragraph">
        Если сомневаетесь или вдруг начинаете искать
        <span className="nobr">«аналоги подешевле» — </span>
        не стоит ничего покупать. Просто потискайте меня.
        Это будет намного-намного лучше, чем ненужная,
        собирающая пыль вещь. Честно.
      </p>

      <ul className="ul">
        {list.map(({ name, price, url }) => (
          <li>
            <span className="nobr">
              {url ? (
                <a href={url} target="_blank" rel="nofollow noreferrer noopener">
                  {name}
                </a>
              ) : name}

              {price && ' — '}
            </span>

            {price && (
              <span>{price}</span>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
