/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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

  const [status, setStatus] = useState(false);

  const on_press = () => {
    alert("Hello World !");
  }

  const on_change_status = () => {
    setStatus(status ? false : true);
  }

  return (
    <View
      style={[styles.center, { backgroundColor: useColorScheme() === 'dark' ? Colors.black : Colors.white },]}>
      <Button title="Show an alert !" onPress={() => on_press()} />
      <Hello message={"Hello World!"} />
      <Button title="Change status" onPress={() => on_change_status()} />
      <Text>Status value = {status.toString()}</Text>
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
