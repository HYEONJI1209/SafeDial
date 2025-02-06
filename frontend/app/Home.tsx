import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <SafeAreaProvider style={styles.MainPage}>
      <SafeAreaView>
        <View>
          <Text style={styles.MainPageText}>203어 1234 차주님</Text>
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
