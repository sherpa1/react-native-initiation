/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const on_press = () => {
    alert("Hello World !");
  }

  return (
    <View
      style={[styles.center, { backgroundColor: useColorScheme() === 'dark' ? Colors.black : Colors.white },]}>
      <Text style={{ color: isDarkMode ? Colors.white : Colors.black }}>Hello World !</Text>
      <Button title="Press here !" onPress={() => on_press()} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
