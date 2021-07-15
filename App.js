import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';
import StartGameScreen from './screens/startGameScreen';

export default function App() {
  return (
    <View style={styles.screen} >
      <Header title="Guess the Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  }
  
});
