import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Alert,
    Linking
} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import routes from "../routes"
import AppLoading from './AppLoading';


export default function TelaLogin() {
    const navigate = useNavigation().navigate
    const { login } = useContext(AuthContext)

    const [email, onChangeText] = useState('');
    const [password, onChangePassword] = useState('');
    let [fontsLoaded] = useFonts({
        'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }

    let Users = [
        {
            email: "1",
            data: {
                password: "1",
                name: "Debug",
                pets: [
                    {
                        id: "123",
                        name: "Thor",
                        race: "Bulldog Francês",
                        breed: "5", // in kg
                        size: "50", // in cm
                        birth_date: "01/01",
                        birth_year: "2020",
                        profile_picture: () => require("../assets/images/pets/thor_pp.png"),
                    },
                    {
                        id: "321",
                        name: "Fernando",
                        race: "Bulldog Francês",
                        breed: "3", // in kg
                        size: "30", // in cm
                        birth_date: "01/01",
                        birth_year: "2022",
                        profile_picture: () => require("../assets/images/pets/fernando_pp.png"),
                    }
                ]
            }
        },
        {
            email: "guilherme@thomazin.com",
            data: {
                password: "1234",
                name: "Guilherme"
            }
        }]

    function validador() {
        let userFound = false;
        Users.map(({ email: _email, data }) => {
            if (email === _email) {
                userFound = true;

                login({
                    name: data.name,
                    email: email,
                    pets: data.pets
                })
                navigate(routes.TELA_MENU)
            }
        })

        if (!userFound) {
            Alert.alert('e-mail ou senha incoretos.')
        }
    }

    return (
        <SafeAreaView>
            <View
                style={styles.div}
            >
                <Text style={styles.dogtorText}>DOGTOR</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={email}
                        placeholder="E-mail"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Senha"

                    />
                    <View>
                        <View style={styles.esquciSenha}>
                            <Text style={{ color: '#ACBBC3' }} onPress={() => Linking.openURL('https://google.com')
                            } >Esqueci minha Senha</Text>
                        </View>

                        <TouchableHighlight style={styles.button} onPress={validador}>
                            <View style={styles.button}>
                                <Text style={{ color: "white" }} >Entrar</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 40 }}>

                    <Text>
                        <Text style={{ color: '#ACBBC3' }}>

                            Não possui uma conta?

                        </Text>
                        <Text style={{ fontWeight: "bold", color: "#41C4E5" }}
                            onPress={() => Linking.openURL('https://google.com')}>

                            Registrar-se

                        </Text>
                    </Text>
                </View>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    div: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 0,
        textAlign: 'center',
    },
    dogtorText: {
        fontFamily: 'Barlow-Light',
        fontStyle: 'normal',
        fontSize: 60,
        color: '#41C4E5',
    },

    input: {
        height: 51,
        width: 360,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: '#ACBBC3'
    },
    divButton: {
        padding: 10
    },
    esquciSenha: {
        alignItems: 'flex-end',
        marginRight: 17,

    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41C4E5',
        margin: 12,
        width: 360,
        padding: 10,
        borderRadius: 16,
        height: 51,

        fontSize: "16px",
    },

    buttonText: {
        color: '#FFFFFF',
    },

});