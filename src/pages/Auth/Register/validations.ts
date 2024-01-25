// validations.ts
import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),

  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default loginValidationSchema;
