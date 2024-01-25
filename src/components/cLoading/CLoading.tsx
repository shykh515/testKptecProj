import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {CText} from '../index';
import {themes} from '../../theme/colors';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface CLoadingProps {
  style?: StyleProp<ViewStyle>;
  loading: boolean;
  text?: string;
  transparent?: boolean;
}

const CLoading: React.FC<CLoadingProps> = ({
  style,
  loading,
  text,
  transparent = false,
}) => {
  if (loading) {
    return (
        <Spinner
          visible={loading}
          customIndicator={
            <View style={styles.container}>

              <ActivityIndicator
                size="small"
                color={themes['light'].colors.danger}
              />
              <CText style={styles.text}>
                {text || 'Loading, please wait...'}
              </CText>
              </View>

          }
        />
    );
  } else {
    return null;
  }
};

CLoading.defaultProps = {
  loading: false,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width:"60%",
        padding:15,borderRadius:10,
      },
  text: {
    // backgroundColor: themes.light.colors.btnColor,

    // Your text styles
  },
});

export default React.memo(CLoading);
