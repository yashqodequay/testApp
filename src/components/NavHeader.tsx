import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../redux/store';

interface props {
  onDashboardPress: () => void;
  onSignOutPress: () => void;
  onSignInPress: () => void;
}

const NavHeader: React.FC<props> = props => {
  let data = useSelector(state => state.authSlice.userData);
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {data && data.email ? (
        <>
          <Text
            style={styles.headerTxt}
            onPress={() => {
              props.onDashboardPress();
            }}>
            Dashboard
          </Text>
          <Text
            style={styles.headerTxt}
            onPress={() => {
              props.onSignOutPress();
            }}>
            Sign Out
          </Text>
        </>
      ) : (
        <Text
          style={styles.headerTxt}
          onPress={() => {
            props.onSignInPress();
          }}>
          Sign In
        </Text>
      )}
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 18,
    color: '#0000EE',
    fontWeight: '500',
    marginHorizontal: 10,
  },
});
