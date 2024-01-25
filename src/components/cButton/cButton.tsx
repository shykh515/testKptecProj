import React from 'react';
import { Button,  } from 'native-base';
import { StyleSheet ,Text , TouchableOpacity } from 'react-native';
import { themes } from '../../theme/colors';

interface DynamicButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const cButton: React.FC<DynamicButtonProps> = ({ label, onPress, disabled = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.loginBtn}>
    <Text style={styles.loginText}>{label}</Text>
  </TouchableOpacity>
  );
};

export default cButton;


export const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: themes.light.colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: themes.light.colors.secondary4,
  },
  });