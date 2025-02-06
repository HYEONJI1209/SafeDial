import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function LandingScreen() {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <SafeAreaProvider style={styles.Landing}>
      <SafeAreaView>
        <Text style={styles.LandingText}>차량번호를 입력해 주세요.</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  Landing: {
    backgroundColor: '#87A5BE',
    display: 'flex',
    justifyContent: 'center'
  },
  LandingText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 33
  },
  input: {
    height: 46,
    margin: 12,
    padding: 10,
    width: 294,
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    marginLeft: 33
  },
});
