import React from 'react';
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../../context/auth';
import { isValidName, isValidZipCode } from '../../utils/validators';
import { buttonStyle, inputStyle } from './styles';
import { Text, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import DogtorView from '../../components/DogtorView';
import * as colors from "../../constants/colors";
import routes from '../../routes';

// Step 02
export default function TelaCadastroEndereco() {
    const navigate = useNavigation().navigate
    const { registerAddress } = useContext(AuthContext)
    const { control, handleSubmit, formState: { errors } } = useForm();

    function buttonContinuar(data) {
        registerAddress(data.cep, data.rua, data.num, data.complemento, data.cidade, data.estado)
        navigate(routes.TELA_CADASTRO_DADOS_ACESSO)
    }

    function handleKeyDown(e) {
        if (e.nativeEvent.key == "Enter") {
            Keyboard.dismiss();
        }
    }

    return (
        <DogtorView should_show_title={true} hide_go_next={true} in_register={true}>
            <View style={styles.header}>
                <Text style={styles.title}>Seu endereço</Text>
                <Text style={styles.subTitle}>Para encontrarmos estabelecimentos próximos de você</Text>
            </View>
            <View style={styles.body}>
                <View>
                    {<Controller
                        control={control}
                        name="cep"
                        rules={{
                            required: true,
                            validate: (zipCode) => {
                                return isValidZipCode(zipCode)
                            },
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInputMask
                                style={[styles.inputCEP, errors.cep && styles.inputErrors]}
                                value={value}
                                type={'zip-code'}
                                onChangeText={onChange}
                                placeholder="CEP"
                                keyboardType="numeric"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}
                    <View style={styles.streetNameAndNumber}>
                        {<Controller
                            control={control}
                            name="rua"
                            rules={{
                                required: true,
                                validate: isValidName
                            }}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    style={[styles.inputRua, errors.cep && styles.inputErrors]}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Rua"
                                    returnKeyType="done"
                                    onKeyPress={handleKeyDown}
                                />
                            )}
                        />}

                        {<Controller
                            control={control}
                            name="num"
                            rules={{
                                required: true,
                            }}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    style={[styles.inputNum, errors.cep && styles.inputErrors]}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Número"
                                    keyboardType="numeric"
                                    onKeyPress={handleKeyDown}
                                />
                            )}
                        />}
                    </View>
                    {<Controller
                        control={control}
                        name="complemento"
                        rules={{
                            required: true,
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={[styles.inputComplemento, errors.cep && styles.inputErrors]}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Complemento"
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}

                    {<Controller
                        control={control}
                        name="cidade"
                        rules={{
                            required: true,
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={[styles.inputCidade, errors.cep && styles.inputErrors]}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Cidade"
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}
                    {<Controller
                        control={control}
                        name="estado"
                        rules={{
                            required: true,
                        }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                style={[styles.inputEstado, errors.cep && styles.inputErrors]}
                                value={value}
                                onChangeText={onChange}
                                placeholder="Estado"
                                returnKeyType="done"
                                onKeyPress={handleKeyDown}
                            />
                        )}
                    />}
                </View>
                <View style={styles.nextButtonContainer}>
                    <TouchableHighlight style={styles.goBack} onPress={() => { navigate(routes.TELA_CADASTRO_INFO_PESSOAIS) }}>
                        <View>
                            <Text style={{ color: colors.DOGTOR_BLUE }}>Voltar</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{ flex: 1 }} />
                    <TouchableHighlight style={styles.goNext} onPress={handleSubmit(buttonContinuar)}>
                        <View>
                            <Text style={{ color: 'white' }}>Continuar</Text>
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

    inputCEP: {
        ...inputStyle,
    },
    inputEstado: {
        ...inputStyle,
    },
    inputCidade: {
        ...inputStyle,
    },
    inputComplemento: {
        ...inputStyle,
    },
    inputRua: {
        ...inputStyle,
        flex: 4,
        marginRight: 16,
    },
    inputNum: {
        ...inputStyle,
        flex: 1,
    },
    inputErrors: {
        borderColor: "red",
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

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 8,
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 14,
    },
    nextButtonContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row"
    },
    streetNameAndNumber: {
        display: 'flex',
        flexDirection: "row"
    },
});