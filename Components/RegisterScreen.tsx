import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegisterScreen({ navigation }) {

    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [error, setError] = React.useState('');

    const onRegister = async () => {
        fetch('http://192.168.0.13:8000/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then((response) => response.json())
            .then((json) => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text>用户名</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                onChangeText={text => onChangeName(text)}
                value={name}
            />
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
                onPress={onRegister}
                title="注册"
                color="#841584"
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
