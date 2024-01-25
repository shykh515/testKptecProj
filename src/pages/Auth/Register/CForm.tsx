// CForm.tsx
import React, {useRef, memo} from 'react';
import {Formik} from 'formik';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CButton, CInput, CText} from '../../../components';
import {themes} from '../../../theme/colors';
import Validations from './validations';
import MaskInput from 'react-native-mask-input';

// Define the InputFieldProps type
interface InputFieldProps {
  label: string;
  type: string; // Adjust the type as needed
  placeholder: string;
  isRequired: boolean;
  helperText: string;
  errorMessage: string;
}

// Define the CFormProps type
interface CFormProps {
  submit: (values: any) => void;
  loading: boolean;
  onForgotPress: () => void;
}

function CForm(props: CFormProps) {
  const {submit, loading, onForgotPress} = props;

  const form = useRef<any>(null); // Use appropriate type for the ref
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const name = useRef<any>(null);
  return (
    <Formik
      innerRef={form}
      onSubmit={values => submit(values)}
      initialValues={{email: '', password: '' , name :'' ,}}
      validationSchema={Validations}>
      {({handleChange, values, handleSubmit, errors}) => {
        return (
          <>
            <View style={styles.formContainer}>
            <MaskInput
                ref={name}
                autoCorrect={false}
                placeholderTextColor={themes['light'].colors.darken}
                autoCapitalize="none"
                value={values?.name}
                onChangeText={handleChange('name')}
                style={styles.input}
                placeholder="Enter Name"
              />
              {errors.name && (
                <CText style={styles.errorMessage}>{errors.name}</CText>
              )}
              <MaskInput
                ref={email}
                autoCorrect={false}
                placeholderTextColor={themes['light'].colors.darken}
                autoCapitalize="none"
                value={values?.email}
                onChangeText={handleChange('email')}
                style={styles.input}
                placeholder="Email Address"
              />
              {errors.email && (
                <CText style={styles.errorMessage}>{errors.email}</CText>
              )}
              <MaskInput
                ref={password}
                autoCorrect={false}
                placeholderTextColor={themes['light'].colors.darken}
                autoCapitalize="none"
                value={values?.password}
                onChangeText={handleChange('password')}
                style={styles.input}
                placeholder="Password"
              />
              {errors.password && (
                <CText style={styles.errorMessage}>{errors.password}</CText>
              )}
            </View>
          

            <CButton label="Register" onPress={() => submit(values)} />
          </>
        );
      }}
    </Formik>
  );
}

export default memo(CForm);

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  input: {
    borderRadius: 10, // Adjust the border radius as needed
    marginBottom: 10, // Optional: Add margin bottom for a better appearance
    borderColor: 'gray', // Add border color
    borderWidth: 1, // Add border width
    backgroundColor: 'white', // Add background color
    margin: 20,
    padding: 10, // Add padding for better appearance
  },
  errorMessage: {
    color: themes['light'].colors.danger,
    marginLeft: 10,
    marginBottom: 5,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
});
