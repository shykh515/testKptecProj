import React from 'react';
import { Text, Animated, TextStyle, TextProps } from 'react-native';
import { themes } from '../../theme/colors';

interface CTextProps extends TextProps {
  style?: TextStyle;
}

const cText: React.FC<CTextProps> = (props) => {
  const { style, children, ...otherProps } = props;


  return (
    <Animated.Text
      allowFontScaling={false}
      style={[ style]}
      {...otherProps}
    >
      {children}
    </Animated.Text>
  );
};

export default React.memo(cText);
