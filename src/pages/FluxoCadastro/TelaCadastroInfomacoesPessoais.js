import React, { useContext } from 'react';
import { AuthContext } from '../../../context/auth';
import { isValidBirthDate, isValidDocument, isValidName } from '../../utils/validators';
import { buttonStyle, inputErrorStyle, inputStyle, subTitleStyle, titleStyle } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { Text, StyleSheet, TextInput, TouchableHighlight, View, Keyboard } from 'react-native';
import DogtorView from '../../components/DogtorView';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import * as constants from '../../constants/fluxoCadastro';
import routes from '../../routes';

// Step 01
export default function TelaCadastroInfoPessoais({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { registerPersonalInfo } = useContext(AuthContext)
  const navigate = useNavigation().navigate

  function onSubmit(data) {
    registerPersonalInfo(data.name, data.dataNascimento, data.cpf)
    navigate(routes.TELA_CADASTRO_ENDERECO)
  }

  function handleKeyDown(e) {
    if (e.nativeEvent.key == "Enter") {
      Keyboard.dismiss();
    }
  }

  function goBack() {
    navigate(routes.TELA_LOGIN)
    navigation.reset({ index: 0, routes: [{ name: routes.TELA_LOGIN }] })
  }

  return (
    <DogtorView should_show_title={true} hide_go_next={true} in_register={true}>
      <View style={styles.header}>
        <Text style={styles.title}>Informações pessoais</Text>
        <Text style={styles.subTitle}>Primeiro de tudo, vamos nos conhecer.{'\n'}Nos diga, quem é você?</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          {<Controller
            control={control}
            name="name"
            rules={{
              required: true,
              validate: isValidName,
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={errors.name ? styles.inputErrors : styles.input}
                value={value}
                onChangeText={onChange}
                placeholder="Nome completo"
                returnKeyType="done"
                onKeyPress={handleKeyDown}
              />
            )}
          />}
          {<Controller
            control={control}
            name="dataNascimento"
            rules={{
              required: true,
              validate: (date) => {
                return isValidBirthDate(date, constants.MINORITY_AGE)
              },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInputMask
                style={errors.dataNascimento ? styles.inputErrors : styles.input}
                placeholder="Data de nascimento"
                returnKeyType="done"
                onKeyPress={handleKeyDown}
                type="datetime"
                options={{
                  format: 'DD/MM/YYYY',
                }}
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                }}
              />
            )}
          />}
          {<Controller
            control={control}
            name="cpf"
            rules={{
              required: true,
              validate: isValidDocument
            }}
            render={({ field: { value, onChange } }) => (
              <TextInputMask
                style={errors.cpf ? styles.inputErrors : styles.input}
                placeholder="CPF"
                returnKeyType="done"
                onKeyPress={handleKeyDown}
                type={'cpf'}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            )}
          />}
        </View>

        <View style={styles.nextButtonContainer}>
          <TouchableHighlight style={[styles.goNext]} onPress={handleSubmit(onSubmit)}>
            <View>
              <Text style={{ color: 'white' }}>Continuar</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.goBack]} onPress={goBack}>
            <View>
              <Text style={{ color: '#41C4E5' }}>Já possuo conta</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View >
    </DogtorView>
  );
}

const styles = StyleSheet.create({
  container: {

  }, 
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
  },
  form: {
  },
  goNext: {
    ...buttonStyle,
    backgroundColor: '#41C4E5',
  },
  goBack: {
    ...buttonStyle,
    marginTop: 16,
    backgroundColor: 'transparent',
    borderColor: '#41C4E5',
    borderWidth: 1,
  },
});