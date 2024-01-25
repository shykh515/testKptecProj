import React from 'react';
import { render } from '@testing-library/react-native';
import CText from './cText';

describe('Custom Test', () => {
  test('renders text correctly or not', () => {
    const { getByText } = render(<CText>Hello, Test!</CText>);
    expect(getByText('Hello, Test!')).toBeTruthy();
    expect(getByText).toMatchSnapshot();
  });

  // Add more tests for styling and other functionality if needed
});
