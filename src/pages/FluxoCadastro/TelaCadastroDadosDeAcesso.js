import React, { useState } from 'react'
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../../context/auth';
import { isValidEmail, isValidPhone } from "../../utils/validators";
import { buttonStyle, inputErrorStyle, inputStyle, subTitleStyle, titleStyle } from './styles';
import { Text, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import DogtorView from '../../components/DogtorView';
import * as colors from "../../constants/colors";
import routes from '../../routes';

// Step 03
export default function TelaCadastroDadosAcesso({ navigation }) {
    const [errorMessage, setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [doublePassword, setDoublePassword] = useState({ senha: '', confirmarSenha: '' })

    const navigate = useNavigation().navigate
    const { registerAccessData } = useContext(AuthContext)

    const { control, handleSubmit, formState: { errors } } = useForm();

    function buttonEntrar(data) {
        registerAccessData(data.email, data.telefone, data.senha)
        navigate(routes.TELA_MENU)
        navigation.reset({ index: 0, routes: [{ name: routes.TELA_MENU }] })
    }

    function isValidPassword(password, type) {
        setDoublePassword({ ...doublePassword, [type]: password })

        const ok = doublePassword.senha === doublePassword.confirmarSenha
        if (!ok) {
            setErrorMessage("As senhas não coincidem")
        } else {
            setErrorMessage("")
        }

        return ok
    }

    function handleKeyDown(e) {
        if (e.nativeEvent.key == "Enter") {
            Keyboard.dismiss();
        }
    }

    return (
        <DogtorView should_show_title={true} hide_go_next={true} in_register={true}>
            <View style={styles.header}>
                <Text style={styles.title}>Dados de Acesso</Text>
                <Text style={styles.subTitle}>Esses dados serão necessários para entrar no aplicativo mais tarde!</Text>
            </View>
            <View style={styles.body}>
                <View>
                    {<Controller
                        control={control}
                        name="email"
                        rules={{
                            required: true,
                            validate: isValidEmail,
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.email ? styles.inputErrors : styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder="E-mail"
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}

                    {<Controller
                        control={control}
                        name="telefone"
                        rules={{
                            required: true,
                            validate: isValidPhone,
                        }}
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
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}
                    {<Controller
                        control={control}
                        name="senha"
                        rules={{
                            required: true,
                            validate: (senha) => {
                                return isValidPassword(senha, "senha")
                            },
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.senha ? styles.inputErrors : styles.input}
                                secureTextEntry={!showPassword}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Senha"
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}
                    {<Controller
                        control={control}
                        name="confirmarSenha"
                        rules={{
                            required: true,
                            validate: (senha) => {
                                return isValidPassword(senha, "confirmarSenha")
                            },
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={errors.confirmarSenha ? styles.inputErrors : styles.input}
                                secureTextEntry={!showPassword}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Confirmar Senha"
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
                <View style={styles.nextButtonContainer}>
                    <TouchableHighlight style={styles.goBack} onPress={() => { navigate(routes.TELA_CADASTRO_ENDERECO) }}>
                        <View>
                            <Text style={{ color: colors.DOGTOR_BLUE }}>Voltar</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{ flex: 1 }} />
                    <TouchableHighlight style={styles.goNext} onPress={handleSubmit(buttonEntrar)}>
                        <View>
                            <Text style={{ color: 'white' }}>Entrar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </DogtorView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        textAlign: 'flex-start',
        justifyContent: 'flex-start',
    },
    body: {
        flex: 1,
        justifyContent: 'space-between',
    },

    input: {
        ...inputStyle
    },
    inputErrors: {
        ...inputErrorStyle
    },
    title: {
        ...titleStyle
    },
    subTitle: {
        ...subTitleStyle
    },
    nextButtonContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
    },
    goNext: {
        ...buttonStyle,
        flex: 5,
        backgroundColor: '#41C4E5',
    },
    goBack: {
        ...buttonStyle,
        flex: 5,
        backgroundColor: 'transparent',
        borderColor: '#41C4E5',
        borderWidth: 1,
    },

    errorMessage: {
        color: "red",
        fontSize: 14,
        padding: 8,
    },
});
