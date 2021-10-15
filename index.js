import React, {useState} from 'react';
import {
  StatusBar,
  AppRegistry,
} from 'react-native';

import Navigator from './routes/stack';
import {name as appName} from './app.json';

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar hidden />
    </>
  );
}

AppRegistry.registerComponent(appName, () => App);

export default App;