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

export default function TelaCadastroEndereco() {


    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm();
    let [fontsLoaded] = useFonts({
        'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }
    function buttonContinuar() {
        navigate(routes.TELA_CADASTRO_DADOS_ACESSO)

    }

    return (
        <SafeAreaView>
            <View style={styles.div}>
                <View style={styles.header}>
                    <Text style={styles.dogtorText}>DOGTOR</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Seu endereço</Text>
                    <Text style={{ fontSize: 16 }}>Para encontrarmos estabelecimentos próximos de você</Text>
                </View>

                <View>
                    {<Controller
                        control={control}
                        name="cep"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.cep ? styles.inputErrors : styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="CEP"
                                keyboardType="numeric"
                            />
                        )}
                    />}
                    <View style={{ display: 'flex', flexDirection: "row" }}>
                        {<Controller
                            control={control}
                            name="rua"
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    style={errors.rua ? styles.inputErrorsRua : styles.inputRua}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Rua"
                                />
                            )}
                        />}

                        {<Controller
                            control={control}
                            name="num"
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    style={errors.num ? styles.inputErrorsNum : styles.inputNum}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="N"
                                    keyboardType="numeric"
                                />
                            )}
                        />}
                    </View>
                    {<Controller
                        control={control}
                        name="complemento"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.complemento ? styles.inputErrors : styles.input}

                                value={value}
                                onChangeText={onChange}
                                placeholder="Complemento"
                            />
                        )}
                    />}

                    {<Controller
                        control={control}
                        name="cidade"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.cidade ? styles.inputErrors : styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Cidade"
                            />
                        )}
                    />}
                    {<Controller
                        control={control}
                        name="estado"
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.estado ? styles.inputErrors : styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Estado"
                            />
                        )}
                    />}

                    <View style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        height: '50%',

                    }}>
                        <TouchableHighlight style={styles.button} onPress={handleSubmit(buttonContinuar)}>
                            <View style={styles.button}>
                                <Text style={{ color: 'white' }}>Continuar</Text>
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
    inputRua: {
        height: 51,
        width: 300,
        marginTop: 12,
        marginRight: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: "#ACBBC3",
    },
    inputNum: {
        height: 51,
        width: 50,
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
    inputErrorsRua: {
        height: 51,
        width: 300,
        marginTop: 12,
        marginRight: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: "red",
    },
    inputErrorsNum: {
        height: 51,
        width: 50,
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
    }

});



