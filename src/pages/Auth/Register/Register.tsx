import React, {useState} from 'react';
import CInput from '../../../components/cInput/cInput';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CForm from './CForm';
import {Container, Content, Button, Text} from 'native-base';
import {themes} from '../../../theme/colors';
import {CButton, CLoading, CText} from '../../../components/index';
import {supabase} from '../../../utils/supabase';
import {handleError, handleSuccess} from '../../../utils/methods';
import {useNavigation} from '@react-navigation/native';
const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const handleFormSubmit = async (values: any) => {
    // Handle form submission logic
    console.log(values, 'qqq');
    setIsLoading(true);
    try {
      const {data, error} = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: '',
        },
      });
      if (data?.user) {
        handleSuccess('User has been Registered');
        navigation.navigate('Login');
      }
      if (!data?.user && !data?.user) {
        handleError('User has already Registered');
      }
      if (error) {
        handleError('SomeThing went Wrong');
      }

      console.log('data :>> ', data);
    } catch (error) {
      console.log('data :>> ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPress = () => {
    // Handle "Forgot password" logic
    console.log('Forgot password pressed');
  };

  const handleLoginPress = () => {
    // Handle login logic
    console.log('Login pressed');
  };

  const handleGoogleLoginPress = () => {
    // Handle Google login logic
    console.log('Login with Google pressed');
  };

  return (
    <View style={styles.container}>
      {isLoading && <CLoading loading={isLoading} />}
      <CText style={styles.logo}>HeyAPP</CText>
      <CText style={styles.heading}>Register</CText>

      {/* Form Component */}
      <CForm
        submit={handleFormSubmit}
        loading={false}
        onForgotPress={handleForgotPress}
      />

      <TouchableOpacity>
        <Text style={styles.loginText}>SignIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>G</Text>
        </View>
        <Text style={styles.text}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
    color: '#fb5b5a',
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
