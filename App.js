/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  *
  * @format
  * @flow strict-local
  */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import Navigation from './src/navigation/drawer';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (

    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#eee"
  }
});

export default App;