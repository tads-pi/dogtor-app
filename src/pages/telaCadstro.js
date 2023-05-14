import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from './AppLoading';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes';
import { useForm, Controller } from 'react-hook-form';

// Step 3
export default function TelaCadastroDadosAcesso() {
    const navigate = useNavigation().navigate
    const { control, handleSubmit, formState: { errors } } = useForm();

    let [fontsLoaded] = useFonts({
        'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }

    function buttonEntrar(data) {
        if (data.senha === data.confirmarSenha) {
            // todo update user data
            navigate(routes.TELA_MENU)
        } else {
            Alert.alert('senhas divirgentes')
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.div}>
                <View style={styles.header}>
                    <Text style={styles.dogtorText}>DOGTOR</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Dados de Acesso</Text>
                    <Text style={{ fontSize: 16 }}>Esses dados serão necessários para entrar no aplicativo mais tarde!</Text>
                </View>
                <View>
                    {<Controller
                        control={control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.email ? styles.inputErrors : styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="E-mail"
                            />
                        )}
                    />}

                    {<Controller
                        control={control}
                        name="telefone"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.telefone ? styles.inputErrors : styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Telefone"
                                keyboardType="numeric"

                            />
                        )}
                    />}
                    {<Controller
                        control={control}
                        name="senha"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.senha ? styles.inputErrors : styles.input}
                                secureTextEntry={true}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Senha"
                            />
                        )}
                    />}
                    {<Controller
                        control={control}
                        name="confirmarSenha"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.confirmarSenha ? styles.inputErrors : styles.input}
                                secureTextEntry={true}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Confirmar Senha"
                            />
                        )}
                    />}

                    <View style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        // height: '58%',
                    }}>
                        <TouchableHighlight style={styles.button} onPress={handleSubmit(buttonEntrar)}>
                            <View style={styles.button}>
                                <Text style={{ color: 'white' }}>Entrar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    div: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: 'center',
    },
    dogtorText: {
        fontFamily: 'Barlow-Light',
        fontStyle: 'normal',
        fontSize: 37,
        color: '#41C4E5',
        marginBottom: 15,
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'flex-start',
        justifyContent: 'flex-start',

    },
    input: {
        height: 51,
        width: 360,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: "#ACBBC3",
    },
    inputErrors: {
        height: 51,
        width: 360,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: "red",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41C4E5',
        width: 360,
        padding: 10,
        borderRadius: 16,
        height: 51,
        fontSize: '16px',
    },
});
