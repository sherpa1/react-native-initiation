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

const Hello = ({ message }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (<Text style={{ color: isDarkMode ? Colors.white : Colors.black }}>{message}</Text>);
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const on_press = () => {
    alert("Hello World !");
  }

  return (
    <View
      style={[styles.center, { backgroundColor: useColorScheme() === 'dark' ? Colors.black : Colors.white },]}>
      <Button title="Press here !" onPress={() => on_press()} />
      <Hello message={"Hello World!"} />
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
