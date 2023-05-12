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

export default function TelaCadastroInfoPessoais() {
  const { control, handleSubmit, formState: { errors } } = useForm();


  const navigate = useNavigation().navigate
  const dispatch = useDispatch()


  let [fontsLoaded] = useFonts({
    'Barlow-Light': require("../assets/fonts/Barlow-Light.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  function onSubmit() {
    navigate(routes.TELA_CADASTRO_ENDERECO)

  }


  return (
    <SafeAreaView>
      <View style={styles.div}>
        <View style={styles.header}>
          <Text style={styles.dogtorText}>DOGTOR</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Iformações pessoais</Text>
          <Text style={{ fontSize: 16 }}>Primeiro de tudo, vamos nos conhecer. Nos diga, quem é você?</Text>
        </View>

        <View>

          {<Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (

              <TextInput
                style={errors.name ? styles.inputErrors :styles.input }
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
              <TextInput
                style={errors.dataNascimento ? styles.inputErrors :styles.input }
                value={value}
                onChangeText={onChange}
                placeholder="Data de nascimento"
                keyboardType="numeric"



              />
            )}
          />}


          {<Controller
            control={control}
            name="cpf"
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={errors.cpf ?  styles.inputErrors :styles.input }
                value={value}
                onChangeText={onChange}
                placeholder="CPF"
                keyboardType="numeric"



              />
            )}
          />}



          <View style={{
            display: 'flex',
            justifyContent: 'flex-end',
            height: '66.5%',

          }}>
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
  }

});



