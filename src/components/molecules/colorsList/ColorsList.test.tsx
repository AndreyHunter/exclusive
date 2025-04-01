import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ColorsList } from './ColorsList';

describe('ColorsList', () => {
  it('navigates to another product', () => {
    render(
      <MemoryRouter>
        <ColorsList selectedColor="red" onSetColor={() => {}} colors={['red', 'black']} />
      </MemoryRouter>,
    );
    const elements = screen.getAllByRole('listitem');
    expect(elements).toHaveLength(2);
  });
});
