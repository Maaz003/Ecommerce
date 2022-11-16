import React from 'react';
import AppNavigator from './src/navigation/index';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreLogs(['EventEmitter.removeListener']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
