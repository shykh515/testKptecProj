import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { IconTypes, icons } from '../../assets/icons';

interface CIconProps {
    type: IconTypes;
    name: string;
    color: string;
    size: number;
    styles?: StyleProp<ViewStyle>;
  }

const CIcon: React.FC<CIconProps> = (props) => {
  const { type, name, color, size, styles } = props;
  const MyIcon = icons[type] as React.ElementType; // Type assertion

  return (
    <View>
      <MyIcon name={name} color={color} style={styles} size={size} />
    </View>
  );
};

export default CIcon;

const styles = StyleSheet.create({});
