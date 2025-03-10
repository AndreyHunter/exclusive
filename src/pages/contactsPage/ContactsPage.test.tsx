import { render, screen } from '@testing-library/react';

import ContactsPage from './ContactsPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/organisms/contactsInfo/ContactsInfo', () => ({
  ContactsInfo: () => <div data-testid="contacts-info"></div>,
}));

jest.mock('@components/organisms/contactsForm/ContactsForm', () => ({
  ContactsForm: () => <div data-testid="contacts-form"></div>,
}));

describe('ContactsPage', () => {
  it('renders all components correctly', () => {
    render(<ContactsPage />);

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('contacts-info')).toBeInTheDocument();
    expect(screen.getByTestId('contacts-form')).toBeInTheDocument();
  });
});
