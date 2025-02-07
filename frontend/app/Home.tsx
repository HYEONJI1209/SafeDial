import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from "../components/Type";

export default function HomeScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
    // 버튼 클릭 시 Home 화면으로 이동
    const navigateToDetail = () => {
      navigation.navigate('Detail');
    };
  
  return (
    <SafeAreaProvider style={styles.MainPage}>
      <SafeAreaView>
        <View>
          <Text style={styles.MainPageText}>
            <Text onPress={navigateToDetail}>203어 1234</Text>
            차주님</Text>
          <Text style={styles.MainPageText}>안녕하세요!</Text>
        </View>

        <View style={styles.QRBox}>
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
          // style={styles.headerImage}
          />

        </View>

        <Button
          // onPress={onPressLearnMore}
          title="QR코드 다운로드"
          color="#C4D3DF"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  MainPage: {
    backgroundColor: '#87A5BE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainPageText: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'bold'
  },
  QRBox: {
    marginBottom:30,
    marginTop:30,
    height: 280,
    padding: 20,
    width: 280,
    backgroundColor: '#F1F1F1',
  },
});
