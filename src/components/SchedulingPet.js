import React, { useContext } from 'react';
import { Card } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

export default function SchedulingPet(props) {
  const { pet } = props
  const { name, birth_year, size, weight } = pet

  const birthYear = moment(birth_year, "YYYY")
  let age = moment().diff(birthYear, "years")

  if (age > 1) {
    age = `${age} anos`
  } else {
    age = `${age} ano`
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: '10px' }}>
        <Card style={styles.cardInfoPets}>
          <Text style={styles.paragraph}>
            {age}
          </Text>
          <Text style={styles.subParagraph}>
            Idade
          </Text>
        </Card>

        <Card style={styles.cardInfoPets}>
          <Text style={styles.paragraph}>
            {size}cm
          </Text>
          <Text style={styles.subParagraph}>
            Tamanho
          </Text>
        </Card>

        <Card style={styles.cardInfoPets}>
          <Text style={styles.paragraph}>
            {weight}kg
          </Text>
          <Text style={styles.subParagraph}>
            Peso
          </Text>
        </Card>
      </View>

      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        Agendamentos de {name}
      </Text>

      <View style={{ width: '100%' }}>
        <Card style={styles.cardSchedulling}>
          <Text style={styles.schedulingParagraph}>
            Dentista
          </Text>
          <Text style={styles.schedulingPSubParagraph}>
            Veterinário dos pets
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
            <Card style={styles.cardDateTime}>
              <Text style={styles.textCardDateTime}>
                31 de Dezembro
              </Text>
            </Card>

            <Card style={styles.cardDateTime}>
              <Text style={styles.textCardDateTime}>
                12:00
              </Text>
            </Card>
          </View>
        </Card>

        <Card style={styles.cardSchedulling}>
          <Text style={styles.schedulingParagraph}>
            Dentista
          </Text>
          <Text style={styles.schedulingPSubParagraph}>
            Veterinário dos pets
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
            <Card style={styles.cardDateTimeDisabled}>
              <Text style={styles.textCardDateTime}>
                12 de Janeiro
              </Text>
            </Card>
            <Card style={styles.cardDateTimeDisabled}>
              <Text style={styles.textCardDateTime}>
                14:00
              </Text>
            </Card>
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  cardInfoPets: {
    border: 'solid 1px #41C4E5',
    borderRadius: 10,
    width: 85,
    padding: 10,
    backgroundColor: '#E8ECEF'
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subParagraph: {
    fontSize: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    width: '80%',
    border: '1px solid #ACBBC3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  schedulingParagraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  schedulingPSubParagraph: {
    fontSize: 12,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'gray'
  },
  cardDateTime: {
    marginTop: 6,
    backgroundColor: '#41C4E5',
    paddingLeft: 12,
    paddingRight: 12,
  },
  cardDateTimeDisabled: {
    marginTop: 6,
    backgroundColor: 'gray',
    paddingLeft: 12,
    paddingRight: 12,
  },
  textCardDateTime: {
    fontSize: 12,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'white',
  },
  cardSchedulling: {
    border: 'solid 1px blue',
    borderRadius: 10,
    width: '100%',
    padding: 10,
    marginTop: 15,
  },
});