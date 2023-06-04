import { StyleSheet,View,Dimensions,Text,Image, TouchableOpacity} from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function FluxoCadastroPet(){

    return(
        <View style = {styles.container}>

        <TouchableOpacity style = {styles.navBar}>
            <Image source={require("../assets/voltar.png")} />
        </TouchableOpacity>
          
        <Text style = {styles.fotoDoPet}>
                Foto do Pet 
        </Text>

        <Text style = {styles.SubTitle}>
                Vamos criar uma linda montagem para o seu pet, não se preocupe!
        </Text>

        <Image style = {styles.image} source={require("../assets/adicionar.png")} />


        <TouchableOpacity style = {styles.btnAdicionar}>
            <Text style = {styles.textadd}> 
                Adicionar
            </Text>
        </TouchableOpacity>

        </View>

    );
};
const styles = StyleSheet.create({

        container: {

            backgroundColor: 'white',
            paddingTop: 24,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 30,
            width: screenWidth,
            height: screenHeight,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        },

        navBar: {
            marginTop: 20,
            alignSelf:  "flex-start",
            
      
        },
        fotoDoPet: {
            color: '#282C26',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 30,
        },
        SubTitle: {

            color: '#45565F',
            fontSize: 16,
            marginTop: 10,
            justifyContent: "center",            
            textAlign: 'center'
            

        },
        image: {
            
            marginTop: 60,
            
        },
        btnAdicionar: {
            height: 51,
            width: 326,
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",           
            borderRadius: 11,
            backgroundColor: "#41C4E5",
            marginTop: 190,
        },
        textadd: {
            color : 'white',
            fontSize: 16,
        },







    })

