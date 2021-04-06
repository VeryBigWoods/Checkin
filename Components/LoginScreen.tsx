import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ navigation }) {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [error, setError] = React.useState('');

    const onLogin = async () => {
        fetch('http://192.168.0.13:8000/oauth/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: 3,
                client_secret: 'MbQvLCn5qAhYzBEq0npNv3JzVD1UlvEOD1BeYooP',
                username: email,
                password: password,
                scope: ''
            })
        })
            .then((response) => response.json())
            .then((json) => {
                navigation.navigate('Home');
            })
            .catch((error) => {
                setError(error);
            });
    };

    const toRegiter = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Text>电子邮件</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                onChangeText={text => onChangeEmail(text)}
                value={email}
            />
            <Text>密码</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <Button
                onPress={onLogin}
                title="登录"
                color="#841584"
                accessibilityLabel="用户登录按钮"
            />
            <Text>{error}</Text>
            <Button
                onPress={toRegiter}
                title="注册"
                color="#3399FF"
                accessibilityLabel="用户注册按钮"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
