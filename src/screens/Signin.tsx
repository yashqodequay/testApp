import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputTxt from '../components/InputTxt';
import BtnComponent from '../components/BtnComponent';
import {useDispatch} from 'react-redux';
import {auth_data} from '../redux/AuthReducer';

interface props {}

const Signin: React.FC<props> = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailValidationMsg, setEmailValidationMsg] = useState('');
  const [passwordValidMsg, setPasswordValidMsg] = useState('');

  const dispatch = useDispatch();

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const Login = () => {
    let validEmail = validateEmail();
    if (validEmail) {
      if (password.length >= 4) {
        dispatch(auth_data({email: email, password: password}));
        props.navigation.navigate('Dashboard');
      } else {
        setPasswordValidMsg(
          'Password Contain at least 4 characters without spaces',
        );
      }
    } else {
      setEmailValidationMsg('Please Enter Valid Email Address');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.signInContainer}>
        <InputTxt
          title={'User Name'}
          placeholder={'Enter User Name'}
          keyboardType={'email-address'}
          onChangeText={txt => setEmail(txt)}
        />
        <Text style={styles.errorTxt}>{emailValidationMsg}</Text>
        <InputTxt
          title={'Password'}
          placeholder={'Enter Password'}
          secureTextEntry={true}
          onChangeText={txt => setPassword(txt.trim())}
        />
        <Text style={styles.errorTxt}>{passwordValidMsg}</Text>

        <BtnComponent
          title={'Sign In'}
          onPress={() => {
            Login();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#FBFBFB'},
  signInContainer: {
    justifyContent: 'center',
    marginVertical: 150,
    marginHorizontal: 30,
  },
  errorTxt: {color: 'red', fontSize: 14, marginTop: 10},
});
