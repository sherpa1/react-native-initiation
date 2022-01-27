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
  Pressable
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
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.center, { backgroundColor: useColorScheme() === 'dark' ? Colors.black : Colors.white },]}>
        <Button title="Show an alert !" onPress={() => on_press()} />
        <Hello message={"Hello World!"} />
        <Pressable onPress={() => on_change_status()} >
          <Text style={[{ backgroundColor: status ? "green" : "red" }, styles.button]}>Change Status</Text>
        </Pressable>
        <Text>Status value = {status.toString()}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    borderRadius: 3,
    padding: 3,
    margin: 10,
    color: 'white'
  }
});

export default App;
