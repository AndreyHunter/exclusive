import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { ProductRating } from './ProductRating';
import styles from './productRating.module.scss';

describe('ProductRating', () => {
  const mockSetRating = jest.fn();

  const WrapperComponent = () => {
    const [rating, setRating] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);

    const handleSetRating = (rating: number) => {
      setRating(rating);
      setReviewsCount((prev) => prev + 1);
    };

    return (
      <ProductRating rating={rating} reviewsCount={reviewsCount} onSetRating={handleSetRating} />
    );
  };

  describe('with direct props', () => {
    it('renders with initial rating and reviews count', () => {
      render(<ProductRating rating={3} reviewsCount={5} onSetRating={mockSetRating} />);

      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      const activeStars = stars.filter((star) => star.classList.contains(styles.on));

      expect(activeStars).toHaveLength(3);
      expect(screen.getByText('(5)')).toBeInTheDocument();
    });

    it('calls onSetRating with correct value', async () => {
      render(<ProductRating rating={0} reviewsCount={0} onSetRating={mockSetRating} />);

      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      await userEvent.click(stars[2]);

      expect(mockSetRating).toHaveBeenCalledWith(3);
    });
  });

  describe('with wrapper component', () => {
    beforeEach(() => {
      render(<WrapperComponent />);
    });

    it('renders correctly', () => {
      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      expect(stars).toHaveLength(5);
    });

    it('adds class "on" after hover and "off" after unhover', async () => {
      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      await userEvent.hover(stars[0]);
      expect(stars[0]).toHaveClass(styles.on);
      expect(stars[1]).toHaveClass(styles.off);

      await userEvent.unhover(stars[0]);
      expect(stars[0]).toHaveClass(styles.off);
    });

    it('maintains hover state for multiple stars', async () => {
      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      await userEvent.hover(stars[2]);

      expect(stars[0]).toHaveClass(styles.on);
      expect(stars[1]).toHaveClass(styles.on);
      expect(stars[2]).toHaveClass(styles.on);

      expect(stars[3]).toHaveClass(styles.off);
      expect(stars[4]).toHaveClass(styles.off);
    });

    it('sets rating and adds "on" class after click', async () => {
      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      await userEvent.click(stars[0]);
      expect(stars[0]).toHaveClass(styles.on);
    });

    it('increases reviewsCount after setting rating', async () => {
      expect(screen.getByText('(0)')).toBeInTheDocument();
      const stars = screen.getAllByRole('button', { name: 'rating-btn' });
      await userEvent.click(stars[0]);
      expect(screen.getByText('(1)')).toBeInTheDocument();
    });
  });
});
