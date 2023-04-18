import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';

import Provider from '@/Provider';
import Home from '@/pages';

import { topMangas } from '../../__mocks__/topMangas';

nock('https://api.jikan.moe/v4')
  .persist()
  .defaultReplyHeaders({
    'access-control-allow-origin': '*'
  })
  .get('/top/manga')
  .reply(200, topMangas)

describe('HomeScreen render verify', () => {
  it('render title successfully', () => {
    render(
      <Provider>
        <Home />
      </Provider>
    );
    const titleElement = screen.getByText(/top mangas/i) || screen.getByText(/favorites/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('render mangas successfully', async () => {
    render(
      <Provider>
        <Home />
      </Provider>
    );

    const firstManga = topMangas.data[0];

    await waitFor(async () => {
      const firstMangaElement = screen.getByText(firstManga.title);
      expect(firstMangaElement).toBeInTheDocument();
    })
  });

  it('mangas match snapshot successfully', async () => {
    const { container } = render(
      <Provider>
        <Home />
      </Provider>
    );

    await expect(container).toMatchSnapshot();
  });

});
