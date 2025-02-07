import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {RegisServices} from "../services/RegisServices";

export default function RegisScreen() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [secondPhone, setSecondPhone] = useState('');
    const [carNumber, setCarNumber] = useState('');

    const handleRegister = async () => {
        const formData = { name, phone, secondPhone, carNumber };
        // console.log("📦 보낼 데이터:", formData); 

        try {
            await RegisServices(formData);
            // console.log("📦 보낼 데이터:", formData); 
            Alert.alert("성공", "등록이 완료되었습니다!");
        } catch (error) {
            Alert.alert("실패", "등록에 실패했습니다.");
            console.log(error);
            
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.MainPage}>
                <Text style={styles.MainPageText}>정보 등록</Text>

                {/* 이름 */}
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="이름"
                />

                {/* 전화번호 */}
                <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="전화번호"
                    keyboardType="phone-pad"
                />

                {/* 세컨드전화번호 */}
                <TextInput
                    style={styles.input}
                    onChangeText={setSecondPhone}
                    value={secondPhone}
                    placeholder="세컨드 전화번호"
                    keyboardType="phone-pad"
                />

                {/* 차량번호 */}
                <TextInput
                    style={styles.input}
                    onChangeText={setCarNumber}
                    value={carNumber}
                    placeholder="차량번호"
                />

                <Button title="QR생성" color="#C4D3DF" onPress={handleRegister} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    MainPage: {
        flex: 1,
        backgroundColor: '#87A5BE',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    MainPageText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

