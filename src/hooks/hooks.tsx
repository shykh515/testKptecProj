import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {supabase} from '../utils/supabase';

const googleLogin = async () => {
  //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
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '572234654752-ca2e29c3emh3sa6k4kvi7h427c4btu8u.apps.googleusercontent.com',
  });

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfo :>> ', userInfo);
    
    return userInfo
    
    
  } catch (error: any) {
    console.log('error :>>  z', error);
  }
}

export default googleLogin
