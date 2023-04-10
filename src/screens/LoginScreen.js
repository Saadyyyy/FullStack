import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState, useEffect} from 'react'
import Logo from '../assets/movie.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const LoginScreen = () => {

    const navigation = useNavigation()
    const [nrp, setNrp] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const handleLogin = async (value) =>{
        console.log ('value', value)
        try {
            const response =await 
            axios.post('http://192.168.8.19:3300/users/login', 
            { nrp: value.nrp, password:value.password})
            
            console.log('response', response.data)
            if (response.data.status == 200){
                navigation.navigate('Movie')
                ToastAndroid.show(response.data.metadata, ToastAndroid.SHORT)
            }
        } catch (error) {
            console.log(error.message)
            ToastAndroid.show("Cek kembali nrp dan password", ToastAndroid.SHORT)
        }
    }

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
                    fontWeight: 'bold', margin:10
                }}
            >
                Movie App
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nrp"
                    placeholderTextColor="#fff"
                    onChangeText={(nrp)=> setNrp(nrp)}
                    value={nrp}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={(password)=> setPassword(password)}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={async ()=>{
                        await handleLogin({ nrp, password})
                    }}
                >
                    <Text style={styles.textLogin}> Login </Text>

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
        height: 150,
        margin:10
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        borderRadius: 10,
        color: '#fff',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    buttonLogin: {
        width: 300,
        height: 50,
        backgroundColor: '#f2ed46',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
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