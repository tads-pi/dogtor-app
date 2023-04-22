import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={styles.text}>Texto Generico</Text>
          <Text style={styles.text}>Bom dia!</Text>
        </View>
        <View style={styles.containerImage}>
          <Image source={require('./assets/Hero.png')} />
        </View>
        <Text style={styles.subtitle}>Atendimentos</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.btn}>
              <Image source={require('./assets/Banheira.png')} />
            </View>
            <Text>Banho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.btnOrange}>
              <Image source={require('./assets/Dentista.png')} />
            </View>
            <Text>Dentista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.btnPink}>
              <Image source={require('./assets/Cirurgia.png')} />
            </View>
            <Text>Cirurgia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.btnDarkBlue}>
              <Image source={require('./assets/Cirurgia.png')} />
            </View>
            <Text>Vacina</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAdd}>
          <Text style={styles.subtitle}>Seus cachorros</Text>
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnAdd}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dogNoExiste}>
          <Image source={require('./assets/DogNoExiste.png')} />
          <Text style={[styles.subtitle, {marginTop: 20}]}>
            Você não adicionou nenhum cachorro
          </Text>
          <Text>
            Aperte o botão "Adicionar" para que possamos exibi-lo aqui
          </Text>
        </View>
        <TouchableOpacity style={styles.btnProcurarAtendimento}>
          <Image source={require('./assets/Search.png')} />
          <Image source={require('./assets/Line.png')} />
          <Text style={styles.btnProcurarAtendimentoText}>Procurar Atendimento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    margin: 32,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    marginTop: 5,
    marginLeft: 17,
  },
  subtitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 17,
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
    marginTop: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 16,
  },
  btn: {
    width: 60,
    height: 55,
    backgroundColor: '#3D9CF3',
    padding: 17,
    borderRadius: 8,
    marginBottom: 8,
  },
  btnOrange: {
    width: 60,
    height: 55,
    backgroundColor: '#F47800',
    paddingLeft: 19,
    paddingTop: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  btnPink: {
    width: 60,
    height: 55,
    backgroundColor: '#F5C5D3',
    padding: 17,
    borderRadius: 8,
    marginBottom: 8,
  },
  btnDarkBlue: {
    width: 60,
    height: 55,
    backgroundColor: '#2A435F',
    padding: 17,
    borderRadius: 8,
    marginBottom: 8,
  },
  btnAdd: {
    color: '#41C4E5',
  },
  containerAdd: {
    flex: 1,
    marginTop: -32,
    marginRight: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dogNoExiste: {
    flex: 1,
    alignItems: 'center',
   
    margin: 40,
  },
  btnProcurarAtendimento: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: 328,
    height: 66,
    marginBottom: 16,
    borderRadius: 11,
    backgroundColor: '#41C4E5',
  },
  btnProcurarAtendimentoText: {
    color: '#FFFFFF',
  },
});