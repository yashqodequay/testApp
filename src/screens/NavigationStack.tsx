import {StyleSheet, TouchableOpacity} from 'react-native';
import NavHeader from '../components/NavHeader';
import Home from './Home';
import Dashboard from './Dashboard';
import Signin from './Signin';
import {useDispatch} from 'react-redux';
import {auth_data} from '../redux/AuthReducer';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Signin: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const NavigationStack = () => {
  const dispatch = useDispatch();

  return (
    <RootStack.Navigator
    // initialRouteName="Home"
    >
      <RootStack.Screen
        name="Home"
        component={Home}
        options={({route, navigation}) => ({
          headerRight: () => (
            <NavHeader
              onDashboardPress={() => {
                navigation.navigate('Dashboard');
              }}
              onSignOutPress={() => {
                dispatch(auth_data({email: '', password: ''}));
              }}
              onSignInPress={() => {
                navigation.navigate('Signin');
              }}
            />
          ),
        })}
      />
      <RootStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({navigation}) => ({
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Icon name="arrowleft" size={25} color="#000" />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'center',
        })}
      />
      <RootStack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
