import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'
// import Logo from '/src/assets/poster3.png'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image 
                source={Logo}
                style={styles.logo} 
            />
            <Text
                style={{
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: 'bold'
                }}
            >
                Movie App
            </Text>
            <View>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.buttonLogin}
                >
                    <Text
                        style={styles.textLogin}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.text}>Don't have an account?
                    <Text
                        style={{ fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('RegisterScreen')}
                    >
                        Sign Up
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        borderRadius: 10,
        color: '#fff',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    buttonLogin: {
        width: 300,
        height: 50,
        backgroundColor: '#f2ed46',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textLogin: {
        color: '#000',
        fontSize: 20,
    },
    text: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
})

export default LoginScreen