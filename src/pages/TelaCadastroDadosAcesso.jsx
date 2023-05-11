import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes';
import { useForm, Controller } from 'react-hook-form';

export default function TelaCadastroDadosAcesso() {


    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm();
    let [fontsLoaded] = useFonts({
        'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }
    function buttonEntrar() {
        navigate(routes.TELA_MENU)

    }

    return (
        <SafeAreaView>
            <View style={styles.div}>
                <View style={styles.header}>
                    <Text style={styles.dogtorText}>DOGTOR</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Dados de Acesso</Text>
                    <Text style={{ fontSize: 16 }}>Muito bom conhecer o dono desse pet. Precisamos das suas informações de acesso</Text>
                </View>
                <View>
                    {<Controller
                        control={control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={{
                                    height: 51,
                                    width: 360,
                                    marginTop: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 16,
                                    borderColor: errors.email && 'red' || !errors.email && '#ACBBC3',
                                }}
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
                                style={{
                                    height: 51,
                                    width: 360,
                                    marginTop: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 16,
                                    borderColor: errors.telefone && 'red' || !errors.telefone && '#ACBBC3',
                                }}
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
                                style={{
                                    height: 51,
                                    width: 360,
                                    marginTop: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 16,
                                    borderColor: errors.Senha && 'red' || !errors.Senha && '#ACBBC3',
                                }}
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
                                style={{
                                    height: 51,
                                    width: 360,
                                    marginTop: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 16,
                                    borderColor: errors.confirmarSenha && 'red' || !errors.confirmarSenha && '#ACBBC3',
                                }}
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
                        height: '58%',

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



