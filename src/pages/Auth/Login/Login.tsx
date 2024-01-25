import React from 'react';
import CInput from '../../../components/cInput/cInput';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CForm from './CForm';
import {Container, Content, Button, Text} from 'native-base';
import {themes} from '../../../theme/colors';
import {CButton, CLoading, CText} from '../../../components/index';
import {supabase} from '../../../utils/supabase';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {hideLoading, showLoading} from '../../../redux/Slices/LoadingSlice';
import {handleError} from '../../../utils/methods';
import {
  _setDataToAsyncStorage,
  getTokenAndSetIntoHeaders,
} from '../../../utils/asyncStorage/Functions';
import {TOKEN} from '../../../utils/asyncStorage/Constants';
import {setUserState} from '../../../redux/Slices/UserProfileSlice';
import googleLogin from '../../../hooks/hooks';
const Login: React.FC = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {loading} = useSelector(state => state.LoadingSlice);

  dispatch(hideLoading());

  const handleFormSubmit = async (values: any) => {
    try {
      dispatch(showLoading());
      const {data, error} = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      console.log('error :>> z', error, values, data);
      if (error) {
        handleError(error?.message);
        dispatch(hideLoading());
      } else {
        dispatch(hideLoading());

        await _setDataToAsyncStorage(TOKEN, data?.session?.access_token);
        await getTokenAndSetIntoHeaders(data?.session?.access_token);
        dispatch(
          setUserState({
            userData: data,
          }),
        );
      }
      // Wait for the asynchronous action to complete
    } catch (error) {
      dispatch(hideLoading());

      console.log('error :>> z', error);
    }
  };
  const callBack = (res: any) => {
    console.log('res :>> ', res);
  };

  const handleForgotPress = () => {
    // Handle "Forgot password" logic
    console.log('Forgot password pressed');
  };

  const handleLoginPress = () => {
    // Handle login logic
    console.log('Login pressed');
  };

  const handleGoogleLoginPress = async () => {
    const data = await googleLogin();
    // Handle Google login logic
    console.log('Login with Google pressed', data);
    const payload = {
      session: {
        user: data?.user,
        access_token: data?.idToken,
      },
    };
    dispatch(
      setUserState({
        userData: payload,
      }),
    );
  };

  return (
    <View style={styles.container}>
      {loading && <CLoading loading={loading} />}
      <CText style={styles.logo}>HeyAPP</CText>
      <CText style={styles.heading}>Login</CText>

      {/* Form Component */}
      <CForm
        submit={handleFormSubmit}
        loading={false}
        onForgotPress={handleForgotPress}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoogleLoginPress} style={styles.button}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>G</Text>
        </View>
        <Text style={styles.text}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: themes.light.colors.primary,
    marginBottom: 40,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: themes.light.colors.lightGray2,
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  loginButton: {
    backgroundColor: 'blue',
    marginTop: 20,
  },
  googleLoginButton: {
    backgroundColor: 'red',
    marginTop: 10,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
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
    color: 'white',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '80%',
    marginTop: 30,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
