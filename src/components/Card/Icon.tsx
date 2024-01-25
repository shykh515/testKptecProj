import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

interface CdIconProps {
  iconName: string;
  iconType: string;
  title: string;
  value: string;
  containerStyle?: object;
}

const CdIcon: React.FC<CdIconProps> = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Icon name={props.iconName} type={props.iconType} color={'red'} size={24} />
      <Text style={styles.text1}>{props.title}</Text>
      <Text style={styles.text2}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  text1: {
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 6,
    color: 'black',
  },
  text2: {
    fontSize: 14,
    color: 'red',
  },
});

export default CdIcon;
