import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    TouchableHighlight,
    Alert,
    Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function TelaCadastroDadosAcesso({navigation}) {


    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm();
    let [fontsLoaded] = useFonts({
        'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }
    function buttonEntrar(data) {
        if (data.senha === data.confirmarSenha) {
            navigation.reset({
                index: 0,
                routes:[{name:"TelaMenu"}]
            })
        } else {
            Alert.alert('senhas divirgentes')
        }


    }

    return (
        <SafeAreaView>
            <View style={styles.div}>
                <View style={styles.header}>
                    <Text style={styles.dogtorText}>DOGTOR</Text>
                    <Text style={styles.title}>Dados de Acesso</Text>
                    <Text style={styles.subTitle}>Muito bom conhecer o dono desse pet. Precisamos das suas informações de acesso</Text>
                </View>
                <View style={styles.body}>
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
                                <TextInputMask
                                    style={errors.telefone ? styles.inputErrors : styles.input}
                                    value={value}
                                    type={'cel-phone'}
                                    options={{
                                      maskType: 'BRL',
                                      withDDD: true,
                                      dddMask: '(99) ',
                                    }}
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
                    </View>
                    <View>
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
        height: screenHeight,
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
        marginTop: 24,
        marginBottom: 15,
    
      },
      header: {
    
        width: screenWidth,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'flex-start',
        justifyContent: 'flex-start',
    
      },
      body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    
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
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 8,
      },
      subTitle: {
        fontSize: 16,
        marginBottom: 14,
      }

});



