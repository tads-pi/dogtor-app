import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import routes from '../routes';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// Step 01
export default function TelaCadastroInfoPessoais() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigation().navigate
 


  let [fontsLoaded] = useFonts({
    'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function onSubmit(data) {
    console.log(data);
    navigate(routes.TELA_CADASTRO_ENDERECO)
  }

  return (
    <SafeAreaView>
      <View style={styles.div}>
        <View style={styles.header}>
          <Text style={styles.dogtorText}>DOGTOR</Text>
          <Text style={styles.title}>Iformações pessoais</Text>
          <Text style={styles.subTitle}>Primeiro de tudo, vamos nos conhecer.{'\n'}
            Nos diga, quem é você?</Text>
        </View>
        <View style={styles.body}>
          <View>
            {<Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (

                <TextInput
                  style={errors.name ? styles.inputErrors : styles.input}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nome completo"
                />
              )}
            />}
            {<Controller
              control={control}
              name="dataNascimento"
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInputMask
                  style={errors.dataNascimento? styles.inputErrors:styles.input}
                  placeholder="data de nascimento"
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
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInputMask
                  style={errors.cpf ? styles.inputErrors : styles.input}
                  placeholder="CPF"
                  type={'cpf'}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
            />}
          </View>
          <View>
            <TouchableHighlight style={styles.button} onPress={handleSubmit(onSubmit)}>
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



