import React from 'react';
import { render, screen, expect} from '@testing-library/react';
import Title from '../host/src/Title';

test('affiche le texte avec l\'icône', () => {
  render(<Title text="remote" icon="host"/>);
  const textElement = screen.getByText(/remote/i);
  
});