import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectUserData, UserData } from '../store/slices/userDataSlice'
import PetWrapper from '../components/PetWrapper';

export default function TelaMenu() {
  const navigate = useNavigation().navigate;
  const user = useSelector(selectUserData) as UserData

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={styles.text}>Olá, {user.name}</Text>
          <Text style={styles.subtext}>Bom dia!</Text>
        </View>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={require('../assets/images/Hero.png')} />
        </View>
        <Text style={styles.subtitle_atendimentos}>Atendimentos</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <View style={[styles.btn, styles.btnBlue]}>
              <Image source={require('../assets/images/Banheira.png')} />
            </View>
            <Text style={styles.text_atendimento}>Banho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={[styles.btn, styles.btnOrange]}>
              <Image source={require('../assets/images/Dentista.png')} />
            </View>
            <Text style={styles.text_atendimento}>Dentista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={[styles.btn, styles.btnPink]}>
              <Image source={require('../assets/images/Cirurgia.png')} />
            </View>
            <Text style={styles.text_atendimento}>Cirurgia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={[styles.btn, styles.btnDarkBlue]}>
              <Image source={require('../assets/images/Vacina.png')} />
            </View>
            <Text style={styles.text_atendimento}>Vacina</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAdd}>
          <Text style={styles.subtitle}>Seus Pets</Text>
          <TouchableOpacity>
            <Text style={styles.btnAdd}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        {
          user.pets.length > 0
            ?
            <View style={styles.petExists}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {
                  user.pets.map((pet) => (
                    <PetWrapper pet={pet} key={pet.id}></PetWrapper>
                  ))
                }
              </ScrollView>
            </View>

            : (() => {
              return (
                <View style={styles.petDoesNotExists}>
                  <Image source={require('../assets/images/DogNoExiste.png')} style={styles.petDoesNotExistsImage} />
                  <Text style={styles.petDoesNotExistsTitle}>
                    Você não adicionou nenhum pet
                  </Text>
                  <Text style={styles.petDoesNotExistsSubtitle}>
                    Aperte o botão "Adicionar" para que possamos exibi-lo aqui
                  </Text>
                </View>
              )
            })()
        }

        <TouchableOpacity style={styles.btnProcurarAtendimento}>
          <Image source={require('../assets/images/Search.png')} />
          <Image source={require('../assets/images/Line.png')} />
          <Text style={styles.btnProcurarAtendimentoText}>Procurar Atendimento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 8,
    width: 375,
    height: 140,
    resizeMode: "contain",
    borderRadius: 12,
  },
  text: {
    color: '#282C26',
    fontSize: 24,
    fontWeight: "600",
    marginTop: 5,
    marginLeft: 17,
  },
  subtext: {
    color: '#45565F',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 17,
  },
  text_atendimento: {
    color: '#869298',
    fontSize: 12,
  },
  subtitle_atendimentos: {
    color: '#282C26',
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 17,
  },
  subtitle: {
    color: '#282C26',
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 17,
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 48,
    // backgroundColor: "red"
  },
  btn: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 10,
    // padding: 16,
  },
  btnBlue: {
    backgroundColor: '#3D9CF3',
  },
  btnOrange: {
    backgroundColor: '#F47800',
  },
  btnPink: {
    backgroundColor: '#F5C5D3',
  },
  btnDarkBlue: {
    backgroundColor: '#2A435F',
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