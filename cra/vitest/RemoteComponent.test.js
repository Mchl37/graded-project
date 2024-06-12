import React from 'react';
import { render, screen, expect} from '@testing-library/react';
import Subtitle from '../remote/src/Subtitle';

test('affiche le texte avec l\'icône pour le sous-titre', () => {
  render(<Subtitle text="remote" icon="🌟" />);
  const textElement = screen.getByText(/remote/i);
  expect(textElement).toBeInTheDocument();
});
