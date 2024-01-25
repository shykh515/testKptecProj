// cButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CButton } from '..';

describe('cButton Component', () => {
  test('renders button label correctly', () => {
    const { getByText } = render(<CButton label="Click me" onPress={() => {}} />);
    expect(getByText('Click me')).toBeTruthy();
  });

  test('calls onPress function when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CButton label="Click me" onPress={onPressMock} />);
    
    fireEvent.press(getByText('Click me'));
    
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  // Add more tests for styling, disabled state, and other functionality if needed
});
