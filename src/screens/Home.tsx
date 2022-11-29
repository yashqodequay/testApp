import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useDispatch, useSelector} from 'react-redux';
import {counter} from '../redux/AuthReducer';
import BtnComponent from '../components/BtnComponent';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

type Props = NativeStackScreenProps<RootStackParamList>;

const Home = ({route, navigation}: Props) => {
  let data = useSelector(state => state.authSlice.userData);
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          alignSelf: 'center',
          marginTop: 100,
        }}>
        Welcome to Home Screen {data?.email}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
