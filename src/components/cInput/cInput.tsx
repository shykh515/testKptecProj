import React, { forwardRef, Ref } from 'react';
import { TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { themes } from '../../theme/colors'; // Assuming you have a theme defined
import GlobalStyle from '../../assets/styling/GlobalStyle';

interface InputProps extends TextInputProps {
  secureTextEntry?: boolean;
  value?: string;
  style?: StyleProp<ViewStyle>;
}

const CInput = forwardRef<TextInput, InputProps>((props, ref) => {
  const { secureTextEntry, value, style, ...restProps } = props;

  return (
    <MaskInput
      ref={ref as Ref<TextInput>}
      maskChar="x"
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={themes['light'].colors.fontLowColor}
      style={[GlobalStyle.inputStyle, style]}
      autoCapitalize="none"
      value={value}
      {...restProps}
    />
  );
});

export default CInput;
