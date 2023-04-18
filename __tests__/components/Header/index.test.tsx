import { fireEvent, render, screen } from '@testing-library/react';

import Header from '@/components/Header';

describe('Header component render and show favorites button click', () => {
  it('Header render successfully', () => {
    render(<Header />);
    const titleElement = screen.getByText(/informanga/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('Button show favorite mangas click successfully', () => {
    render(<Header />);
    const showFavoriteMangasButton = screen.getByText(/show favorites/i) || screen.getByText(/go back/i);

    fireEvent.click(showFavoriteMangasButton);
  });

});
