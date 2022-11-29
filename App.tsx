import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import NavigationStack from './src/screens/NavigationStack';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
