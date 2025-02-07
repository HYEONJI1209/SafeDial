import React from 'react';
import { StyleSheet, Text, TextInput, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from "../components/Type";

export default function LandingScreen() {
  const [text, onChangeText] = React.useState('Useless Text');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // 버튼 클릭 시 Home 화면으로 이동
  const navigateToHome = () => {
    navigation.navigate('Regis');
  };

  return (
    <SafeAreaProvider style={styles.Landing}>
      <SafeAreaView>
        <Text style={styles.LandingText}>차량번호를 입력해 주세요.</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          title="확인"
          color="#C4D3DF"
          onPress={navigateToHome} // 버튼 클릭 시 이동
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  Landing: {
    backgroundColor: '#87A5BE',
    display: 'flex',
    justifyContent: 'center',
  },
  LandingText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 33,
  },
  input: {
    height: 46,
    margin: 12,
    padding: 10,
    width: 294,
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    marginLeft: 33,
  },
});
