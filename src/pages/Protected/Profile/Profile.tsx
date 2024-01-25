import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CText from '../../../components/cText/cText';
import {CButton, CInput, CLoading} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {supabase} from '../../../utils/supabase';
import {hideLoading, showLoading} from '../../../redux/Slices/LoadingSlice';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { setUserState } from '../../../redux/Slices/UserProfileSlice';
interface ProfileScreenProps {
  email: string;
  dob: string;
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {userData} = useSelector(state => state?.UserProfileSlice);
  const {loading} = useSelector(state => state.LoadingSlice);

  const {access_token, user} = userData?.session;
  const [userName, setUserName] = useState<string>(user?.email?.split('@')?.[0]);
  const dispatch = useDispatch();
  const firstLetter = userName?.charAt(0)?.toUpperCase(); // Get the first letter and capitalize it

  const logOut = async () => {

    try {
      dispatch(showLoading());
      GoogleSignin.signOut();
      const {error} = await supabase.auth.signOut();
      dispatch(
        setUserState({
          userData: {},
        }),
      );
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  return (
    <View style={styles.container}>
      {loading && <CLoading loading={loading} />}
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage}>
          <CText style={styles.profileImageText}>{firstLetter}</CText>
        </View>
      </View>
      <CInput placeholder={userName || 'Abc'} editable={false} />
      <CInput placeholder={user?.email} editable={false} />
      <CInput
        placeholder={moment(user?.email_confirmed_at).format('MMMM Do YYYY')}
        editable={false}
      />

      <CButton label="LogOut" onPress={logOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... existing styles
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50, // Half of the width and height to make it a circle
    backgroundColor: '#3498db', // Example color
    overflow: 'hidden',
    marginBottom: 20,
  },
  profileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // You can add an actual image source or use a background color
    backgroundColor: '#2980b9', // Example color
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  likeInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#3498db', // Example color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  profileImageText: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
