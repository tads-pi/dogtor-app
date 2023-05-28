import React from "react"
import { View,Text,Image,TouchableOpacity} from "react-native"
import styles from "./style"

export default function Title1() {
  return(
    <View>
    
    <View style={styles.boxTitle}>
    <Text style={styles.textTitle}>Agendamento enviado com sucesso!</Text>
    </View>

    <View>
    <Image style={styles.image} source={require('../../assets/dog.png')}/>
    </View>



    <View style={styles.boxTitle1}>
    <Text style={styles.textTitle1}>Seu pedido de agendamento foi enviado com sucesso para a clínica.</Text>
    </View>

    <TouchableOpacity
    style={styles.buttonRetry}
    
    >
    <Text style={styles.textButtonRetry}>Voltar ao Início</Text>
    </TouchableOpacity>
    

    </View>


  );
  
  }
