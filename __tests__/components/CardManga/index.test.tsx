import { fireEvent, render, screen } from '@testing-library/react';

import CardManga from '@/components/CardManga';

import { topMangas } from '../../../__mocks__/topMangas';

describe('CardManga component render and toggle favorite button verify', () => {
  it('CardManga render successfully', () => {
    const firstManga = topMangas.data[0];
    render(<CardManga data={firstManga} />);
    const titleElement = screen.getByText(firstManga.title);

    expect(titleElement).toBeInTheDocument();
  });

  it('CardManga click toggle favorite button successfully', () => {
    const firstManga = topMangas.data[0];
    render(<CardManga data={firstManga} />);

    const toggleFavoriteButton = screen.getByTestId(`Toggle-Favorite-Button-${firstManga.mal_id}`);

    fireEvent.click(toggleFavoriteButton);
  });

});
