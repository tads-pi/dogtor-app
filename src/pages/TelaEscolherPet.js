import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AuthContext } from '../components/Context'
import PetWrapper from '../components/PetWrapper'

export default function TelaEscolherPet() {
  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.blueBar}></View>
        <View style={styles.navBar}>
          <TouchableOpacity><Image source={require('./assets/back.png')} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('./assets/cancel.png')} /></TouchableOpacity>
        </View>
        <View style={styles.dogNoExiste}>
          <Text style={[styles.subtitle, { marginTop: 20 }]}>
            Escolha o pet que irá para a consulta
          </Text>
          <Text style={styles.descriptionColor}>
            Clique em um desses fofinhos para selecionar
          </Text>
        </View>
        <View style={styles.petExists}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              // todo think about a case where user do not have pets
              user.pets.map((pet) => (
                <PetWrapper pet={pet} key={pet.id}></PetWrapper>
              ))
            }
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.btnProcurarAtendimento}>
          <Text style={styles.btnProcurarAtendimentoText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  petExists: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 32,
    marginTop: 8,
    marginLeft: 20,
    flexDirection: "row",
  },
  petDoesNotExists: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    margin: 40,
  },
  petDoesNotExistsImage: {
    height: 275,
    width: 285,
  },
  petDoesNotExistsTitle: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: "000000",
  },
  petDoesNotExistsSubtitle: {
    fontSize: 12,
    color: "#ACBBC3",
    maxWidth: "75%",
    textAlign: "center",
    margin: 5,
  },
  blueBar: {
    backgroundColor:
      '#41C4E5',
    width: 290,
    height: 14
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  descriptionColor: {
    marginTop: 8,
    color: '#ACBBC3',
  },
  subtitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 17,
  },
  dogNoExiste: {
    flex: 1,
    alignItems: 'center',
    margin: 40,
    marginBottom: 70,
  },
  btnProcurarAtendimento: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: 328,
    height: 66,
    marginTop: 70,
    borderRadius: 11,
    backgroundColor: '#41C4E5',
  },
  btnProcurarAtendimentoText: {
    color: '#FFFFFF',
  },
});