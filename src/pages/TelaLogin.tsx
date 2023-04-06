import React, {useState} from 'react';
import barlowLight from "../assets/fonts/Barlow-Light.ttf"
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
import AppLoading from 'expo-app-loading';

const TelaLogin = () => {
  const [email, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');
  let [fontsLoaded] = useFonts({
    'Barlow-Light': barlowLight,
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  let Users = [{ email: "guilherme@thomazin.com", password: "1234" }]

  function validador() {
    for (const emailValidador of Users) {
      if (emailValidador.email === email) {
        for (const senha of Users) {
          if (senha.password === password) {
            Alert.alert('Bem Vindo')
          }
          else {
            Alert.alert('senha incoreta')
          }
        }
      } else {
        Alert.alert('e-mail incorreto')
      }
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
            <Text style={{ color: '#ACBBC3' }}  >Não possui uma conta? </Text>
            <Text style={{ fontWeight: "bold", color: "#41C4E5" }}
              onPress={() => Linking.openURL('https://google.com')}>
               Registrar-se</Text>
          </Text>
        </View>
      </View>

    </SafeAreaView >
  );
};

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

export default TelaLogin;